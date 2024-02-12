import React, { useState } from 'react';

function ToDoList() {
    // State for managing the list of to-do items
    // An empty array to store todo items 
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
        // Clear the input field by resetting the inputText state to an empty string
        setInputText('');
    }
};

// Function to handle changes in the checkbox
const handleCheckboxChange = (id) => {
    // Update the todos state by mapping over the existing todos array
    setTodos(todos.map(todo => {
        // If the ID of the current todo matches the ID of the clicked checkbox
        if (todo.id === id) {
            // Toggle the completed status of the todo
            return { ...todo, completed: !todo.completed };
        }
        // If the ID does not match, return the todo unchanged
        return todo;
    }));
};

 // Render the TodoList component
 return (
    <div>
        {/* Heading for the to-do list */}
        <h2>To-Do List</h2>
        {/* Form for adding new to-do items */}
        <form onSubmit={handleSubmit}>
            {/* Input field for typing new to-do items */}
            <input 
            type="text" 
            value={inputText}
            onChange={handleInputChange}
            placeholder="Add a new to-do"
            />
            {/* Button for submitting the form */}
            <button type="submit">Add</button>
        </form>
        {/* Render the list of to-do items */}
        <ul>
            {/* Map over the todos array to render each to-do item */}
            {todos.map(todo => (
                // Each to-do item is rendered as a list item with a unique key
                <li key={todo.id}>
                    {/* Checkbox input for marking the to-do item as completed */}
                    <input 
                        type="checkbox" 
                        checked={todo.completed}
                        onChange={() => handleCheckboxChange(todo.id)}
                    />
                    {/* Display the text of the to-do item */}
                    <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                        {todo.text}
                    </span>
                </li>
            ))}
        </ul>
    </div>
 )
}

 export default ToDoList;