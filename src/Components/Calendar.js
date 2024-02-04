import React from 'react';
import { Link } from 'react-router-dom';
//import './HomePage.css'; 
import './Calendar.css'
import Home from '../sunrise.png';


function Calendar() {
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
    // Generate the days of the week header
    const weekHeader = daysOfWeek.map((day, index) => (
      <div key={index} className="calendar-day-header">
        {day}
      </div>
    ));
  
    // Generate the days of the month
    const daysOfMonth = [];
    for (let day = 1; day <= 31; day++) {
      // You can add your logic to display events on specific days
      daysOfMonth.push(
        <div key={day} className="calendar-day">
          {day}
          {/* You can render events here based on your data */}
          <div className="event">9 AM Standup</div>
        </div>
      );
    }
  
    return (
      <div className="calendar">
        <div className="calendar-header">
          <button className="button">Previous</button>
          <h2>February 2024</h2>
          <button className="button">Next</button>
        </div>
  
        <div className="calendar-grid">
          <div className="calendar-days-of-week">{weekHeader}</div>
          <div className="calendar-days">{daysOfMonth}</div>
        </div>
      </div>
    );
  }
  
  

export default Calendar;
