import React from "react";
import "./ProjectsStyles.css";
import {
    ProjectsContainer,
    ProjectsWrapper,
    ProjectsTitleWrapper,
    ProjectsMainTitle,
    ProjectsDeck,
    ProjectsCardWrapper,
    ProjectsCard,
    ProjectImg,
    ProjectTitle,
    ProjectDescription,
    IconsContainer,
    IconWrapper,
    Icon1,
    Icon2
} from "./ProjectsElements";
import RealtorPage from "./images/TaylorsWebpage_squarePreview.png";
import {SiGithub} from "react-icons/si";
import {CgWebsite} from "react-icons/cg";

function Projects() {
    return (
        <ProjectsContainer id="projects">
            <ProjectsWrapper className=".onScrollAnim">
                <ProjectsTitleWrapper>
                    <ProjectsMainTitle>
                        Projects
                    </ProjectsMainTitle>
                </ProjectsTitleWrapper>
                {/*<ProjectsDeckWrapper>*/}
                    <ProjectsDeck className="deck">
                        <ProjectsCardWrapper className="card">
                            <ProjectsCard>
                                <ProjectImg src={RealtorPage} />
                                <IconsContainer>
                                    <IconWrapper>
                                        <Icon1
                                            href="https://github.com/kcharles2013/Pathfinder"
                                            target="_blank"
                                        ><SiGithub /></Icon1>
                                    </IconWrapper>
                                    <IconWrapper>
                                        <Icon2
                                            href="https://kcharles2013.github.io/Pathfinder/"
                                            target="_blank"
                                        ><CgWebsite /></Icon2>
                                    </IconWrapper>
                                </IconsContainer>
                                <ProjectTitle>
                                    Pathfinder Web Application
                                </ProjectTitle>
                                <ProjectDescription>
                                    A small web application that visualizes the A-Star algorithm in either a maze or
                                    a user made route.
                                </ProjectDescription>
                            </ProjectsCard>
                        </ProjectsCardWrapper>
                        <ProjectsCardWrapper className="card">
                            <ProjectsCard>
                                <ProjectImg src={RealtorPage} />
                                <IconsContainer>
                                    <IconWrapper>
                                        <Icon1
                                            href="https://www.github.com/kcharles2013"
                                            target="_blank"
                                        ><SiGithub /></Icon1>
                                    </IconWrapper>
                                    <IconWrapper>
                                        <Icon2
                                            href="https://www.google.com"
                                            target="_blank"
                                        ><CgWebsite /></Icon2>
                                    </IconWrapper>
                                </IconsContainer>
                                <ProjectTitle>
                                    Realtor Page
                                </ProjectTitle>
                                <ProjectDescription>
                                    A realtor page that is currently being built for a freelance client.
                                </ProjectDescription>
                            </ProjectsCard>
                        </ProjectsCardWrapper>
                </ProjectsDeck>
            </ProjectsWrapper>
        </ProjectsContainer>
    )
}

export default Projects;