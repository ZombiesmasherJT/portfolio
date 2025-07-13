import React from 'react';
import '../navbar.css';

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
// this comment is a test for git push