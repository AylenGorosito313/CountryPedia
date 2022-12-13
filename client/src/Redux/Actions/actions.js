import {
  GET_COUNTRIES,
  GET_COUNTRIES_BY_FILTER,
  GET_COUNTRIES_ID,
  GET_COUNTRIES_ASC,
  GET_FILTER_BY_SEACH,
  POST_ACT,
  GET_COUNTRIES_DESC,
  GET_COUNTRIES_Menor,
  GET_COUNTRIES_Mayor,
  GET_IDS,
  FIL_ACT_TEMP_IND,
  FIL_ACT_BUSQUEDA_IND,
  GET_ALL_ACT_IND,
  FILTRO_CONTINENTE_OCEANIA,
  FILTRO_CONTINENTE_EUROPE,
  FILTRO_CONTINENTE_ANTARCTIC,
  FILTRO_CONTINENTE_AMERICAS,
  FILTRO_CONTINENTE_AFRICA,
  FILTRO_CONTINENTE_ASIA,
  FILTER_SEACH_ACT,
  GET_ACTIVIDAD_BY_FILTER,
FILTRO_ACTIVIDAD_VERANO,
FILTRO_ACTIVIDAD_INVIERNO,
FILTRO_ACTIVIDAD_OTOÑO,
FILTRO_ACTIVIDAD_PRIMAVERA
} from "./actions-type";

import axios from "axios";

export const getAll_Countries = (name) => {
  return async function (dispatch) {
    let res = await axios({
      method: "GET",
      url: `/countries?name=${name}`,
    });
    dispatch({ type: GET_COUNTRIES, payload: res.data });
  };
};
export const getAll_id = () => {
  return async function (dispatch) {
    let res = await axios({
      method: "GET",

      url: `/countries`,
    });

    dispatch({ type: GET_IDS, payload: res.data });
  };
};
// export const get_All_ACT = () => {
//   return async function (dispatch) {
//     let res = await axios({
//       method: "GET",
//       url: `/actividades`,
//     });

//     dispatch({ type: GET_ALL_ACT, payload: res.data });
//   };
// };

///Filtro 

export const getAll_CountriesByFilter = () => {
  return async function (dispatch) {
    let res = await axios({
      method: "GET",
      url: `/countries`,
    });
    dispatch({ type: GET_COUNTRIES_BY_FILTER, payload: res.data });
  };
};
export const getAll_Actividades = () => {
  return async function (dispatch) {
    let res = await axios({
      method: "GET",
      url: `/actividades`,
    });
    dispatch({ type: GET_ACTIVIDAD_BY_FILTER, payload: res.data });
  };
};
///////////////Filter.search/////////7///

export const searchByName = (name) => {
  return {
    type: GET_FILTER_BY_SEACH,
    payload: name,
  };
};
export const searchByNameACT = (name) => {
  return {
    type: FILTER_SEACH_ACT,
    payload: name,
  };
};



//////////////////////// FILTROS.order ///////////////////

export const getAll_Countries_Asc = () => {
  return {
    type: GET_COUNTRIES_ASC,
    payload: "",
  };
};

export const getAll_Countries_DESC = () => {
  return {
    type: GET_COUNTRIES_DESC,
    payload: "",
  };
};

export const getAll_Countries_MAYOR = () => {
  return {
    type: GET_COUNTRIES_Mayor,
    payload: "",
  };
};

export const getAll_Countries_MENOR = () => {
  return {
    type: GET_COUNTRIES_Menor,
    payload: "",
  };
};

///////////////////////Filtros.temporada///////////////
export const FiltroTemporadaVerano = (input) => {
  return {
    type: FILTRO_ACTIVIDAD_VERANO,
    payload: input,
  };
};
export const FiltroTemporadaInvierno = (input) => {
  return {
    type: FILTRO_ACTIVIDAD_INVIERNO,
    payload: input,
  };
};
export const FiltroTemporadaOtoño = (input) => {
  return {
    type: FILTRO_ACTIVIDAD_OTOÑO,
    payload: input,
  };
};
export const FiltroTemporadaPrimavera = (input) => {
  return {
    type:FILTRO_ACTIVIDAD_PRIMAVERA,
    payload: input,
  };
};
////////////////////////FILTROS.continent/////////////////////////////
export const FiltroContinenteANTARCTIC = (input) => {
  return {
    type: FILTRO_CONTINENTE_ANTARCTIC,
    payload: input,
  };
};
export const FiltroContinenteAsia = (input) => {
  return {
    type: FILTRO_CONTINENTE_ASIA,
    payload: input,
  };
};
export const FiltroContinenteAfrica = (input) => {
  return {
    type: FILTRO_CONTINENTE_AFRICA,
    payload: input,
  };
};
export const FiltroContinenteAmericas = (input) => {
  return {
    type: FILTRO_CONTINENTE_AMERICAS,
    payload: input,
  };
};
export const FiltroContinenteEuropa = (input) => {
  return {
    type: FILTRO_CONTINENTE_EUROPE,
    payload: input,
  };
};
export const FiltroContinenteOceania = (input) => {
  return {
    type: FILTRO_CONTINENTE_OCEANIA,
    payload: input,
  };
};

////////////////////FILTROS ACT////////////////////////////////



export const GetActIndividual = () => {
  return {
    type: GET_ALL_ACT_IND,
    payload: "",
  };
};

export const FiltroTempInd = (input) => {
  return {
    type: FIL_ACT_TEMP_IND,
    payload: input,
  };
};
export const FiltroBusquedaIND = (input) => {
  return {
    type: FIL_ACT_BUSQUEDA_IND,
    payload: input,
  };
};

////////////////////////FIN ///////////////////

export const getById = (id) => {
  return async function (dispatch) {
    let res = await axios({
      method: "GET",

      url: `/countries/${id}`,
    });
    dispatch({ type: GET_COUNTRIES_ID, payload: res.data });
  };
};

export const postActivity = (form) => {
  return async function (dispatch) {
    let res = await axios({
      method: "POST",
      data: form,
      url: "/actividades",
    });
    dispatch({ type: POST_ACT, payload: res.data });
  };
};
