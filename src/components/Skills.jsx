import React from "react";
import {
    SkillsContainer,
    SkillContentWrapper,
    SkillsWrapper,
    SkillsTitleWrapper,
    SkillsTitle,
    SkillsContentContainer,
    SkillIcon,
    SkillDescription,
    ColumnWrapper1,
    ColumnWrapper2,
    ColumnWrapper3
} from "./SkillsElements";
import {
    SiJavascript,
    SiHtml5,
    SiCss3,
    SiWebstorm
} from "react-icons/si";
import {
    DiReact,
    DiAtom,
    DiMongodb
} from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import "./SkillsStyles.css";

function Skills() {
    return(
        <SkillsContainer id="skills">
            <SkillsWrapper className=".onScrollAnim">
                <SkillsTitleWrapper>
                    <SkillsTitle>
                        My Skills
                    </SkillsTitle>
                </SkillsTitleWrapper>
                <SkillsContentContainer>
                    <ColumnWrapper1>
                        <SkillContentWrapper className="html-container">
                            <SkillIcon>
                                <SiHtml5 />
                            </SkillIcon>
                            <SkillDescription>
                                HTML
                            </SkillDescription>
                        </SkillContentWrapper>
                        <SkillContentWrapper className="css-container">
                            <SkillIcon>
                                <SiCss3 />
                            </SkillIcon>
                            <SkillDescription>
                                CSS
                            </SkillDescription>
                        </SkillContentWrapper>
                        <SkillContentWrapper className="js-container">
                            <SkillIcon>
                                <SiJavascript />
                            </SkillIcon>
                            <SkillDescription>
                                Javascript
                            </SkillDescription>
                        </SkillContentWrapper>
                    </ColumnWrapper1>
                    <ColumnWrapper2>
                        <SkillContentWrapper className="react-container">
                            <SkillIcon>
                                <DiReact />
                            </SkillIcon>
                            <SkillDescription>
                                React.js
                            </SkillDescription>
                        </SkillContentWrapper>
                        <SkillContentWrapper className="node-container">
                            <SkillIcon>
                                <FaNodeJs />
                            </SkillIcon>
                            <SkillDescription>
                                Node.js
                            </SkillDescription>
                        </SkillContentWrapper>
                        <SkillContentWrapper className="atom-container">
                            <SkillIcon>
                                <DiAtom />
                            </SkillIcon>
                            <SkillDescription>
                                Atom
                            </SkillDescription>
                        </SkillContentWrapper>
                    </ColumnWrapper2>
                    <ColumnWrapper3>
                        <SkillContentWrapper className="webstorm-container">
                            <SkillIcon>
                                <SiWebstorm />
                            </SkillIcon>
                            <SkillDescription>
                                Webstorm
                            </SkillDescription>
                        </SkillContentWrapper>
                        <SkillContentWrapper className="mongo-container">
                            <SkillIcon>
                                <DiMongodb />
                            </SkillIcon>
                            <SkillDescription>
                                MongoDB
                            </SkillDescription>
                        </SkillContentWrapper>
                    </ColumnWrapper3>
                </SkillsContentContainer>
            </SkillsWrapper>
        </SkillsContainer>
    )
}

export default Skills;