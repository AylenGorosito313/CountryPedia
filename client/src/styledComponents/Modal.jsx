
import styled from "styled-components";
import { Link } from "react-router-dom"



export const Overlay = styled.div`
display:flex;
justify-content: center;
align-items: center;
width:100vw;
height:100vh;
position:fixed;
top:0;
left:0;
background:rgba(0,0,0,.5);
z-index:1;
`

export const ContenedorModal= styled.div`
display:flex;
flex-direction: column;


width:400px;
height:auto;
background: #36335A;
position: relative;
border-radius:10px;
box-shadow: rgba(100,100,111,0.2) 0px 7px 29px 0px


ContImagen {
   
    justify-content: center;
  
}

`
export const EncabezadoModal= styled.div`
display:flex;
align-items:center;
justify-content: space-between;






margin-bottom:20px;

box-shadow: rgba(100,100,111,0.2) 0px 7px 29px 0px
padding-bottom:20px;
border-bottom:1px solid #E8E8E8;

h3{
    font-weight:500;
    font-size:16px;
    color: #1766DC;
}


`
export const BotonCerrar= styled.button`
position: absolute;
top:20px;
right:20px;
border:none;
width:30px;
height:30px;
background: none;
cursor:pointer;
transition:.3s  ease
`

export const Imagen = styled.img`
  height: 250px;
  width: 100%;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`;

export const ContImagen = styled.div`
  display: flex;
 
  justify-content: center;
  align-items: center;
`;

export const Divv = styled.div`
  display: flex;
 padding-left:20px; 
 flex-direction: column;
 TituloCard{
  font-family: "Poppins";
  font-weight:400;
 }
`;


export const TituloCard = styled.h1`
  color: #fff;
padding:10px;
  font-family: 'Poppins';
  font-weight:300;
  font-size: 15px;
  justify-content: center;
  text-overflow: ellipsis;
  h1{
    padding:10px;
    font-weight:300;
    font-size:20px;
    color: #fff;
}
h2{
  padding:10px;
    font-weight:400;
    font-size:16px;
    color: #fff;
}
`

export const Border= styled.div`
display: flex;

align-items: center;
height: 40px;
width: 40px;
border-radius: 50%;
top:50px;
justify-content: center;
cursor:pointer;
color: #ffff;




&:hover{
  color :#F00073;
  filter:#F71818 contrast(-1000%);

}

&:active{
  color :#F00073;
  filter: #F00073 contrast(200%);
  animation:  heartback 1s ease-in-out infinite;
}
@keyframes heartback{
  0%,100%{
    opacity: 0.2;
    transform:  scale(1);
  }
  50%{
    opacity: 0.2;
    transform:  scale(2);
  }
}
@keyframes heart{
  0%,100%{
    transform:  scale(1);
  }
  50%{
    transform:  scale(1.2);
  }
}
}
`
export const CardHear = styled.div`
display: flex;
height: 40px;
width: 40px;;
background: #fff;
border-radius: 50%;

box-shadow: #fff 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

`

export const Hr= styled.div` 
height: 0.5px;
background-color:#B6BDF0;
outline:none !important;
box-shadow: #2F3CA2 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
`



export const Btn = styled.button`

padding-top: 20px;
  align-items: center;
  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0.25rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;
  color: rgba(0, 0, 0, 0.85);
  cursor: pointer;
  display: inline-flex;
  font-family: system-ui, -apple-system, system-ui, "Helvetica Neue", Helvetica,
    Arial, sans-serif;
  font-size: 16px;
  font-weight: 600;
  justify-content: center;
  line-height: 1.25;
  margin: 0;
  min-height: 3rem;
  padding: calc(0.875rem - 1px) calc(1.5rem - 1px);
  position: relative;
  text-decoration: none;
  transition: all 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  width: auto;

  &:hover,
  &:focus {
    border-color: rgba(0, 0, 0, 0.15);
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
    color: rgba(0, 0, 0, 0.65);
  }

  &:hover {
    transform: translateY(-1px);
  }

  &:active {
    background-color: #f0f0f1;
    border-color: rgba(0, 0, 0, 0.15);
    box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
    color: rgba(0, 0, 0, 0.65);
    transform: translateY(0);
  }
`;
export const Div = styled.div`
padding: 10px 0px 10px 0px;
  display: flex;
  padding-top: 10px;
  justify-content: center;
  align-items: center;
`;
export const Div_Actividades = styled.div`
  display: flex;
  padding-top: 10px;
  justify-content: center;
  align-items: center;
`;

export const LinkContainerTitulo = styled(Link)`
color:#000;
 font-size: x-large;
 font-family: Arial, Helvetica, sans-serif;
 text-decoration: none;
 margin: 10px;
&:hover,
&:focus{
    color: blue;
}
&:active{
    color: red;
};

`