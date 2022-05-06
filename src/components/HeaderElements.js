import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import "./HeaderStyles.css"
import "./fonts.css";
import "./animationTiming.css";


export const Nav = styled.nav`  
  background-color: #000;
  box-shadow: 0 1px 20px 1px #000;
  color: #fff;
  height: 80px;
  top: 0;
  margin-top: -80px;
  margin-left: 0;
  margin-right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  position: sticky;
  z-index: 10;
  transition: 0.8s all ease;
  animation: var(--SlideInTime) ease-out slideInFromTop;

  @media screen and (max-width: 960px) {
    font-size: 18px;
  }
  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
  @media screen and (max-width: 520px) {
    font-size: 13px;
  }
  
  @keyframes slideInFromTop {
    0% {
      transform: translateY(-100%);
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`
// test
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 1.2em;
  max-width: 1550px;
`

export const NavLogo = styled(LinkS)`
  color: var(--SilverText);
  justify-content: flex-start;
  font-family: 'Ubuntu', sans-serif; //CHANGE THIS
  cursor: pointer;
  font-size: 1.5em;
  display: flex;
  align-items: center;
  left: var(--NavLeftRightMargin);
  font-weight: bold;
  text-decoration: none;
`

export const DropdownButton = styled.div`
  display: none;
  color: #fff;
  transition: 0.2s ease-in-out;
  
  &:hover {
    color: var(--ButtonHoverBlue);
    transition: 0.2s ease-in-out;
  }
  
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: var(--SilverText);
  }
`

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-left: -4em;
  //MARGIN-LEFT ALLOWS NAV-TABS TO ALINE WITH THE CONTENT BELOW.
    
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavItem = styled.li`
    height: 80px;
`

export const NavLink = styled(LinkS)`
  color: var(--SilverText);
  display: flex;
  align-items: center;
  font-family: 'Ubuntu', sans-serif;
  font-weight: 500;
  font-size: 0.8em;
  text-decoration: none;
  padding: 0 1rem;
  height: 96%;
  cursor: pointer;
  
  &.active {
    border-bottom: 0.2em solid var(--ButtonHoverBlue);
    color: var(--ButtonHoverBlue);
  }
`

export const NavBtn = styled.nav`
  position: relative;
  display: flex;
  align-items: center;
  place-items: center;

  //TO MATCH THE MARGIN-LEFT ON THE NAVLOGO
  right: var(--NavLeftRightMargin);
  
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavBtnLink = styled.a`
  position: absolute;
  border-radius: 20px;
  background: lightgrey;
  white-space: nowrap;
  padding: 0.5em 1em;
  color: #000;
  font-size: 0.8em;
  font-family: 'Ubuntu', sans-serif;
  font-weight: 500;
  outline: none;
  border: none;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  
  &:hover {
    transition: all 0.2s ease-in-out;
    background: var(--ButtonHoverBlue);
    font-size: 0.9em;
  }
`