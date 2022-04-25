import React from "react";
import "./style.css";
import juan from "../../images/Juan.png";

export default function PatientCard() {
  return (
    <>
      <div className="card-container">
        <div className="upper-container">
          <div className="img-container">
            <img src={juan} class="imgs"></img>
          </div>
        </div>
        <div className="lower-container">
          <h3>Juan Palacios</h3>
          <h4>New Patient</h4>
          <h5>Insurance Plan</h5>
          <div>
            <p>Visiting because he needs to get a brain reduction surgery</p>
          </div>
          <div>
            <a href="#" class="more-btn">
              See more
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
