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
                        <a href="https://www.linkedin.com/in/joshuatite/">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a href="https://github.com/ZombiesmasherJT" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a
                            href="mailto:joshua.tite@me.com"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon icon={faEnvelope} />
                        </a>
                    </div>
                </div>
            </div>


            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} Joshua Tite. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
