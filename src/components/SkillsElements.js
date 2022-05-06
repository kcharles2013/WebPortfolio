import styled from "styled-components";
import "./fonts.css";
import "./color-scheme.css";

export const SkillsContainer = styled.div`
  background-color: #000;
  font-size: 15px;

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

export const SkillsWrapper = styled.div`
  height: 860px;
  width: auto;
  display: grid;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    margin-top: -25vh;
  }
  @media screen and (max-width: 520px) {
    margin-top: -17vh;
  }

`

export const SkillsTitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 6.5em;
  //text-align: center;

  @media screen and (max-width: 768px) {
    margin-top: 10em;
    margin-bottom: 5em;
  }
  @media screen and (max-width: 520px) {
    margin-bottom: -15em;
  }

`

export const SkillsTitle = styled.h1`
  text-align: center;
  font-size: 4em;
  font-family: 'Roboto', sans-serif;
  font-weight: 900;
  color: lightgrey;
  //margin-bottom: -4em;
`

export const SkillsContentContainer = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10em;
  //max-width: 80%;
  padding-bottom: 6.5em;
  text-align: center;
  margin-right: 2em;
  margin-left: 2em;

  @media screen and (max-width: 960px) {
    
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 2.5em;
  }
  @media screen and (max-width: 520px) {
    grid-template-columns: 1fr;
    grid-gap: 0;
  }
`

export const ColumnWrapper1 = styled.div`
  position: relative;
  //transform: translateX(-10em);
  
  @media screen and (max-width: 768px) {
    //transform: translateX(0);
  }
  @media screen and (max-width: 520px) {
    //transform: translateX(0);
  }
`

export const ColumnWrapper2 = styled.div`
  position: relative;

`

export const ColumnWrapper3 = styled.div`
  //transform: translateX(10em);

  @media screen and (max-width: 768px) {
    //transform: translateX(0);
    //width: 100vh;
  }
  @media screen and (max-width: 520px) {
    //transform: translateX(0);
  }
`

export const SkillContentWrapper = styled.div`
  display: flex;
  align-items: center;
  //justify-content: center;
  padding-bottom: 2em;

  @media screen and (max-width: 520px) {
    margin-left: 3.5em;
  }
  
`

export const SkillIcon = styled.div`
  color: var(--SilverText);
  font-size: 3.5em;
  margin-right: 0.5em;
  
  transform: translateY(0.1em);

  @media screen and (max-width: 960px) {
    
  }
  @media screen and (max-width: 768px) {
    font-size: 3.75em;
  }
  @media screen and (max-width: 520px) {
    font-size: 4em;
  }
`

export const SkillDescription = styled.p`
  color: #fff;
  font-size: 1.75em;
  //text-align: center;
  font-family: 'Oxygen', sans-serif;
  font-weight: 700;

  @media screen and (max-width: 960px) {

  }
  @media screen and (max-width: 768px) {
    font-size: 2em;
  }
  @media screen and (max-width: 520px) {
    font-size: 2.25em;
  }
`