import React from "react";
import { useState } from "react";
import {FiltroTempInd,FiltroBusquedaIND} from "../../Redux/Actions/actions"
import Filtros from "../../svg/Filtros";
import { useDispatch } from "react-redux";
import Icon from "../../icons/Search_icon";



import {
  Svg,
  Select ,

  Input,
  ContainerSearch,
  
  LayoutACT
} from "../../styledComponents/Search_styled";

function BuscadorActividadesIND() {
    
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    valor: "",
  });
  const [open, setOpen] = useState(false);

  //////////////////////////////////////////////////

  const defaultValueSelect = {
    verano: "Verano",
    invierno: "Invierno",
    otonio: "Otoño",
    primavera: "Primavera",
    
  };


  const OnClick_filtros = (e) => {
    setOpen(!open);
  };

  const handlerChange = (event) => {

    if (event.target.value === "Otoño") {
        let input =event.target.value 
      dispatch(FiltroTempInd(input));
    }

    if (event.target.value === "Invierno") {
     let input =event.target.value 
      dispatch( FiltroTempInd(input));


    }
    if (event.target.value === "Verano") {
        let input =event.target.value 
      dispatch(  FiltroTempInd(input));
    }
    if (event.target.value === "Primavera") {
        let input =event.target.value 
        dispatch(  FiltroTempInd(input));
      }
  };

  

  ////////////////////////////////////////////////////////

  const handleChangeBus = (e) => {
    console.log(e.target.value);
    setInput({
      valor: e.target.value,
    });
  };

  const handler_Submit = (e) => {
    e.preventDefault();
    console.log(input);
    dispatch(FiltroBusquedaIND(input.valor));
  };

  return (
    <>
      {" "}
      <div>
        <form onSubmit={handler_Submit}>
          <LayoutACT>
            <ContainerSearch>
              <Svg onClick={OnClick_filtros}>
                <Filtros />
              </Svg>
              {open && (
                <Select  onChange={handlerChange}>
                  <option selected>Filtrar por</option>
                  <option value={defaultValueSelect.verano}>Verano</option>
                  <option value={defaultValueSelect.invierno}>Invierno</option>
                  <option value={defaultValueSelect.otoño}>Otoño</option>
                  <option value={defaultValueSelect.primavera}>Primavera</option>
                </Select >
              )}
              <Svg onClick={handler_Submit}>
                <Icon />
              </Svg>
              <Input
                type="text"
                autoComplete="off"
                value={input.valor}
                onChange={handleChangeBus }
                placeholder="Search activity..."
              />
              
            </ContainerSearch>
          


            
          </LayoutACT>
        </form>
      </div>
    </>
  );
}

export default BuscadorActividadesIND;