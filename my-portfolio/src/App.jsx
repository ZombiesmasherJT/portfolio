import Navbar from "./components/Navbar.jsx";
import "./App.css";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import React from "react";



function App() {
  return (
    <>
      <Navbar />
      <main className="section">
        <h1>new tech stack update</h1>
        <p>Transfroming my digital portfolio</p>
      </main>
      <Projects />
      <Skills />
    </>
  );
}

export default App