import React from "react";
import Navbar from "./components/navbar/Navbar";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";


function App() {
  return (
    <div className="App">
      <Navbar />
       {/* <Contact />  */}
       {/* <Home />  */}
      {/* <Skills />  */}
       <Projects /> 
     
    </div>
  );
}

export default App;
