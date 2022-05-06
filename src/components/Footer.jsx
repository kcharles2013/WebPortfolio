import React from "react";
import {
    FooterContainer,
    FooterWrapper,
    ContentWrapper,
    CopyrightWrapper,
    CopyrightText
} from "./FooterElements";
import {BiCopyright} from "react-icons/bi";


function Footer() {
    const year = new Date().getFullYear();

    return (
        <FooterContainer>
            <FooterWrapper>
                <ContentWrapper>
                    <CopyrightWrapper>
                        <CopyrightText>
                            Copyright <BiCopyright /> {year} Lee Charles. All rights reserved.
                        </CopyrightText>
                    </CopyrightWrapper>
                </ContentWrapper>
            </FooterWrapper>
        </FooterContainer>
    )
}

export default Footer;