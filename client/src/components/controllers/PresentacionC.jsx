import React from "react";
import land from "../../images/land.jpg";
import LogoG from "../../svg/LoogGrande";

import {
  Imagen,
  DivImagen,
  DivTitle,
  DivLogo,
  BtnStart,
  DivBtn,
  LinkContainerTitulo,
} from "../../styledComponents/Presentacion";
function Presentacion() {
  return (
    <DivImagen>
      <Imagen src={land} alt=" Pres" />

      <DivTitle>
        <DivLogo>
          <LogoG />
        </DivLogo>
        <h1>Where in the world ?</h1>
        <h2>
          Find all the information and activities you need <br></br> from all
          countries.
        </h2>
        <DivBtn>
          <LinkContainerTitulo to={`/home`}>
            <BtnStart>Start</BtnStart>
          </LinkContainerTitulo>
        </DivBtn>
      </DivTitle>
    </DivImagen>
  );
}

export default Presentacion;
