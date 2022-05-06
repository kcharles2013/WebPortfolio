import styled from "styled-components";
import './fonts.css';
import './IntroSectionStyles.css';
import './animationTiming.css';
import "./IntroSectionStyles.css";


export const IntroContainer = styled.div`
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

  //@keyframes slideInFromBottom {
  //  0% {
  //    transform: translateY(100%);
  //    opacity: 0;
  //  }
  //  100% {
  //    transform: translateY(0);
  //    opacity: 1;
  //  }
  //}
`

export const IntroWrapper = styled.div`
  //background-color: #fff;
  display: grid;
  justify-content: center;
  width: auto;
  //height: 860px;
  height: 100vh;
  align-items: center;
  margin-right: auto;
  margin-left: auto;
`

export const IntroTitleWrapper = styled.div`
  //background-color: #fff;
  display: grid;
  justify-content: center;
  text-align: center;
  padding-top: var(--IntroPaddingTopBottom);
  
  @media screen and (max-width: 768px) {
    padding-top: var(--IntroPaddingTopBottom768);
  }
  @media screen and (max-width: 520px) {
    padding-top: var(--IntroPaddingTopBottom520);
  }
  
  animation: var(--SlideInTime) ease-out slideInFromLeftIntro;

  @keyframes slideInFromLeftIntro {
    0% {
      transform: translateX(-100%);
      opacity: 0;
    }
    50%{
      opacity: 0.5;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
`

export const IntroTitle = styled.h1`
  //padding-top: 100px;
  font-size: 4em;
  font-family: 'Roboto', sans-serif;
  font-weight: 900;
  color: lightgrey;
  margin-bottom: var(--TitleMargin);
`

export const SubIntroTitle = styled.h2`
  font-size: 2.25em;
  font-family: 'Oxygen', sans-serif;
  font-weight: 700;
  //margin-bottom: var(--TitleMargin);
  color: var(--SilverText);
`

export const IntroBtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: var(--ButtonMargin);
`

export const IntroBtn = styled.a`
  position: absolute;
  border-radius: 50px;
  background: lightgrey;
  white-space: nowrap;
  padding: 0.6em 1.2em;
  color: #000;
  font-size: 1.05em;
  font-family: 'Ubuntu', sans-serif;
  font-weight: 500;
  outline: none;
  border: none;
  text-decoration: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  
  &:hover {
    transition: all 0.2s ease-in-out;
    background: var(--ButtonHoverBlue);
    font-size: 1.15em;
  }
  
  //@media screen and (max-width: 960px) {
  //  padding: 0.5em 1.1em;
  //}
  @media screen and (max-width: 768px) {
    padding: 0.4em 1em;
    //font-size: 1.4em;
    font-weight: 400;
  }
  @media screen and (max-width: 520px) {
    padding: 0.3em 0.8em;
    font-size: 1.25em;
    //font-weight: 300;
    &:hover {
      transition: all 0.2s ease-in-out;
      background: var(--ButtonHoverBlue);
      font-size: 1.35em;
    }
  }
`
export const IconsContainer = styled.section`
  //background-color: #fff;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  padding-bottom: var(--IntroPaddingTopBottom);
  animation: var(--SlideInTime) ease-out slideInFromRightIntro;

  @media screen and (max-width: 768px) {
    padding-bottom: var(--IntroPaddingTopBottom768);
  }
  @media screen and (max-width: 520px) {
    padding-bottom: var(--IntroPaddingTopBottom520);
  }

  @keyframes slideInFromRightIntro {
    0% {
      transform: translateX(100%);
      opacity: 0;
    }
    50%{
      opacity: 0.5;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
`

export const IconsWrapper1 = styled.section`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  transform: translateX(-21em);

  //animation: var(--IntroTiming) ease-in spreadOut;
  //
  //@keyframes spreadOut {
  //  0% {
  //    transform: translateX(0);
  //  }
  //  100% {
  //    transform: translateX(-21em);
  //  }
  //}
`

export const IconsWrapper2 = styled.section`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  transform: translateX(-15em);

  //animation: var(--IntroTiming) ease-in spreadOut;
  //
  //@keyframes spreadOut {
  //  0% {
  //    transform: translateX(0);
  //  }
  //  100% {
  //    transform: translateX(100%);
  //  }
  //}
`

export const IconsWrapper3 = styled.section`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  transform: translateX(-9em);

  //animation: var(--IntroTiming) ease-in spreadOut;
  //
  //@keyframes spreadOut {
  //  0% {
  //    transform: translateX(0);
  //  }
  //  100% {
  //    transform: translateX(100%);
  //  }
  //}
`

export const IconsWrapper4 = styled.section`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  transform: translateX(-3em);

  //animation: var(--IntroTiming) ease-in spreadOut;
  //
  //@keyframes spreadOut {
  //  0% {
  //    transform: translateX(0);
  //  }
  //  100% {
  //    transform: translateX(100%);
  //  }
  //}
`

export const IconsWrapper5 = styled.section`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  transform: translateX(3em);

  //animation: var(--IntroTiming) ease-in spreadOut;
  //
  //@keyframes spreadOut {
  //  0% {
  //    transform: translateX(0);
  //  }
  //  100% {
  //    transform: translateX(100%);
  //  }
  //}
`

export const IconsWrapper6 = styled.section`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  transform: translateX(9em);

  //animation: var(--IntroTiming) ease-in spreadOut;
  //
  //@keyframes spreadOut {
  //  0% {
  //    transform: translateX(0);
  //  }
  //  100% {
  //    transform: translateX(100%);
  //  }
  //}
`

export const IconsWrapper7 = styled.section`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  transform: translateX(15em);
  
  animation: var(--IntroTiming) ease-in spreadOut;

  //@keyframes spreadOut {
  //  0% {
  //    transform: translateX(0);
  //  }
  //  100% {
  //    transform: translateX(100%);
  //  }
  //}
`

export const IconsWrapper8 = styled.section`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  transform: translateX(21em);

  //animation: var(--IntroTiming) ease-in spreadOut;
  //
  //@keyframes spreadOut {
  //  0% {
  //    transform: translateX(0);
  //  }
  //  100% {
  //    transform: translateX(100%);
  //  }
  //}
`

export const Icon1 = styled.div`
  position: relative;
  //height: 50px;
  //width: 50px;
  font-size: var(--IconFontSize);
  display: block;
  //position: absolute;
  margin-right: var(--IconMargins);
  margin-left: var(--IconMargins);
  color: var(--SilverText);
  text-align: center;
  justify-content: center;
  //background-color: green;
  //border: none;
  //outline: none;
  transition: all 0.1s ease-in;
  
  &:hover {
    font-size: var(--IconFontSizeHover);
    color: #61DBFB;
  }
  
`

export const Icon2 = styled.div`
  position: relative;
  //height: 50px;
  //width: 50px;
  font-size: var(--IconFontSize);
  display: block;
  //position: absolute;
  margin-right: var(--IconMargins);
  margin-left: var(--IconMargins);
  color: var(--SilverText);
  text-align: center;
  justify-content: center;
  //background-color: green;
  //border: none;
  //outline: none;
  transition: all 0.1s ease-in;
  
  &:hover {
    font-size: var(--IconFontSizeHover);
    color: #3c873a;
  }
  
`

export const Icon3 = styled.div`
  position: relative;
  //height: 50px;
  //width: 50px;
  font-size: var(--IconFontSize);
  display: block;
  //position: absolute;
  margin-right: var(--IconMargins);
  margin-left: var(--IconMargins);
  color: var(--SilverText);
  text-align: center;
  justify-content: center;
  //background-color: green;
  //border: none;
  //outline: none;
  transition: all 0.1s ease-in;
  
  &:hover {
    font-size: var(--IconFontSizeHover);
    color: #e34c26;
  }
  
`

export const Icon4 = styled.div`
  position: relative;
  //height: 50px;
  //width: 50px;
  font-size: var(--IconFontSize);
  display: block;
  //position: absolute;
  margin-right: var(--IconMargins);
  margin-left: var(--IconMargins);
  color: var(--SilverText);
  text-align: center;
  justify-content: center;
  //background-color: green;
  //border: none;
  //outline: none;
  transition: all 0.1s ease-in;
  
  &:hover {
    font-size: var(--IconFontSizeHover);
    color: #f0db4f;
  }
`

export const Icon5 = styled.div`
  position: relative;
  //height: 50px;
  //width: 50px;
  font-size: var(--IconFontSize);
  display: block;
  //position: absolute;
  margin-right: var(--IconMargins);
  margin-left: var(--IconMargins);
  color: var(--SilverText);
  text-align: center;
  justify-content: center;
  //background-color: green;
  //border: none;
  //outline: none;
  transition: all 0.1s ease-in;
  
  &:hover {
    font-size: var(--IconFontSizeHover);
    color: #264de4;
  }
  
`

export const Icon6 = styled.div`
  position: relative;
  //height: 50px;
  //width: 50px;
  font-size: var(--IconFontSize);
  display: block;
  //position: absolute;
  margin-right: var(--IconMargins);
  margin-left: var(--IconMargins);
  color: var(--SilverText);
  text-align: center;
  justify-content: center;
  //background-color: green;
  //border: none;
  //outline: none;
  transition: all 0.1s ease-in;
  
  &:hover {
    font-size: var(--IconFontSizeHover);
    color: #90b061;
  }
  
`

export const Icon7 = styled.div`
  position: relative;
  //height: 50px;
  //width: 50px;
  font-size: var(--IconFontSize);
  display: block;
  //position: absolute;
  margin-right: var(--IconMargins);
  margin-left: var(--IconMargins);
  color: var(--SilverText);
  text-align: center;
  justify-content: center;
  //background-color: green;
  //border: none;
  //outline: none;
  transition: all 0.1s ease-in;
  
  &:hover {
    font-size: var(--IconFontSizeHover);
    color: #05c1fd;
  }
  
    //@media screen and (max-width: 768px) {
    //margin-right: var(--IconMargins768);
    //margin-left: var(--IconMargins768);

`

export const Icon8 = styled.div`
  position: relative;
  //height: 50px;
  //width: 50px;
  font-size: var(--IconFontSize);
  display: block;
  //position: absolute;
  margin-right: var(--IconMargins);
  margin-left: var(--IconMargins);
  color: var(--SilverText);
  text-align: center;
  justify-content: center;
  //background-color: green;
  //border: none;
  //outline: none;
  transition: all 0.1s ease-in;
  
  &:hover {
    font-size: var(--IconFontSizeHover);
    color: #4DB33D;
  }
  
    //@media screen and (max-width: 768px) {
    //margin-right: var(--IconMargins768);
    //margin-left: var(--IconMargins768);

`
