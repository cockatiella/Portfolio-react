import React from "react";
import "./Home.css";
import Ellipse from "../../images/Component 1.png";
import Sofia from "../../images/Component 2.png";

export default function Home() {
  return (
    <div className="main">
      <div className="div-1">
        <h1 className="animate__animated animate__heartBeat">Hello! 👋</h1>
        <h2 className="mx-5 animate__animated animate__lightSpeedInLeft">
          My name is Sofia
        </h2>
        <h3 className="mx-5 animate__animated animate__lightSpeedInLeft">
          I'm a...
        </h3>
        <div className="containerOfContainer">
          <div className="ellipse-container">
            <img src={Ellipse} alt="ellipse" className="ellipse" />
          </div>
        </div>
      </div>

      <div className="div-2">
        <img
          src={Sofia}
          alt="Sofia Dinatolo"
          className="picture mt-5 animate__animated animate__flash"
        />
      </div>
    </div>
  );
}
