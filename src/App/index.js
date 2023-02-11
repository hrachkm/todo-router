import React from "react";
import { TodoProvider } from "../context/Todo/index"; // - Importamos nuestro provider del archivo context
import { AppUI } from "./App.UI";

import "./App.css";

//Componente real

function App() {
  return (
    <TodoProvider>
      {
        // Enovolvemos nuestra aplicacion en nuestro provider para que pueda utilizar los componentes globales
      }
      <AppUI />
    </TodoProvider>
  );
}

export default App;

//Vamos a crear componentes falsos para demostrar el uso de react composition

/*

function TodoHeader({children}) {
  return (
    <header>
      {children}
    </header>
  );
}

function TodoList({children}) {
  return (
    <div className="list-container">
      {children}
    </div>
  );
}

function TodoCounter() {
  return (
    <p>TodoCounter</p>
  );
}

function TodoSearch() {
  return (
    <p>TodoSearch</p>
  );
}

function TodoItems({state}) {
  return(
    <p>TodoItem: {state}</p>
  );
}

function App() {
  const [state, setState] = React.useState('Hola React');
  return (
    <React.Fragment>
      <TodoHeader>
        <React.Fragment>
          <TodoCounter></TodoCounter>
          <TodoSearch></TodoSearch>
        </React.Fragment>
      </TodoHeader>

      <TodoList>
        <React.Fragment>
          {
            // - Si nos damos cuenta con el composition podemos pasar directamente las propiedades al componente que las
            // - Necesita sin tener que hacer un recorrido de componente padre - hijo - nieto
          }
          <TodoItems state={state}/>
        </React.Fragment>
      </TodoList>
    </React.Fragment>
  )
}*/
