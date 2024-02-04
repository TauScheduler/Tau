import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './Calendar.css';

function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [view, setView] = useState('month');

  // Constants
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  // Change month
  const changeMonth = (offset) => {
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + offset)));
  };

  // Change view
  const changeView = (newView) => {
    setView(newView);
  };

  // Generate the days of the week header
  const weekHeader = daysOfWeek.map((day, index) => (
    <th className="calendar-days-of-week" key={index}>
      {day}
    </th>
  ));

  // Get days in month
  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  // Generate the days of the month in rows
  const generateMonthView = () => {
    const rows = [];
    let currentRow = [];
    const daysInMonth = getDaysInMonth(currentDate);
    const startDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

    // Padding for first row
    for (let i = 0; i < startDay; i++) {
      currentRow.push(<td key={'padding-' + i} className="calendar-day-empty"></td>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      currentRow.push(
        <td key={day} className="calendar-day">
          {day}
          {/* You can render events here based on your data */}
          <div className="event">Event</div>
        </td>
      );

      if ((day + startDay) % 7 === 0 || day === daysInMonth) {
        rows.push(<tr key={day}>{currentRow}</tr>);
        currentRow = [];
      }
    }

    return <tbody>{rows}</tbody>;
  };
  
  const getWeekBounds = (date) => {
    const start = new Date(date);
    start.setDate(start.getDate() - start.getDay()); // set to the previous Sunday
    const end = new Date(start);
    end.setDate(end.getDate() + 6); // set to the next Saturday
    return { start, end };
  };

  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 6; hour <= 21; hour++) { // assuming a day from 6am to 9pm
      slots.push(
        <div key={hour} className="calendar-time-slot">
          {`${hour}:00`}
        </div>
      );
    }
    return slots;
  };


  const generateWeekView = () => {
  const weekDays = [];
  const { start } = getWeekBounds(currentDate);

  for (let i = 0; i < 7; i++) {
    const day = new Date(start);
    day.setDate(day.getDate() + i);

    weekDays.push(
      <div key={i} className="calendar-week-day">
        {/* Each day's date and events will be rendered here */}
        {day.toLocaleDateString()}
        {/* Placeholder for events */}
        <div className="calendar-event">Event</div>
      </div>
    );
  }

  return (
    <div className="calendar-week-view">
      <div className="calendar-time-axis">
        {generateTimeSlots()}
      </div>
      <div className="calendar-week-grid">
        {weekDays}
      </div>
    </div>
  );
};

  const generateDayView = () => {
    return (
      <div className="calendar-day-view">
        {/* Render a single day with time slots */}
        {generateTimeSlots()}
        {/* Placeholder for events */}
        <div className="calendar-event">Event</div>
      </div>
    );
  };

  // Render view based on state
  const renderView = () => {
    switch (view) {
      case 'day':
        return generateDayView();
      case 'week':
        return generateWeekView();
      default:
        return generateMonthView();
    }
  };

  return (
    <div className="calendar">
      <div className="calendar-header">
        <button className="button" onClick={() => changeMonth(-1)}>
          Previous
        </button>
        <h2>
          {currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}
        </h2>
        <button className="viewbutton" onClick={() => changeView('month')}>
          Month View
        </button>
        <button className="viewbutton" onClick={() => changeView('week')}>
          Week View
        </button>
        <button className="viewbutton" onClick={() => changeView('day')}>
          Day View
        </button>
        <button className="button" onClick={() => changeMonth(1)}>
          Next
        </button>
      </div>

      <table className="calendar-table">
        <thead>
          <tr className="calendar-header-row">{weekHeader}</tr>
        </thead>
        {renderView()}
      </table>
    </div>
  );
}

export default Calendar;
