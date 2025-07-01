import React from 'react';
import '../navbar.css'; // Ensure this path is correct based on your project structure

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <a href="/" className="navbar-logo">JGT</a>
                <ul className="navbar-menu">
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}


/*function Navbar() {
   return (
       <nav className="navbar">
           <div className="logo">JGT</div>
           <ul className="nav-links">
               <li><a href="#about">About</a></li>
               <li><a href="#projects">Projects</a></li>
               <li><a href="#contact">Contact</a></li>
           </ul>
       </nav>
   );
}
   */
