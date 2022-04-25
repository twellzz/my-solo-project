import React from "react";
import "./style.css";
import logo from "../../images/cardiogram.png";
import home from "../../images/home.png";
import schedule from "../../images/schedule.png";
import patients from "../../images/Patients.png";
import settings from "../../images/settings.png";
import help from "../../images/help.png";
import logOut from "../../images/LogOut.png";

export default function SideBar() {
  return (
    <nav class="nav-bar">
      <img src={logo} alt="chosen medical related logo" class="logo-img" />
      <ul>
        <li>
          <a href="#">
            <img src={home} alt="" class="icon-img" />
            <span class="nav-item">Home</span>
          </a>
        </li>
        <li>
          <a href="#">
            <img src={schedule} alt="" class="icon-img" />
            <span class="nav-item">Schedule</span>
          </a>
        </li>
        <li>
          <a href="#">
            <img src={patients} alt="" class="icon-img" />
            <span class="nav-item">Patients</span>
          </a>
        </li>
        <li>
          <a href="#">
            <img src={settings} alt="" class="icon-img" />
            <span class="nav-item">Settings</span>
          </a>
        </li>
        <li>
          <a href="#">
            <img src={help} alt="" class="icon-img" />
            <span class="nav-item">Help</span>
          </a>
        </li>
        <li>
          <a href="#" class="logout">
            <img src={logOut} alt="" class="icon-img" />
            <span class="nav-item">Log out</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
