import React from "react";
import "../App.css"; // keep this if your styles are here
import notionImage from "../assets/notion.jpg"; // 👈 import the image

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
                {/* Badge or status can go here later */}
            </div>
        </section>
    );
}

export default Hero;
