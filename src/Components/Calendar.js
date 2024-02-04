import React from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import './Calendar.css'


function Calendar() {
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
    // Generate the days of the week header
    const weekHeader = daysOfWeek.map((day, index) => (
      <th className = "calendar-days-of-week" key={index}>
        {day}
      </th>
    ));
  
    // Generate the days of the month in rows
    const rows = [];
    let currentRow = [];

    for (let day = 1; day <= 31; day++) {
        currentRow.push(
        <td key={day} className="calendar-day">
            {day}
            {/* You can render events here based on your data */}
            <div className="event">9 AM Standup</div>
        </td>
        );

        if (currentRow.length === 7 || day === 31) {
        rows.push(<tr key={day}>{currentRow}</tr>);
        currentRow = [];
        }
    }
  
    return (
      <div className="calendar">
        <div className="calendar-header">
          <button className="button">Previous</button>
          <h2>February 2024</h2>
          <button className="button">Next</button>
        </div>
        
        <table bordered responsive className="calendar-table">
          <thead>
            <tr className="calendar-header-row" >{weekHeader}</tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>
    );
  }
  
  

export default Calendar;
