import React from "react";
import "../App.css";
import notionImage from "../assets/notion.jpg";

function Hero() {
    return (
        <section
            className="hero"
            style={{
                backgroundImage: `url(${notionImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="hero-content">
                <h1>Joshua Tite</h1>
                <p>Solving your software solutions</p>

            </div>
        </section>
    );
}

export default Hero;
