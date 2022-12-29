import React from "react";
import { TodoProvider } from "../context/Todo/index"; // - Importamos nuestro provider del archivo context
import { AppUI } from "./App.UI";

import "./App.css";

function App() {
  return (
    <TodoProvider>
      {/*Enovolvemos nuestra aplicacion en nuestro provider para que pueda utilizar los componentes globales*/}
      <AppUI />
    </TodoProvider>
  );
}

export default App;
