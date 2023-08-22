import React from "react";

const pages = ["About", "Portfolio", "Contact", "Resume"];

export default function Navigation() {
    return (
        <nav>
            <ul>
                <li><a href="#about-me">About</a></li>
                <li><a href="#works">Work</a></li>
                <li><a href="#contact-info">Contact</a></li>
                <li><a href="./assets/imgs/travis_hoffman_resume.pdf"  target="_blank">Resume</a></li>
            </ul>
        </nav>
    )
}