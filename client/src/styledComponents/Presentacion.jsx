
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Imagen = styled.img`
  height: 100%;
  width: 80vw;
  justify-content: center;
  border-radius: 20px;
  filter: blur(0.5px);
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  @media (max-width: 768px) {
    height: 500px;
    width: 700px;
  }
`;

export const DivImagen = styled.div`
  height: 100vh;
  width: 100%;
  background: #050505;
  flex-direction: column-reverse;
  display: flex;
  justify-content: center;
  color: #fff;
  padding: 0px;
`;

export const DivTitle = styled.div`
display:flex; 
align-items: stretch;
justify-content: center;
flex-direction: column;
position:absolute;
padding: 10px 10px 10px 90px;
height: auto;
width: auto;

h1{
    
    color: #fff:
    font-family: 'Poppins';
    font-size: 50px;
    font-weight:500;
    height: auto;
width: auto;
  }

  h2{
    color: #fff:
    font-family: 'Poppins';
    font-size: 30px;
    font-weight:500;
    height: auto;
width: auto;
  }

  @media (max-width: 768px) {
    display:flex; 
align-items: stretch;
justify-content: center;
flex-direction: column;
padding: 170px 10px 10px 90px;
  }

  
  @media (max-width: 768px) {
    h1{
      font-size: 30px;
    }

    h2{
      font-size: 20px;
    }
  }


`;

export const DivLogo = styled.div`
  padding: 10px 160px 10px 10px;
  display: flex;
  height: auto;
  width: auto;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    padding: 10px 300px 10px 10px;
  }
`;

export const DivBtn = styled.div`
  padding: 100px 160px 10px 10px;
  display: flex;
  height: auto;
  width: auto;
  align-items: center;


  @media (max-width: 768px) {
    justify-content: center;
    padding: 60px 160px 10px 10px;
  }
`;
export const BtnStart = styled.button`
  align-items: center;
  appearance: none;
  background-color: #fcfcfd;
  border-radius: 4px;
  border-width: 0;
  box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,
    rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
  box-sizing: border-box;
  color: #36395a;
  cursor: pointer;
  display: inline-flex;
  font-family: "Poppins";
  height: 48px;
  width: 200px;
  justify-content: center;
  line-height: 1;
  list-style: none;
  overflow: hidden;
  padding-left: 16px;
  padding-right: 16px;
  position: relative;
  text-align: left;
  text-decoration: none;
  transition: box-shadow 0.15s, transform 0.15s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  will-change: box-shadow, transform;
  font-size: 18px;

  &:focus {
    box-shadow: #d6d6e7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px,
      rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
  }

  &:hover {
    box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px,
      rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
    transform: translateY(-2px);
  }

  &:active {
    box-shadow: #d6d6e7 0 3px 7px inset;
    transform: translateY(2px);
  }
`;

export const LinkContainerTitulo = styled(Link)`
  color: #000;
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;
  &:hover,
  &:focus {
    color: blue;
  }
  &:active {
    color: red;
  }
`;
