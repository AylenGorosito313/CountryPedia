import "./App.css";
require("dotenv").config();
import Home from "./components/Home";
import { Route } from "react-router-dom";
import Nav from "./components/Nav";
import Presentacion from "./components/controllers/PresentacionC";
import TabsCards from "../src/components/TabsCards";
import TabsCardsGeneral from "./components/Formularios/TabsCardsGeneral";
import LoginForm from "./LoginForm";
import axios from "axios";
const {PORT_HOST} = process.env;
axios.defaults.baseURL = PORT_HOST;

function App() {
  return (
    <>
      <Route exact path="/">
        <Presentacion />
      </Route>
      <Route exact path="/pruebas">
        <LoginForm />
      </Route>
      <Route path="/">
        <Nav />
      </Route>
      <Route exact path="/actividades/:id">
        <TabsCards />
      </Route>
      <Route exact path="/home">
        <Home />
      </Route>
      <Route exact path="/actividades">
        <TabsCardsGeneral />
      </Route>
    </>
  );
}

export default App;
