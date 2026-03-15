import React from "react";
import "../Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
{ /* Footer component for the portfolio website     NEEDS FINISHING */ }
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">

                <div className="footer-left">
                    <h3>Joshua Tite</h3>
                    <p>
                        A frontend-focused web developer building responsive websites and applications that deliver real value
                    </p>
                </div>


                <div className="footer-right">
                    <h3>Connect with me</h3>
                    <div className="footer-socials">
                        <a href="https://www.linkedin.com/in/joshuatite/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a href="https://github.com/ZombiesmasherJT" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a href="mailto:joshua.tite@me.com" rel="noopener noreferrer" aria-label="Email">
                            <FontAwesomeIcon icon={faEnvelope} />
                        </a>
                    </div>
                    <a
                        href="https://www.buymeacoffee.com/joshuatite"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-coffee"
                    >
                        Buy me a coffee
                    </a>
                </div>
            </div>


            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} Joshua Tite. All rights reserved.</p>
                <p className="footer-a11y">Built with accessibility in mind — skip link, focus states, semantic HTML.</p>
            </div>
        </footer>
    );
};

export default Footer;
