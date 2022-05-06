import styled from "styled-components";
import "./fonts.css";
import "./color-scheme.css";

export const FooterContainer = styled.footer`
  background-color: #000;
  font-size: 15px;

  @media screen and (max-width: 960px) {
    font-size: 13px;
  }
  @media screen and (max-width: 768px) {
    font-size: 10px;
  }
  @media screen and (max-width: 520px) {
    //font-size: 8px;
  }
`

export const FooterWrapper = styled.div`
  height: 20vh;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -15vh;
  //margin-bottom: -10vh;
`

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const CopyrightWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`

export const CopyrightText = styled.p`
  font-family: 'Ubuntu', sans-serif;
  font-weight: 500;
  color: var(--SilverText);
`