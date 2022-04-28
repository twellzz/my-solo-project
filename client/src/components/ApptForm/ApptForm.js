import React from "react";
import "./style.css";
import back from "../../images/left-arrow.png";

export default function ApptForm({ firstName, lastName }) {
  return (
    <div class="new-patient-container">
      <img src={back} alt="back button" class="back-arrow" />
      <div class="new-form">
        <div className="input-group">
          <label htmlFor="first-name">First Name</label>
          <input name="first-name" />
        </div>
        <div className="input-group">
          <label htmlFor="last-name">Last Name</label>
          <input name="last-name" />
        </div>
      </div>
    </div>
  );
}
