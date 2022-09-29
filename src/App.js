import React from "react";
import Navbar from "./components/navbar/Navbar";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
   
   <Navbar />
      <Routes>
     
        <Route path="/" element={<Home />} />
        <Route path="skills" element={<Skills />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
  
    </div>
  );
}

export default App;
