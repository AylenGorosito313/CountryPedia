// import { render, screen, waitFor, within } from "@testing-library/react";
// import FormGeneral from "./components/Formularios/FormGeneral";
// import { Provider } from "react-redux";
// import store from "../src/Redux/storeIndex";
// import user from "@testing-library/user-event";
// import userEvent from "@testing-library/user-event";
// import axios from 'axios'
import LoginForm from "./LoginForm";

// test('login form submits correct credentials', () => {
//   const { getByLabelText, getByText } = render(<LoginForm   = onSubmit/>)

//   // simulate filling out the form
//   fireEvent.change(getByLabelText('Username'), { target: { value: 'testuser' } })
//   fireEvent.change(getByLabelText('Password'), { target: { value: 'password' } })

//   // simulate submitting the form
//   fireEvent.click(getByText('Login'))

//   // assert that the form was submitted with the correct credentials
//   expect(login).toHaveBeenCalledWith('testuser', 'password')
// })

import React from "react";
import { render, fireEvent } from "@testing-library/react";

test("form is submitted correctly", () => {
  const onSubmit = jest.fn();
  const { getByLabelText, getByText } = render(<LoginForm onSubmit={onSubmit} />);

  const nameInput = getByLabelText("Username:");
  fireEvent.change(nameInput, { target: { value: "John Doe" } });

  const emailInput = getByLabelText("Password:");
  fireEvent.change(emailInput, { target: { value: "johndoe@example.com" } });

  const submitButton = getByText("Login");
  fireEvent.click(submitButton);
  
  expect(onSubmit).toHaveBeenCalledTimes(1);
  expect(onSubmit).toHaveBeenCalledWith({
    name: "John Doe",
    email: "johndoe@example.com",
  });
});

// jest.mock('axios', ()=>({
//   ...jest.requireActual("axios"),
//   post: jest.fn()
// }));

// describe('Form de posteo de activdad', () => {
//   const onSubmit = jest.fn()
//   beforeEach(() => {
//     onSubmit.mockClear()
//    render(<Provider store={store}><FormGeneral onSubmit={onSubmit}/></Provider>);
//   });

//   test('Deberian existir tres inputs  ', () => {
//     expect(document.getElementById('Name')).toBeInTheDocument();
//     expect(document.getElementById('dificultad')).toBeInTheDocument();
//     expect(document.getElementById('duracion')).toBeInTheDocument();

//   });

//   test('Deberian existir input tipo submit ', () => {
//     expect(document.getElementById("btn")).toBeInTheDocument();

//   });

//   test('Deberian existir dos select', () => {
//     const selectElement = screen.getByDisplayValue('Invierno')
//     expect(selectElement ).toBeInTheDocument();

//     const selectElementD= screen.getByDisplayValue('30 min')
//     expect(selectElementD).toBeInTheDocument();

//   });

// })

// describe("Deberia postear una  activdad", () => {

//   test("Probando", async () => {
//     let DropdownDura = screen.getByRole("combobox", { name: /Duracion/i });
//     let DropdownDif = screen.getByRole("spinbutton", { name: /Dificultad/i });
//     let DropdownTemp = screen.getByRole("combobox", { name: /Temporada/i });
//     let DropdownPais = screen.getByRole("combobox", { name: /Añadir Pais/i });

//     user.type(Nameinput(), "Bailar");
//     user.type(DropdownDif, "1");
//     user.selectOptions(
//       DropdownDura,
//       within(DropdownDura).getByRole("option", { name: "30 min" })
//     );

//     user.selectOptions(
//       DropdownTemp,
//       within(DropdownTemp).getByRole("option", { name: "Verano" })
//     );
//     user.selectOptions(
//       DropdownPais,
//       within(DropdownPais).getByRole("option", { name: "Montenegro" })
//     );
//     user.click(
//       screen.getByRole("button", {
//         name: /submit/i,
//       })
//     );

//     // await waitFor(() => {
//     //   expect(onSubmit).toHaveBeenCalledTimes(1);
//     // });

//     // expect(onSubmit).toHaveBeenCalledWith({
//     //   lazy: true,
//     // });
//   });
// });

// function Nameinput() {
//   return screen.getByRole("textbox", { name: /nombre/i });
// }

// function Dificultadinput() {
//   return screen.getByDisplayValue(/1/i);
// }
