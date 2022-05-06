import React from "react";
import {
    AboutContainer,
    AboutWrapper,
    AboutTitleContentWrapper,
    AboutTitle,
    AboutContent
} from "./AboutElements";
import "./AboutStyles.css";

function About() {
    return (
        <AboutContainer id="about">
            <AboutWrapper id="about-wrapper">
                <AboutTitleContentWrapper id="about-title-content-wrapper">
                    <AboutTitle className="about-section" id="about-title">
                        Hello There
                    </AboutTitle>
                    <AboutContent className="about-section" id="about-content">
                        My name is Lee, I am a Web Developer. My primary focus has been on front end development. I do
                        have some experience with backend using node.js and mongoDB. I am willing to learn new technologies
                        and to explore different stacks as well. Due to being self taught, I am confident in my
                        ability to efficiently learn a new skill and apply it in the workplace.
                    </AboutContent>
                </AboutTitleContentWrapper>
            </AboutWrapper>
        </AboutContainer>
    )
}

export default About;