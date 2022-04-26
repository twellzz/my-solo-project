import React from "react";
import "./style.css";

export default function ApptFirstScreen() {
  return (
    <form class="form-container">
      <div class="new-schedule">Schedule New Appointment</div>
      <button type="submit" class="first-button">
        Appointment For New Patient
      </button>
      <button type="submit" class="first-button">
        Appointment For Returning Patient
      </button>
    </form>
  );
}
