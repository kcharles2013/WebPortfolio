import styled from "styled-components";
import "./fonts.css";
import "./color-scheme.css";

export const ProjectsContainer = styled.div`
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

export const ProjectsWrapper = styled.div`
  //height: 860px;
  height: 100vh;
  width: auto;
  display: grid;
  justify-content: center;
  align-content: center;
  @media screen and (max-width: 768px) {
    padding-bottom: 10vh;
    margin-top: -20vh;
  }
`

export const ProjectsTitleWrapper = styled.div`
  display: grid;
  justify-content: center;
  margin-bottom: 7em;
  margin-top: 1em;

  @media screen and (max-width: 960px) {
  }
  @media screen and (max-width: 768px) {
    margin-top: 40em;
    
  }
  @media screen and (max-width: 520px) {
  }
`

export const ProjectsMainTitle = styled.h1`
  text-align: center;
  font-size: 4em;
  font-family: 'Roboto', sans-serif;
  font-weight: 900;
  color: lightgrey;
  margin-bottom: 1em;
`

export const ProjectsDeckWrapper = styled.div`
`

export const ProjectsDeck = styled.div`
    display: grid;
    position: relative;
    grid-template-columns: 1fr 1fr;
    grid-gap: 4em;
    //padding-bottom: 10em;
    margin-bottom: 10em;
  
    //background-color: red;
    //justify-content: center;
    //align-items: center;

  @media screen and (max-width: 960px) {
  }
  @media screen and (max-width: 768px) {
    margin-top: 4em;
    grid-gap: 12em;
    grid-template-columns: 1fr;
    
  }
  @media screen and (max-width: 520px) {
    grid-gap: 15em;
    
  }
`

export const ProjectsCardWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  place-items: center;
  justify-content: center;
  height: 20em;
  width: 15em;

  @media screen and (max-width: 768px) {
    //margin-bottom: 12em;
  }
`

export const ProjectsCard = styled.div`
  position: absolute;
  //background-color: var(--SilverText);
  background-color: transparent;
  border-radius: 10px/7px;
  //box-shadow: 0 0 1px 2px var(--SilverText);
  display: grid;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 23em;
  width: 16em;
  transition: 0.2s ease-in-out;
  //background-color: #90b061;


  &:hover {
    font-size: 110%;
  }

  @media screen and (max-width: 768px) {
    height: 26em;
    width: 19em;
  }
  @media screen and (max-width: 520px) {
    height: 29em;
    width: 22em;
  }
  
`

export const ProjectImg = styled.img`
  height: 16em;
  width: 16em;
  border-radius: 10px/7px;
  margin-top: -0.5em;
  margin-bottom: 0.5em;

  @media screen and (max-width: 768px) {
    height: 19em;
    width: 19em;
  }
  @media screen and (max-width: 520px) {
    height: 22em;
    width: 22em;
  }
`

export const ProjectTitle = styled.h2`
  font-size: 1.5em;
  font-family: 'Roboto', sans-serif;
  font-weight: 900;
  color: lightgrey;
  padding: 0.5em;
  margin-top: 1.5em;
`

export const ProjectDescription = styled.p`
  //max-width: 35em;
  color: lightgrey;
  font-size: 1em;
  font-family: 'Oxygen', sans-serif;
  font-weight: 700;
  //padding: 0.5em;
`

export const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  //margin-top: 1em;
  //margin-bottom: 1em;
`

export const IconWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  //margin: 1em;
`

export const Icon1 = styled.a`
  position: absolute;
  color: lightgrey;
  font-size: 1.5em;
  transform: translateX(-1em) translateY(1em);
  
  &:hover {
    //font-size: 1.7em;
    color: #4078c0;
    cursor: pointer;
  }

`

export const Icon2 = styled.a`
  position: absolute;
  color: lightgrey;
  font-size: 1.5em;
  transform: translateX(1em) translateY(1em);

  &:hover {
    //font-size: 1.7em;
    color: var(--ButtonHoverBlue);
    cursor: pointer;
  }
`