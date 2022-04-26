import React from "react";
import "./style.css";

export default function NewAppt() {
  return (
    <form className="new-appt-container">
      <div className="input-group">
        <label htmlFor="first-name">First Name</label>
        <input name="first-name"></input>
      </div>
      <div className="input-group">
        <label htmlFor="last-name">Last Name</label>
        <input name="last-name"></input>
      </div>
      <div className="input-group">
        <label>Date</label>
        <input
          placeholder="5/12/2019, 12:09"
          name="date"
          type="datetime-local"
        ></input>
      </div>
      <div className="input-group">
        <label>Visit Details</label>
        <input name="visit-details"></input>
      </div>
      <button type="submit" className="submit-button">
        Create Appointment
      </button>
    </form>
  );
}
