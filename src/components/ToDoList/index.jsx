import React, { useState} from 'react';
import { addToDoList, toDoCompleted, userDB } from '../../utils/database'


function ToDoList() {
    // State for managing the list of to-do items
    const [todos, setTodos] = useState([]);
    // State for managing the text input value
    const [inputText, setInputText] = useState('');
    
    // Function to handle changes in the input field
    const handleInputChange = (event) => {
        // Update the inputText state with the new value typed by the user
        setInputText(event.target.value);
    }

    // Function to handle form submission
    const handleSubmit = (event) => {
        // Prevent the default form submission behavior
        event.preventDefault();
        const user = userDB.currentUser;
        // Check if the input text is not empty
        if (inputText.trim() !== '') {
            // Create a new to-do object with a unique ID, text from the input field, 
            // and completed status set to false
            const newTodo = {
                id: todos.length + 1,  // Generate a unique ID by incrementing the length of the todos array
                text: inputText, // Set the text of the new to-do to the value of the input text
                completed: false // Set the completed status of the new to-do to false
            };

            // Add the new to-do to the todos array using spread syntax
            setTodos([...todos, newTodo]);
            // addToDoList(userDB.currentUser, newTodo);
            addToDoList(newTodo, user);
            // Clear the input field by resetting the inputText state to an empty string
            setInputText('');
        }
    };

    // Function to handle changes in the checkbox
    const handleCheckboxChange = (id) => {
        const user = userDB.currentUser;
        console.log(id)
        // Update the todos state by mapping over the existing todos array
        setTodos(todos.map(todo => {
            // If the ID of the current todo matches the ID of the clicked checkbox
            if (todo.id === id) {
                console.log("hello", todos)
                // Toggle the completed status of the todo
                const updatedToDo = { ...todo, completed: !todo.completed };
                toDoCompleted(updatedToDo, user);
                return updatedToDo
            }
            // If the ID does not match, return the todo unchanged
            return todo;
        }));
        
    };

 return (
    <>
    
        {/* Form for adding new to-do items */}
        <form onSubmit={handleSubmit}>
        <div className="input-group mb-3">
            {/* Input field for typing new to-do items */}
            <input 
            type="text" 
            value={inputText}
            onChange={handleInputChange}
            placeholder="Add a new to-do..."
            className="form-control" 
            // className="form-control"
            // aria-label="Search" 
            />
            <button 
                className="btn btn-outline-secondary search-btn">
                    Add
            </button>
            {/* <button className='btn btn-warning shadow m-2' onClick={searchBooks}>Search</button> */}
        </div>
        </form>
        {/* Render the list of to-do items */}
        <ul>
            {/* Map over the todos array to render each to-do item */}
            {todos.map(todo => (
                // Each to-do item is rendered as a list item with a unique key
                <li key={todo.id} className="checkbox-item">
                    {/* Checkbox input for marking the to-do item as completed */}
                    {/* <input 
                        type="checkbox" 
                        checked={todo.completed}
                        onChange={() => handleCheckboxChange(todo.id)}
                    /> */}
                    {/* Display the text of the to-do item */}
                    <span>
                        <p className="custom-todo">{todo.text}</p>
                    </span>
                </li>
            ))}
        </ul>
    </>
 )
}

 export default ToDoList;