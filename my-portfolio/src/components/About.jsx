import React from 'react';
import '../About.css';
import notionImg from '../assets/notion.jpg';



function About() {
    return (
        <section className="about section" id="about">
            <div className="about-container">
                <img src={notionImg}
                    alt="Joshua Tite"
                    className="about-img"
                />
                <div className='about-text'>
                    <h2 className='about-title'>Hi, im Josh</h2>

                    <p className='about-description'>

                        I am a software engineer with a passion for building web applications and learning new technologies. I have experience in full-stack development, including front-end frameworks like React and back-end technologies like Node.js. I love solving problems and creating efficient, user-friendly solutions.
                    </p>

                    <p className='about-description'>
                        In my free time, I enjoy exploring new programming languages, contributing to open-source projects,
                        and staying up-to-date with the latest trends in web development. I believe in continuous learning and strive to improve my skills every day.
                    </p>
                </div>

            </div>

        </section>

    );
}

export default About;






