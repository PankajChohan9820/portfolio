import React, { useRef, useEffect } from 'react';
import './Home.css';
import Profilegif from '../assets/portfolioVideo.gif'
function Home({isDarkTheme}) {
    const headingRef = useRef(null);
    useEffect(() => {
        headingRef.current.style.opacity = 1;
    }, []);
    return (
        <section id="about" className="about">
            <div className="about-left">
                <img src={Profilegif} alt="Profile" className="about-profile-pic" />
            </div>
            <div className="about-right">
                <h2 ref={headingRef} className="about-heading">Hi, I'm Pankaj and I'm a Software Developer</h2>
                <p className="about-description">I am a software developer with 2 years of experience and highly skilled in developing web applications using React and Node.js. I am passionate about creating innovative solutions that meet the needs of clients and users.</p>
            </div>
        </section>
    );
}
export default Home;