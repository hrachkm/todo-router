import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <App />
    {/*<React.StrictMode>
    </React.StrictMode>*/}
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/**
 * // - En este ejemplo vamos a implementar los high order components(HOC)

//-Primero creamos un componente normal y tiene que recibir props

function App (props) {
  // - Con las HOC vamos a hacer que se modifique el mensaje del h1
  return (
    <h1>{props.greeting}! {props.name}</h1>
  );
}

//Ahora crearemos nuestro HOC, por convencion los nombres de estos componentes empiezan por with
//seguido del tipo de inyeccion que vamos a realizar quedando algo asi: withGreeting.
//Como parametro le pasamos el componente que queremos realizar y luego lo retornamos con los cambios

function withGreeting(WrappedComponent) {
  //Podemos pasar otra funcion que realice cambios intermedios a nuestro componente antes de retornarlo, este paso es opcional
  return function WrappedComponentWithGreeting(greeting){
    // Retornamos otra funcion con el componente real
    return function Component(props) {
      return(
        <React.Fragment>
          <WrappedComponent {...props} greeting={greeting} />
          <p>Retornando el wrapped component</p>
        </React.Fragment>
      );
    }
  }
}

// Luego creamos una constante que se encaragara de recibir nuestro componente envuelto en HOC
// y le pasamos nuestro componete App.
const AppWithGreeting = withGreeting(App)('Hola'); //En el segundo parentesis pasamos el parametro que pide la funcion intermedia
 */
