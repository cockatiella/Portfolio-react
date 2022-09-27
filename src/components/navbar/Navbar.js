import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="div-nav">
      <nav>
        <ul>
          <li>
            <a  className="nav-link" href="#">Home</a>
          </li>
          <li>
            <a  className="nav-link"href="#">My Skills</a>
          </li>
          <li>
            <a  className="nav-link"href="#">Projects</a>
          </li>
          <li>
            <a className="nav-link" href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
