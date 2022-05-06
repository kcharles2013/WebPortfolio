import React from "react";
import {FaBars} from "react-icons/fa";
import {
    Nav,
    NavbarContainer,
    NavLogo,
    DropdownButton,
    NavMenu,
    NavItem,
    NavLink,
    NavBtn,
    NavBtnLink
} from "./HeaderElements";

function Header({toggle} ) {

    return (
        <Nav>
            <NavbarContainer>
                <NavLogo
                    to="home"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                >
                    &lt;LC/&gt;
                </NavLogo>
                <DropdownButton onClick={toggle}>
                    <FaBars />
                </DropdownButton>
                <NavMenu>
                    <NavItem>
                        <NavLink
                            to="about"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}
                        >About</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            to="skills"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}
                        >Skills</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            to="projects"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}
                        >Projects</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            to="contactMe"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}
                        >Contact Me</NavLink>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink href="https://github.com/kcharles2013" target="_blank">Github</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
    )
}

export default Header;