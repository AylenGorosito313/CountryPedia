
import styled from "styled-components";
export const CardAct = styled.div`
display: flex;
flex-direction: column-revers;

height: 300px;
width: 200px;;
margin-right: 40px;
margin-top: 20px;
border-radius: 30px;

padding: 20px;



box-shadow: #929AD4 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

`

export const Div = styled.div`

  display: flex;
  font-family: sans-serif;
  font-siz: 10px;
  padding-top: 10px;
  justify-content: flex-start;
  align-items: center;
  height:  auto;
  width: auto;
`;
export const Imagen= styled.img`

height: 300px;
width: 200px;;
border-radius:20px;
display: flex;

`


export const Divact = styled.div`
padding:10px 10px 10px 10px;
display: flex;

height: auto;
width: auto;
font-family: 'Poppins', sans-serif;
font-size:16px;


@media (max-width: 1174px) {
  flex-direction: column;
}
`
export const Divcolunm = styled.div`

display: flex;
flex-direction: column;
align-items: center;
height: auto;
width: auto;
font-weight:500;
@media (max-width: 1174px) {
  flex-direction: column;
}

`

export const TituloCard = styled.h1`
color: #3F51B5;
font-family: 'Poppins', sans-serif;
font-size: 20px;

text-overflow: ellipsis;
display: flex;
`


export const ContainerCard = styled.div`
height: auto;
width: 70vw;
display: flex;
align-items: center;
justify-content:  space-evenly;
padding: 10px 10px 10px 20px;
margin-top:20px;
border-radius: 10px;
box-shadow: #929AD4 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

`
export const Divf = styled.div`
height: auto;
width: 70vw;
display: flex;
align-items: center;
justify-content:  space-evenly;
padding: 10px 10px 10px 20px;

border-radius: 10px;
box-shadow: #929AD4 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

`
export const Hr= styled.div` 
height: 0.5px;
background-color:#B6BDF0;
outline:none !important;
box-shadow: #2F3CA2 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
`


export const TituloCardA = styled.h1`
color: #3F51B5;
font-family: 'Poppins', sans-serif;
font-size: 30px;
justify-content: center;
padding:20px;
display: flex;
`
export const Pdescrip = styled.h2`
display:flex;
font-weight:500;
font-family: 'Poppins';
width:200px;
justify-content: center;
font-size: 16px;
color: blue;
box-shadow: #2f3ca2 0px 0px 2px, rgba(0, 0, 0, 0.3) 0px 0px 0px -10px,
rgba(0, 0, 0, 0.2) 0px 0px 0px ;
`

export const Pcontenido = styled.p`
display:flex;
font-family: 'Poppins';
font-size: 14px;
color: blue;
font-weight:500;
`

export const Svg = styled.svg`
  margin-left: 10px;
  display: flex;
  height: 30px;
  width: 30px;
  align-items: center;
  cursor: pointer;
  &:hover {
    filter: contrast(200%);
  }

  &:active {
    filter: contrast(100%);
  }
`;