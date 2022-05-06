import styled from "styled-components";
import './fonts.css';
import "./animationTiming.css";
import "./AboutStyles.css";

export const AboutContainer = styled.div`
  background-color: #000;
  font-size: 15px;
  //animation: 0.7s ease-out slideInFromBottom;

  @media screen and (max-width: 960px) {
    font-size: 13px;
  }
  @media screen and (max-width: 768px) {
    font-size: 10px;
  }
  @media screen and (max-width: 520px) {
    font-size: 8px;
  }
`

export const AboutWrapper = styled.div`
  display: grid;
  justify-content: center;
  width: auto;
  //height: 860px;
  height: 100vh;
  align-items: center;
  margin-right: auto;
  margin-left: auto;

  @media screen and (max-width: 768px) {
    margin-top: -15vh;
  }
  @media screen and (max-width: 520px) {
    margin-top: -17vh;
  }
`

export const AboutTitleContentWrapper = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  animation: var(--SlideInTime) ease-out slideUpAbout;
  margin-bottom: 7em;

  @keyframes slideUpAbout {
    0% {
      transform: translateY(100%);
      opacity: 0;
    }
    50%{
      opacity: 0.5;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

`

export const AboutTitle = styled.h1`
  text-align: center;
  font-size: 4em;
  font-family: 'Roboto', sans-serif;
  font-weight: 900;
  color: lightgrey;
  margin-bottom: 1.5em;

  @media screen and (max-width: 960px) {
    
  }
  @media screen and (max-width: 768px) {
    
  }
  @media screen and (max-width: 520px) {
    margin-bottom: 3em;
  }
`

export const AboutContent = styled.p`
  text-align: center;
  max-width: 35em;
  margin: 2em;
  font-size: 2.25em;
  font-family: 'Oxygen', sans-serif;
  font-weight: 700;
  color: var(--SilverText);

  @media screen and (max-width: 960px) {
    margin: 0 3em;
  }
  @media screen and (max-width: 768px) {
    margin: 0 3.5em;
  }
  @media screen and (max-width: 520px) {
    margin: 0 3em;
    font-size: 2.5em;
  }

`