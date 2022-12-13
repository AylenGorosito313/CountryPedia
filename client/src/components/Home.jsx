import {
  ConteinerCard,
  DivPage,
  BtnPage,
  TituloCardIndex,
  TituloCardIndex1,
} from "../styledComponents/landings";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContryCards from "./Cards";
import { getAll_Countries, getById } from "../Redux/Actions/actions";
import Model from "./Model";
import Buscador from "./SearchBar";
import Izq from "../svg/izq";
import Right from "../svg/right";

function Home() {
  const countries = useSelector((state) => state.countries);

  const [index, setIndex] = useState(0);

  const handleNext = () => {
    if (index < countries.length) {
      setIndex(index + 1);
    }
  };

  const handleBack = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const handlePage = (value) => {
    if (value > 0 || value < countries.length) {
      setIndex(value);
    }
  };

  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    dispatch(getAll_Countries(""));
  }, []);

  useEffect(() => {
    setIndex(0)
  }, [countries]);


  const handleOpen = (id) => {
    dispatch(getById(id));
    setOpen(true);
  };

  return (
    <>
      <div>
        <Buscador />
      </div>

      <Model open={open} setOpen={setOpen} />

      <ConteinerCard>
        {countries.length > 0 &&
          countries[index]?.map((country) => {
            return (
              <ContryCards
                key={country.name}
                onClick={handleOpen}
                name={country.name}
                capital={country.capital}
                continente={country.continente}
                area={country.area}
                poblacion={country.poblacion}
                id={country.id}
                flags={country.flags}
              />
            );
          })}
      </ConteinerCard>
      <DivPage>
        <BtnPage onClick={handleBack} onChange={handlePage}>
          <Izq />
        </BtnPage>

        <TituloCardIndex>{index}</TituloCardIndex>
        <TituloCardIndex1>{index + 1}</TituloCardIndex1>

        <BtnPage onClick={handleNext}>
          <Right />
        </BtnPage>
      </DivPage>
    </>
  );
}

export default Home;
