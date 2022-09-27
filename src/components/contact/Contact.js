import React from "react";
import "./Contact.css";
import Component5 from "../../images/Component 5.png";
import Component7 from "../../images/Component 7.png";

import Github from "../../images/fa-brands_github.png";
import Linkedin from "../../images/openmoji_linkedin.png";
import Codepen from "../../images/jam_codepen-circle.png";


export default function Contact() {
  return (
    <div className="wrapper">
      <img className="btn-1 mb-5 mt-5" src={Component5} alt="btn" />
   
   
     <a href="http://github.com/cockatiella" target='_blank'> <img className="pic-icon1" src={Github} alt="github" /></a>
     <a href="https://www.linkedin.com/in/sofia-dinatolo-3a17b4217/" target='_blank'>    <img className="pic-icon2" src={Linkedin} alt="linkedin" /> </a>
      <a href="https://codepen.io/sofiachan" target='_blank'><img className="pic-icon3" src={Codepen} alt="codepen" /></a>
    
    <a href="https://www.canva.com/design/DAFMG5sd-nE/gFLhCZasz8Ms5szqvbCMow/view?utm_content=DAFMG5sd-nE&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" target='_blank'> <img className="btn-3 " src={Component7} alt="btn3" /></a> 
    </div>
  );
}

