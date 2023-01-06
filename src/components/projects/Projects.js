import React from "react";
import "./Projects.css";
import Sticky from "../../images/sticky.png";
import StickyNotes from "../../images/sticky_notes.png";
import Weather from "../../images/weather.png";
import WeatherApp from "../../images/weather_app.png";

export default function Projects() {
  return (
    <div className="projects">
      <div className="projects-wrap">
        <div className="pic-1">
          <br />
          <a
            href="https://weather-app-react-sofia.netlify.app/"
            target="_blank"
            rel="opener"
          >
            <img src={Weather} alt="" className=" weather" />
          </a>
          <img src={WeatherApp} alt="" className=" pic" />
        </div>

        <div className="pic-2">
          <a
            href="https://stickynotesapp-react.netlify.app/"
            target="_blank"
            rel="opener"
          >
            {" "}
            <img src={Sticky} alt="" className="sticky" />
          </a>
          <img src={StickyNotes} alt="" className=" pic" />
        </div>
      </div>
    </div>
  );
}
