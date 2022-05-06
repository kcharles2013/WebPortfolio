import styled from "styled-components";

export const ContactMeContainer = styled.div`
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

export const ContactMeWrapper = styled.div`
  height: 100vh;
  width: auto;
  display: grid;
  justify-content: center;
  align-items: center;
  //background-color: darkslateblue;

  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 520px) {
    margin-top: -12vh;
  }
`

export const CMTitleWrapper = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  margin-top: 10em;
  //background-color: #3c873a;
`

export const CMTitle = styled.h1`
  text-align: center;
  font-size: 4em;
  font-family: 'Roboto', sans-serif;
  font-weight: 900;
  color: lightgrey;
`

export const CMContentWrapper = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  margin-bottom: 14em;
  //background-color: red;

  @media screen and (max-width: 768px) {
    margin-top: -10em;
  }

  @media screen and (max-width: 520px) {
    margin-top: -14em;
  }
`

export const CMContent = styled.div`
  display: flex;
  gap: 1em;
  align-items: center;
  justify-content: center;
  margin-bottom: 2em;
`

export const CMTitleName = styled.h2`
  font-size: 2.5em;
  font-family: 'Roboto', sans-serif;
  font-weight: 900;
  color: lightgrey;
`

export const CMDescription = styled.p`
  color: lightgrey;
  font-size: 1.5em;
  font-family: 'Oxygen', sans-serif;
  font-weight: 700;
`