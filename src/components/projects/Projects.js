import React from "react";
import "./Projects.css";
import Sticky from "../../images/sticky.png";
import StickyNotes from "../../images/sticky_notes.png";
import Weather from "../../images/weather.png";
import WeatherApp from "../../images/weather_app.png";

export default function Projects() {
  return (
    <div className="projects">
      <div className="">
        <div>
          <br />
         <a href="https://weather-app-react-sofia.netlify.app/" target='_blank'><img src={Weather} alt="" className="mt-5 weather" /></a> 
          <img src={WeatherApp} alt="" className="mt-5" />
        </div>

        <div className="">
         <a href="https://stickynotesapp-react.netlify.app/" target='_blank'> <img src={Sticky} alt="" className="mt-5 mx-3 sticky" /></a>
          <img src={StickyNotes} alt="" className="mt-5" />
        </div>
      </div>

    </div>
  );
}
