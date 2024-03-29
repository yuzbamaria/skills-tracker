import React, { useState, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addStartDate, addFinishDate, userDB } from "../../utils/database";

const Calendar = () => {
    
        const startDateRef = useRef(null);
        const finishDateRef = useRef(null);  

        const [startDate, setStartDate] = useState(new Date());
        const [finishDate, setFinishDate] = useState(new Date());

        const handleStartDateChange = (date) => {
            setStartDate(date);
            date = date.toLocaleDateString();
            // addStartDate(date);
            addStartDate(date, userDB.currentUser);

        };

        const handleFinishDateChange = (date) => {
            setFinishDate(date);
            date = date.toLocaleDateString()
            // addFinishDate(userDB.currentUser, date);
            // localStorage.setItem("finishDate", date);
            addFinishDate(date, userDB.currentUser);
        };
    
    return (
        <>
        <div className="form-group">
            <label htmlFor="start-date" style={{ marginRight: "10px" }}>Start Date</label>
            <DatePicker 
                type="date" 
                className="form-control" 
                id="start-date" 
                selected={startDate}
                onChange={handleStartDateChange}
                showYearDropdown
                scrollableMonthYearDropdown
                dateFormat="dd/MM/yyyy"
                ref={startDateRef}
            />
        </div>
        <div className="form-group" style={{ marginTop: "10px" }}>
            <label htmlFor="finish-date" style={{ marginRight: "10px" }}>Finish Date</label>
            <DatePicker
                id="finish"
                selected={finishDate}
                onChange={handleFinishDateChange}
                showYearDropdown
                scrollableMonthYearDropdown
                dateFormat="dd/MM/yyyy"
                className="form-control"
                ref={finishDateRef}
            />
        </div>
        </>
    );
 }

export default Calendar;