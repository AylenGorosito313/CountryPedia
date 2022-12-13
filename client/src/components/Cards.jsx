import React from "react";

import {
  ContImagen,
  TituloCard,
  Div,
  TituloContainer,
  Card,
  Imagen,
} from "../styledComponents/landings";

function ContryCards({ id, name, continente, flags, onClick }) {
  const handleClick = () => {
    onClick(id);
  };

  return (
    <Div>
      <Card>
   

        <TituloCard>{continente}</TituloCard>
        <TituloContainer onClick={handleClick}>
          <TituloCard>{name}</TituloCard>
        </TituloContainer>

        <ContImagen>
          <Imagen src={flags} />
        </ContImagen>
      </Card>
    </Div>
  );
}

export default ContryCards;
