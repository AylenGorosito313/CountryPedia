import {
  GET_COUNTRIES,
  GET_COUNTRIES_BY_FILTER,
  GET_FILTER_BY_SEACH,
  GET_COUNTRIES_ID,
  POST_ACT,
  GET_COUNTRIES_ASC,
  GET_COUNTRIES_DESC,
  GET_COUNTRIES_Menor,
  GET_COUNTRIES_Mayor,
  GET_IDS,
  FIL_ACT_BUSQUEDA,
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
  FILTRO_ACTIVIDAD_VERANO,
  FILTRO_ACTIVIDAD_INVIERNO,
  FILTRO_ACTIVIDAD_OTOÑO,
  FILTRO_ACTIVIDAD_PRIMAVERA,
  GET_ACTIVIDAD_BY_FILTER,
} from "../Actions/actions-type";


function sliceIntoChunks(arr, chunkSize) {
  const res = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i, i + chunkSize);
    res.push(chunk);
  }
  return res;
}




const initialState = {
  countries: [],
  CountryDetail: [],
  GET_IDS: [],
  ACT: [],
  filtroACT: {
    search: "",
    temporada: "",
  },
  filInd: [],
  filtros: {
    order: "",
    search: "",
    continent: "",
  },
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countries: [...sliceIntoChunks(action.payload, 10)],
      };

    case GET_IDS:
      return {
        ...state,
        GET_IDS: [action.payload],
      };
    ////////////////////////////////FILTROS DE ACTIVIDAD//////////////////////////////////////////
    case FILTER_SEACH_ACT:
      return {
        ...state,
        filtroACT: { ...state.filtroACT, search: action.payload },
      };

    case GET_ACTIVIDAD_BY_FILTER:
      var actividadOrder = action.payload;
      let input = state.filtroACT.search;

      //busqueda
      if (state.filtroACT.search?.length > 0) {
        actividadOrder = actividadOrder.filter((item) =>
          item.name.toUpperCase().includes(input.toUpperCase())
        );
      }

      // filter by seasons
      if (state.filtroACT.temporada === "Verano") {
        actividadOrder = actividadOrder.filter(
          (countries) => countries.temporada === "Verano"
        );
      }

      if (state.filtroACT.temporada === "Invierno") {
        actividadOrder = actividadOrder.filter(
          (countries) => countries.temporada === "Invierno"
        );
      }

      if (state.filtroACT.temporada === "Primavera") {
        actividadOrder = actividadOrder.filter(
          (countries) => countries.temporada === "Primavera"
        );
      }
      if (state.filtroACT.temporada === "Otoño") {
        actividadOrder = actividadOrder.filter(
          (countries) => countries.temporada === "Otoño"
        );
      }
      return {
        ...state,
        ACT: [actividadOrder],
      };

    case FILTRO_ACTIVIDAD_VERANO:
      return {
        ...state,
        filtroACT: { ...state.filtroACT, temporada: action.payload },
      };
    case FILTRO_ACTIVIDAD_OTOÑO:
      return {
        ...state,
        filtroACT: { ...state.filtroACT, temporada: action.payload },
      };
    case FILTRO_ACTIVIDAD_PRIMAVERA:
      return {
        ...state,
        filtroACT: { ...state.filtroACT, temporada: action.payload },
      };
    case FILTRO_ACTIVIDAD_INVIERNO:
      return {
        ...state,
        filtroACT: { ...state.filtroACT, temporada: action.payload },
      };

    //////////////////FILTROS ORDENAMIENTO////////////////////////

    case GET_FILTER_BY_SEACH:

      return {
        ...state,
        filtros: { ...state.filtros, search: action.payload },
      };

      ///////////////////////////////////

    case GET_COUNTRIES_BY_FILTER:


      var contriesOrder = action.payload;
      //busqueda
      if (state.filtros.search?.length > 0) {
        contriesOrder = contriesOrder.filter((item) =>
          item.name.toUpperCase().includes(state.filtros.search.toUpperCase())
        );
      }
      //ordenadoç


      if (state.filtros.order === "ASC") {
        contriesOrder = contriesOrder.sort(function (a, b) {
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          return 0;
        });
      }

      if (state.filtros.order === "DESC") {
        contriesOrder = contriesOrder.sort(function (a, b) {
          if (a.name > b.name) {
            return -1;
          }
          if (a.name < b.name) {
            return 1;
          }
          return 0;
        });
      }

      if (state.filtros.order === "MENOR") {
        contriesOrder = contriesOrder.sort(function (a, b) {
          return a.poblacion - b.poblacion;
        });
      }

      if (state.filtros.order === "MAYOR") {
        contriesOrder = contriesOrder.sort(function (a, b) {
          return b.poblacion - a.poblacion;
        });
      }

      // filter by continent
      if (state.filtros.continent === "Americas") {
        contriesOrder = contriesOrder.filter(
          (countries) => countries.continente === "Americas"
        );
      }

      if (state.filtros.continent === "Africa") {
        contriesOrder = contriesOrder.filter(
          (countries) => countries.continente === "Africa"
        );
      }

      if (state.filtros.continent === "Asia") {
        contriesOrder = contriesOrder.filter(
          (countries) => countries.continente === "Asia"
        );
      }
      if (state.filtros.continent === "OCEANIA") {
        contriesOrder = contriesOrder.filter(
          (countries) => countries.continente === "OCEANIA"
        );
      }
      if (state.filtros.continent === "Europe") {
        contriesOrder = contriesOrder.filter(
          (countries) => countries.continente === "Europe"
        );
      }
      if (state.filtros.continent === "Antarctic") {
        contriesOrder = contriesOrder.filter(
          (countries) => countries.continente === "Antarctic"
        );
      }

      return {
        ...state,
        countries: [...sliceIntoChunks(contriesOrder, 10)],
      };
    case GET_COUNTRIES_ASC:
      return {
        ...state,
        filtros: { ...state.filtros, order: "ASC" },
      };

    case GET_COUNTRIES_DESC:
      return {
        ...state,
        filtros: { ...state.filtros, order: "DESC" },
      };

    case GET_COUNTRIES_Menor:
      return {
        ...state,
        filtros: { ...state.filtros, order: "MENOR" },
      };

    case GET_COUNTRIES_Mayor:
      return {
        ...state,
        filtros: { ...state.filtros, order: "MAYOR" },
      };
    ///////////////////////////FILTRO POR CONTINENTE////////////////////////////////////

    case FILTRO_CONTINENTE_OCEANIA:
      return {
        ...state,
        filtros: { ...state.filtros, continent: "OCEANIA" },
      };

    case FILTRO_CONTINENTE_EUROPE:
      return {
        ...state,
        filtros: { ...state.filtros, continent: "Europe" },
      };

    case FILTRO_CONTINENTE_ANTARCTIC:
      return {
        ...state,
        filtros: { ...state.filtros, continent: "Antarctic" },
      };
    case FILTRO_CONTINENTE_AMERICAS:
      return {
        ...state,
        filtros: { ...state.filtros, continent: "Americas" },
      };
    case FILTRO_CONTINENTE_AFRICA:
      return {
        ...state,
        filtros: { ...state.filtros, continent: "Africa" },
      };
    case FILTRO_CONTINENTE_ASIA:
      return {
        ...state,
        filtros: { ...state.filtros, continent: "Asia" },
      };
    //////////////////////////////////////////////////////////////////
    case GET_COUNTRIES_ID:
      return {
        ...state,
        CountryDetail: [...action.payload],
      };
    case POST_ACT:
      return {
        ...state,
        act: [action.payload],
      };

    ////////////////////////////////////////////////////////////

    case GET_ALL_ACT_IND:
      let resAll = [];
      const getAct =
        state.CountryDetail.length > 0 &&
        state.CountryDetail[0].Actividads?.forEach((act) => resAll.push(act));
      return {
        ...state,
        filInd: [resAll],
      };

    case FIL_ACT_TEMP_IND:
      const filtTempIND =
        state.CountryDetail.length > 0 &&
        state.CountryDetail[0].Actividads?.filter(
          (act) => act.temporada === action.payload
        );

      return {
        ...state,
        filInd: [filtTempIND],
      };

    case FIL_ACT_BUSQUEDA_IND:
      console.log(action.payload);

      let SearchInd =
        state.CountryDetail.length > 0 &&
        state.CountryDetail[0].Actividads?.filter(
          (act) => act.name === action.payload
        );
      if (action.payload === "") {
        state.CountryDetail.length > 0 &&
          state.CountryDetail[0].Actividads?.forEach((act) =>
            SearchInd.push(act)
          );
      }

      return {
        ...state,
        filInd: [SearchInd],
      };

    case FIL_ACT_BUSQUEDA:
      let filtDuracion =
        state.ACT.length > 0 &&
        state.ACT[0]?.filter((act) => act.name === action.payload);

      return {
        ...state,
        ACT: [filtDuracion],
      };

    /////////////////////////////////////////////////////////////////////////
    default:
      return { ...state };
  }
};

export default rootReducer;
