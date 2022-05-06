import React from "react";
import {
    SidebarContainer,
    Icon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SidebarRoute,
    SidebarBtnWrap,
    CloseIcon
} from "./SidebarElements";

function Sidebar({ isOpen, toggle }) {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink
                        to="about"
                        onClick={toggle}
                    >About</SidebarLink>
                    <SidebarLink
                        to="skills"
                        onClick={toggle}
                    >Skills</SidebarLink>
                    <SidebarLink
                        to="projects"
                        onClick={toggle}
                    >Projects</SidebarLink>
                    <SidebarLink
                        to="contactMe"
                        onClick={toggle}
                    >Contact Me</SidebarLink>
                </SidebarMenu>
                <SidebarBtnWrap>
                    <SidebarRoute href="https://github.com/kcharles2013" target="_blank">Github</SidebarRoute>
                </SidebarBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;