import React from "react";
import { useState } from "react";

import Filtros from "../svg/Filtros";
import { useDispatch, useSelector } from "react-redux";
import Icon from "../icons/Search_icon";
import { 
  getAll_Actividades,
  searchByNameACT,
  FiltroTemporadaVerano,
  FiltroTemporadaInvierno,
  FiltroTemporadaOtoño,
  FiltroTemporadaPrimavera


} from "../Redux/Actions/actions";


import {
  Svg,
  Select ,
  Input,
  ContainerSearch,
  LayoutACT
} from "../styledComponents/Search_styled";
import { useEffect } from "react";

function BuscadorActividades() {

  const dispatch = useDispatch();
  const filterActividad = useSelector((state) => state.filtroACT);
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
      dispatch(FiltroTemporadaOtoño(input));
    }

    if (event.target.value === "Invierno") {
     let input =event.target.value 
      dispatch( FiltroTemporadaInvierno(input));


    }
    if (event.target.value === "Verano") {
        let input =event.target.value 
      dispatch(FiltroTemporadaVerano(input));
    }
    if (event.target.value === "Primavera") {
        let input =event.target.value 
        dispatch(FiltroTemporadaPrimavera(input));
      }
  };

  const handler_Submit = (e) => {
    e.preventDefault();
    console.log(input);
    dispatch(searchByNameACT(input.valor));
  };
  
  useEffect(() => {
    dispatch(getAll_Actividades());
  }, [filterActividad]);

  ////////////////////////////////////////////////////////

  const handleChangeBus = (e) => {
    console.log(e.target.value);
    setInput({
      valor: e.target.value,
    });
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

export default BuscadorActividades;
