import React from "react";
import IconExit from "../svg/Exit";

import Area from "./controllers/Area";
import Poblacion from "./controllers/Poblacion";

import {
  LinkContainerTitulo,
  Overlay,
  ContenedorModal,
  BotonCerrar,
  TituloCard,
  Imagen,
  Divv,
  ContImagen,
  Border,
  CardHear,
  Div,
  Btn,
} from "../styledComponents/Modal";

import { useSelector } from "react-redux";

function Model({ open, setOpen }) {

  
  const countriesID = useSelector((state) => state.CountryDetail);

  const handleClose = () => {
    setOpen(false);
  };

  let Areas = countriesID.length > 0 && countriesID[0].area;
  let Id = countriesID.length > 0 && countriesID[0].id;
  let poblacion =  countriesID.length > 0 && countriesID[0].poblacion

  return (
    <>
      {open && (
            <Overlay>
              <ContenedorModal>
                <BotonCerrar onClick={handleClose}>
                  <CardHear>
                    <Border>
                      <IconExit />
                    </Border>
                  </CardHear>
                </BotonCerrar>
                <ContImagen>
                  <Imagen src={countriesID.length > 0 && countriesID[0].flags} />
                </ContImagen>

            <Divv>
              <TituloCard>
                <h1>{countriesID.length > 0 && countriesID[0].name}</h1>
                <h2>
                  {" "}
                  Capital: {countriesID.length > 0 && countriesID[0].capital}
                </h2>
                <h2>
                  {" "}
                  Continente:{" "}
                  {countriesID.length > 0 && countriesID[0].continente}
                </h2>
                <h2>
                  {" "}
                 Poblacion:  {Poblacion(poblacion)}
                </h2>
                <h2> Area: {Area(Areas)}</h2>
               
              </TituloCard>
            </Divv>
            <Div>
              <LinkContainerTitulo to={`/actividades/${Id}`}>
                <Btn>Ver Actividades </Btn>
              </LinkContainerTitulo>
            </Div>
            <Div>
              <LinkContainerTitulo to={`/actividades/${Id}`}>
                <Btn>Añadir Actividad</Btn>
              </LinkContainerTitulo>
            </Div>
          </ContenedorModal>
      
        </Overlay>
      )}
    </>
  );
}

export default Model;
