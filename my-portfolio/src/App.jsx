import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import "./App.css";
import "./components/About.jsx";
import React from "react";
import About from "./components/About.jsx";
import Footer from "./components/footer.jsx";



function App() {
  return (
    <>
      <Navbar />
      <main className="section">
        <h1>new tech stack update</h1>
        <p>Transfroming my digital portfolio</p>
      </main>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Footer />
    </>
  );
}

export default App