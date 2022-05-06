import React from "react";
import {
    ContactMeContainer,
    ContactMeWrapper,
    CMTitleWrapper,
    CMTitle,
    CMContentWrapper,
    CMContent,
    CMTitleName,
    CMDescription
} from "./ContactMeElements";

function ContactMe() {
    return (
        <ContactMeContainer>
            <ContactMeWrapper id="contactMe" className=".onScrollAnim">
                <CMTitleWrapper>
                    <CMTitle>
                        Contact Me
                    </CMTitle>
                </CMTitleWrapper>
                <CMContentWrapper>
                    <CMContent>
                        <CMTitleName>Cell: </CMTitleName>
                        <CMDescription>(501)813-5818</CMDescription>
                    </CMContent>
                    <CMContent>
                        <CMTitleName>Email: </CMTitleName>
                        <CMDescription>LeeDev@gmail.com</CMDescription>
                    </CMContent>
                </CMContentWrapper>
            </ContactMeWrapper>
        </ContactMeContainer>
    )
}

export default ContactMe;