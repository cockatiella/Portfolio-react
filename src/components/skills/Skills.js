import React from "react";
import "./Skills.css";
import Component3 from "../../images/Component 3.png";
import Component4 from "../../images/Component 4.png";

export default function Skills() {
  return (
    <div>
      <div className="rosa-1">
        <img
          className="logos animate__animated animate__flash"
          src={Component3}
          alt="icons"
        />
      </div>

      <div className="green-2">
        <div className="skillsdiv animate__animated animate__bounceInRight">
          <h1 className="skills">UI/UX Design</h1>
          <ul>
            <li className="skill">✨Blasamiq</li>
            <li className="skill">✨Figma</li>
            <li className="skill">✨Adobe xD</li>
          </ul>
        </div>
      </div>
      <div className="green-3">
        <div className="skillsdiv animate__animated animate__bounceInLeft">
          <h1 className="skills">Frontend Development</h1>
          <ul>
            <li className="skill">✨HTML</li>
            <li className="skill">✨CSS</li>
            <li className="skill">✨JavaScript</li>
            <li className="skill">✨React</li>
          </ul>
        </div>
      </div>
      <div className="rosa-4">
        <div className="img-container">
          <img
            className="logos2 animate__animated animate__flash"
            src={Component4}
            alt="icons"
          />
        </div>
      </div>
    </div>
  );
}
