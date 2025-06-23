import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import "./App.css";
import React from "react";



function App() {
  return (
    <>
      <Navbar />
      <main className="section">
        <h1>new tech stack update</h1>
        <p>Transfroming my digital portfolio</p>
      </main>
      <Hero />
      <Projects />
      <Skills />
    </>
  );
}

export default App