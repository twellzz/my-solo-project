import React from "react";
import PatientCard from "../PatientCard/PatientCard";
import "./style.css";

export default function TodaysPatients() {
  return (
    <>
      <PatientCard />
      <div class="patients-container">
        <div class="todays-patients">Today's Patients</div>
      </div>
    </>
  );
}
