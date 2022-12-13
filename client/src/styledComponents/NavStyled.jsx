
import styled from "styled-components";
import { Link } from "react-router-dom";

export const Estilo = styled.div`
  justify-content: space-evenly;
  display: flex;

  font-family: "Poppins", sans-serif;
  background-color: #312f45;
  height: auto;
  weight: 50vw;


  padding: 20px;
 
`;

export const LinkContainer = styled(Link)`
  color: #fff;
  font-size: 20px;
  font-family: Work Sans;
  text-decoration: none;
  margin: 10px;
  &:hover,
  &:focus {
    color: #4a43aa;
  }
  &:active {
    color: #fff;
  }
`;
export const DivPadre = styled.div`
  padding: 10px;
  background-color: #312f45;
  outline: none !important;

`;

export const A = styled.div`
  outline: none !important;
  align-items: center !important;
  padding: 1rem !important;
  font-size: 1.2rem !important;
  color: #3f51b5 !important;
  margin-right: 10px !important;
  margin-top: 10px !important;
  flex-wrap: wrap !important;
`;

export const DivLogo = styled.div`
 padding-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;




export const DivNav = styled.div`
  display: flex;
  justify-content: space-around;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;