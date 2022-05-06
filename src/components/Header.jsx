import React from "react";
import {FaBars} from "react-icons/fa";
import "./HeaderStyles.css";
import { Link as LinkS } from "react-scroll";

function Header({toggle} ) {

    return (
        <nav className="nav" id="nav">
            <div className="navbar-container" id="navbar-container">
                <LinkS
                    className="nav-logo"
                    id="nav-logo"
                    to="home"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                >
                    &lt;LC/&gt;
                </LinkS>
                <div
                    className="dropdown-button"
                    id="dropdown-button"
                    onClick={toggle}
                >
                    <FaBars />
                </div>
                <ul className="nav-menu" id="nav-menu">
                    <li className="nav-item" id="nav-item">
                        <LinkS
                            className="nav-link"
                            id="nav-link"
                            to="about"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}
                        >About</LinkS>
                    </li>
                    <li className="nav-item" id="nav-item">
                        <LinkS
                            className="nav-link"
                            id="nav-link"
                            to="skills"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}
                        >Skills</LinkS>
                    </li>
                    <li className="nav-item" id="nav-item">
                        <LinkS
                            className="nav-link"
                            id="nav-link"
                            to="projects"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}
                        >Projects</LinkS>
                    </li>
                    <li className="nav-item" id="nav-item">
                        <LinkS
                            className="nav-link"
                            id="nav-link"
                            to="contactMe"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}
                        >Contact Me</LinkS>
                    </li>
                </ul>
                <nav className="nav-button" id="nav-button">
                    <a
                        className="nav-button-link"
                        id="nav-button-link"
                        href="https://github.com/kcharles2013"
                        target="_blank"
                    >Github</a>
                </nav>
            </div>
        </nav>
    )
}

export default Header;