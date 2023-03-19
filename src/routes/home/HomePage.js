import React from "react";
import { TodoProvider } from "../../context/Todo/index"; // - Importamos nuestro provider del archivo context
import { HomeUI } from "./HomePageUI";

import "./HomePage.css";

//Componente real

export function Home() {
  return (
    <TodoProvider>
      {
        // Enovolvemos nuestra aplicacion en nuestro provider para que pueda utilizar los componentes globales
      }
      <HomeUI />
    </TodoProvider>
  );
}