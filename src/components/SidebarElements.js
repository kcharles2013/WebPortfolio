import styled from "styled-components";
// import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import { FaTimes } from "react-icons/fa";
import "./fonts.css";
import "./SidebarStyles.css";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #000;
  display: grid;
  align-items: center;
  left: 0;
  transition: 0.4s all ease-in;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0%")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`

export const CloseIcon = styled(FaTimes)`
  color: #fff;
  transition: 0.2s ease-in-out;
  
  &:hover {
    color: var(--ButtonHoverBlue);
    transition: 0.2s ease-in-out;
  }
`

export const SidebarWrapper = styled.div`
  color: #fff;
`

export const SidebarMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;
  
  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`

export const SidebarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Ubuntu', sans-serif;
  font-weight: 400;
  font-size: 1.5em;
  text-decoration: none;
  transition: 0.2s ease-in-out;
  color: #fff;
  cursor: pointer;
  
  &:hover {
    color: var(--ButtonHoverBlue);
    transition: 0.2s ease-in-out;
  }
  
`

export const SidebarBtnWrap = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`

export const SidebarRoute = styled.a`
  position: absolute;
  border-radius: 20px;
  background: lightgrey;
  white-space: nowrap;
  padding: 12px 24px;
  color: #000;
  font-family: 'Ubuntu', sans-serif;
  font-weight: 500;
  font-size: 1.1em;
  outline: none;
  border: none;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: var(--ButtonHoverBlue);
    font-size: 1.2em;
  }
`