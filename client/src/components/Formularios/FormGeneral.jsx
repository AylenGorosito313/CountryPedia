import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { postActivity, getAll_id } from "../../Redux/Actions/actions";

import {
  Diva,
  DivError,
  PError,
  DivPError,
  Btn,
  DivBoton,
  DivID,
  DivFlex,
} from "../../styledComponents/form_styled";

function FormGeneral() {
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const [successful, setSuccessful] = useState("");

  useEffect(() => {
    dispatch(getAll_id(""));
  }, []);

  const GET = useSelector((state) => state.GET_IDS);
  const ACT = useSelector((state) => state.ACT);
  let [form, setForm] = useState({
    name: "",
    dificultad: "1",
    temporada: "Invierno",
    duracion: "30 min",
    countryId: [],
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
    let act = ACT.length > 0 && ACT[0]?.filter((act) => act.name === value);

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
    if (
      event.target.value >= 0 &&
      event.target.value <= 5 &&
      event.target.value !== "e"
    ) {
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
  const handlerChangeID = (event) => {
    console.log(event.target.value);
    let noserepite = form.countryId.find((id) => id === event.target.value);
    if (noserepite) {
      setError("Este pais ya contiente esta actividad");
    } else {
      setForm({ ...form, countryId: [...form.countryId, event.target.value] });
    }
  };
  const handler_Submit = (event) => {
    console.log(event.target.value);

    event.preventDefault();
    dispatch(postActivity({ ...form }));
    setForm({ ...form, countryId: [], name: "" });
    alert("Actividad creada con exito");
  };

  return (
    <form onSubmit={handler_Submit}>
      <DivError>
        <Diva>
          <label id="Name-act">Nombre</label>
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
          <option value={defaultValueSelect.minuto}>30 min</option>
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

      <Diva>
        <label>Añadir Paises </label>
        <select name="select" onChange={handlerChangeID}>
          {GET.length > 0 &&
            GET[0].map((element) => (
              <option key={element.id} value={element.id}>
                {element.name}
              </option>
            ))}
        </select>
      </Diva>
      <DivFlex>
        {form.countryId.map((ele) => (
          <DivID key={ele.id}>
            <p>{ele}</p>
          </DivID>
        ))}
      </DivFlex>
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

export default FormGeneral;
