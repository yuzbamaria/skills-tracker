import React from "react";
import Calendar from "../components/Calendar";
import SkillNameInput from "../components/SkillNameInput";
import YoutubeAPIResult from "../components/YoutubeAPIResult";
import ToDoList from "../components/ToDoList";
import "./css/CreateSkill.css"

function CreateSkill() {
    return(<div>
        <div className="container d-flex justify-content-center">
            <div className="row">
                <div className="col">
                    <div className="card skill-card">
                        <div className="card-body">
                            <h2 className="card-title text-center">
                                Add YouTube tutorial
                            </h2>
                            <SkillNameInput />
                            <Calendar />
                            <YoutubeAPIResult />
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card skill-card">
                        <div className="card-body">
                            <h2 className="card-title text-center">
                                Add books
                            </h2>
                            <SkillNameInput />
                        </div>
                    </div>
                </div>
            {/* </div> */}
            {/* <div className="row"> */}
                <div className="col">
                    <div className="card skill-card">
                        <div className="card-body">
                            {/* <h2 className="card-title text-center">
                                To-Do lis
                            </h2> */}
                            <ToDoList />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export default CreateSkill;


// Create a page CreateSkill.jsx +
// CreateSkill.jsx my part will render: 
// Header with Logo +
// Title - Add a new skill +
// Skill Name - User input +
// Set dates component +
//    Skill name - input (save to Local storage)
//    Start date and Finish date (save to Local storage)
// Coursera Search +
//    user input +
//    button +
//    Coursera API 
// ToDoList component 
//    user input where a user creates a to do list manually (save to Local storage)
