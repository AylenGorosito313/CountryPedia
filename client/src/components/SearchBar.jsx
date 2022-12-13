import React from "react";
import { useState, useEffect } from "react";

import Filtros from "../svg/Filtros";
import { useDispatch, useSelector } from "react-redux";
import Icon from "../icons/Search_icon";

import {
  getAll_Countries_Asc,
  getAll_Countries_DESC,
  getAll_Countries_MAYOR,
  getAll_Countries_MENOR,
  getAll_CountriesByFilter,
  searchByName,
  FiltroContinenteAfrica,
  FiltroContinenteAsia,
  FiltroContinenteANTARCTIC,
  FiltroContinenteOceania,
  FiltroContinenteEuropa,
  FiltroContinenteAmericas,
} from "../Redux/Actions/actions.js";

import {
  Svg,
  Select,
  Input,
  ContainerSearch,
  Layout,
} from "../styledComponents/Search_styled";

function Buscador() {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filtros);
  const [input, setInput] = useState({
    valor: "",
  });
  const [open, setOpen] = useState(false);

  //////////////////////////////////////////////////

  const defaultValueSelect = {
    ASC: "Ordenar A-Z",
    DESC: "Ordenar Z-A",
    MAYOR: "Ordenar Mayor poblacion",
    MENOR: "Ordenar Menor poblacion",
    asia: "Asia",
    africa: "Africa",
    américas: "Americas",
    antarctic: "Antarctic",
    europe: "Europe",
    oceania: "Oceania",
  };

  const OnClick_filtros = (e) => {
    setOpen(!open);
  };

  const handlerChangeContinente = (event) => {
    if (event.target.value === "Asia") {
      dispatch(FiltroContinenteAsia(event.target.value));
    } else if (event.target.value === "Africa") {
      dispatch(FiltroContinenteAfrica(event.target.value));
    } else if (event.target.value === "Americas") {
      dispatch(FiltroContinenteAmericas(event.target.value));
    } else if (event.target.value === "Antarctic") {
      dispatch(FiltroContinenteANTARCTIC(event.target.value));
    } else if (event.target.value === "Europe") {
      dispatch(FiltroContinenteEuropa(event.target.value));
    } else if (event.target.value === "Oceania") {
      dispatch(FiltroContinenteOceania(event.target.value));
    }
  };

  const handlerChangeOrden = (event) => {
    if (event.target.value === "Ordenar A-Z") {
      dispatch(getAll_Countries_Asc());
    } else if (event.target.value === "Ordenar Z-A") {
      dispatch(getAll_Countries_DESC());
    } else if (event.target.value === "Ordenar Mayor poblacion") {
      dispatch(getAll_Countries_MAYOR());
    } else if (event.target.value === "Ordenar Menor poblacion") {
      dispatch(getAll_Countries_MENOR());
    }
  };

  ////////////////////////////////////////////////////////

  const handler_Submit = (e) => {
    e.preventDefault();
    dispatch(searchByName(input.valor));
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    setInput({
      valor: e.target.value,
    });
  };

  useEffect(() => {
    dispatch(getAll_CountriesByFilter());
  }, [filter]);

  return (
    <>
      {" "}
      <div>
        <form onSubmit={handler_Submit}>
          <Layout>
            <ContainerSearch>
              <Svg onClick={OnClick_filtros}>
                <Filtros />
              </Svg>
              {open && (
                <Select onChange={handlerChangeOrden}>
                  <option selected>Filtrar por Orden</option>
                  <option value={defaultValueSelect.ASC}>Ordenar A-Z</option>
                  <option value={defaultValueSelect.DESC}>Ordenar Z-A</option>
                  <option value={defaultValueSelect.MAYOR}>
                    Ordenar Mayor poblacion
                  </option>
                  <option value={defaultValueSelect.MENOR}>
                    Ordenar Menor poblacion
                  </option>
                  //////////////////////////// Filtros por continente
                </Select>
              )}

              {open && (
                <Select onChange={handlerChangeContinente}>
                  <option>Filtrar Continente </option>
                  <option value={defaultValueSelect.américas}>Américas</option>
                  <option value={defaultValueSelect.asia}>Asia</option>
                  <option value={defaultValueSelect.africa}>Africa</option>
                  <option value={defaultValueSelect.antarctic}>
                    Antarctic
                  </option>
                  <option value={defaultValueSelect.europe}>Europe</option>
                  <option value={defaultValueSelect.oceania}>Oceania</option>
                </Select>
              )}

              <Svg onClick={handler_Submit}>
                <Icon />
              </Svg>
              <Input
                type="text"
                autoComplete="off"
                value={input.valor}
                onChange={handleChange}
                placeholder="Search Country..."
              />
            </ContainerSearch>
          </Layout>
        </form>
      </div>
    </>
  );
}

export default Buscador;
