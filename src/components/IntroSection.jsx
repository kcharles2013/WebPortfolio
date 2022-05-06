import React from "react";
import "./IntroSectionStyles.css";
import {
    IntroContainer,
    IntroWrapper,
    IntroTitleWrapper,
    IntroTitle,
    SubIntroTitle,
    // IntroBtnWrapper,
    // IntroBtn,
    IconsWrapper1,
    IconsWrapper2,
    IconsWrapper3,
    IconsWrapper4,
    IconsWrapper5,
    IconsWrapper6,
    IconsWrapper7,
    IconsWrapper8,
    Icon1,
    Icon2,
    Icon3,
    Icon4,
    Icon5,
    Icon6,
    Icon7,
    Icon8,
    IconsContainer
} from "./IntroSectionElements";
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

function IntroSection() {
    return (
        <IntroContainer id="home">
            <IntroWrapper>
                <IntroTitleWrapper>
                    <IntroTitle>
                        Lee Charles
                    </IntroTitle>
                    <SubIntroTitle>
                        Web Developer
                    </SubIntroTitle>
                    {/*<IntroBtnWrapper>*/}
                    {/*    <IntroBtn>Contact Me</IntroBtn>*/}
                    {/*</IntroBtnWrapper>*/}
                </IntroTitleWrapper>
                <IconsContainer>
                    <IconsWrapper1>
                        <Icon1>
                            <DiReact />
                        </Icon1>
                    </IconsWrapper1>
                    <IconsWrapper2>
                        <Icon2>
                            <FaNodeJs />
                        </Icon2>
                    </IconsWrapper2>
                    <IconsWrapper3>
                        <Icon3>
                            <SiHtml5 />
                        </Icon3>
                    </IconsWrapper3>
                    <IconsWrapper4>
                        <Icon4>
                            <SiJavascript />
                        </Icon4>
                    </IconsWrapper4>
                    <IconsWrapper5>
                        <Icon5>
                            <SiCss3 />
                        </Icon5>
                    </IconsWrapper5>
                    <IconsWrapper6>
                        <Icon6>
                            <DiAtom />
                        </Icon6>
                    </IconsWrapper6>
                    <IconsWrapper7>
                        <Icon7>
                            <SiWebstorm />
                        </Icon7>
                    </IconsWrapper7>
                    <IconsWrapper8>
                        <Icon8>
                            <DiMongodb />
                        </Icon8>
                    </IconsWrapper8>
                </IconsContainer>
            </IntroWrapper>
        </IntroContainer>
    )
}

export default IntroSection;