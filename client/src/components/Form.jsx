import React, { useEffect, useState } from "react";
import "../styledComponents/error-input.css";

import { useDispatch, useSelector } from "react-redux";
import { postActivity, getAll_id } from "../Redux/Actions/actions";

import {
  Diva,
  DivError,
  PError,
  DivPError,
  Btn,
  DivBoton,
} from "../styledComponents/form_styled";

function Form() {
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const [successful, setSuccessful] = useState("");
  const countriesValidation = useSelector((state) => state.filInd);
  const countriesID = useSelector((state) => state.CountryDetail);

  useEffect(() => {
    dispatch(getAll_id(""));
  }, []);

  let [form, setForm] = useState({
    name: "",
    dificultad: "1",
    temporada: "Invierno",
    duracion: "30 min",
    countryId: "",
  });

  const defaultValueSelect = {
    verano: "Verano",
    invierno: "Invierno",
    otonio: "Otoño",
    primavera: "Primavera",
    minuto: "30 min",
    hora1: "1 hrs",
    hora2: "2 hrs",
    hora3: "5 hrs",
  };

  const handlerChangeName = (event) => {
    let value = event.target.value;
    let act = countriesValidation.length > 0 && countriesValidation[0]?.filter((act) => act.name === value);

    if (act.length === 0) {
      if (event.target.value.length > 100) {
        setError(
          "     " + "El nombre del actividad debe tener menos de 100 caracteres"
        );
      } else if (event.target.value === "") {
        setError("     " + "Debe completar este campo");
      } else if (/^([0-9])*$/.test(value)) {
        setError(
          "  " + "El nombre de la actividad solo puede contener letras "
        );
      } else {
        setError("");
      }

      setForm({ ...form, name: event.target.value });
    } else {
      setError("La actividad ya existe");
    }
  };

  const handlerChangeDif = (event) => {
    if (event.target.value >= 0 && event.target.value <= 5) {
      setForm({
        ...form,
        dificultad: new Intl.NumberFormat().format(event.target.value),
      });
    }
  };

  const handlerChangeTemp = (event) => {
    console.log(event.target.value);
    setForm({ ...form, temporada: event.target.value });
  };
  const handlerChangeDuracion = (event) => {
    setForm({ ...form, duracion: event.target.value });
  };
  const handler_Submit = (e) => {
    let Contry_id = countriesID.length > 0 && countriesID[0].id;
    e.preventDefault();

    dispatch(postActivity({ ...form, countryId: Contry_id }));
    setSuccessful("Actividad creada con exito");
  };

  return (
    <form onSubmit={handler_Submit}>
      <DivError>
        <Diva>
          <label className={error && "error"}>Nombre</label>
          <input
            type="text"
            onChange={handlerChangeName}
            value={form.name}
            className={error && "error"}
          />
        </Diva>

        <DivPError>{error && <PError>{error}</PError>}</DivPError>
      </DivError>
      <Diva>
        <label>Dificultad</label>
        <input
          type="number"
          onChange={handlerChangeDif}
          value={form.dificultad}
        />
      </Diva>
      <Diva>
        <label>Duracion</label>
        <select name="select" onChange={handlerChangeDuracion}>
          <option value={defaultValueSelect.minuto} selected>
            30 min
          </option>
          <option value={defaultValueSelect.hora1}>1 hrs</option>

          <option value={defaultValueSelect.hora2}>2 hrs</option>
          <option value={defaultValueSelect.hora3}>5 hrs</option>
        </select>
      </Diva>
      <Diva>
        <label>Temporada</label>
        <select name="select" onChange={handlerChangeTemp}>
          <option value={defaultValueSelect.verano}>Verano</option>
          <option value={defaultValueSelect.invierno} selected>
            Invierno
          </option>
          <option value={defaultValueSelect.otonio}>Otoño</option>
          <option value={defaultValueSelect.primavera}>Primavera</option>
        </select>
      </Diva>
      {successful && <p className="Succs">{successful}</p>}
      <DivBoton>
        <Btn>
          <input
            disabled={error}
            type="submit"
            className={error && "btnError"}
          ></input>
        </Btn>
      </DivBoton>
    </form>
  );
}

export default Form;
