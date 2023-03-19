// Un contexto en React se utiliza para implementar una estructura que contenga las propiedades de forma global
// y asi evitar que se transmitan de componente en componente.

//Para crear un contexo usaremos create context de la libreria de React

import React from "react";
import { useLocalStorage } from "../useLocalStorage";

export const TodoContext = React.createContext();

export function TodoProvider(props) {
  // - Esta funcion va a actuar como componente y va a recibir props

  const {
    item: todos,
    saveItem: saveTodos,
    synchronizeApp: synchronizeTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V2", []);

  // - Filtrar los todos dependiendo del valor contenido en search value
  const [searchValue, setSearchValue] = React.useState("");

  const completedTodos = todos.filter((todo) => todo.done === true).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!(searchValue.length > 0)) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      const searched = todoText.includes(searchText);
      return searched;
    });
  }

  /*React.useEffect(() => {
    console.log("Just before render");
  }, []);*/ // - El segundo argumento de useEffect es un arrecglo que indica las condiciones bajo las cuales debe ejecutarse
  // - de lo contrario se va a ejecutar cada vez que se realice un cambio en el componente
  // - el arreglo vacio indica que el useEffect solo se va a ejecutar una vez y no va a reaccionar con cualquier cambio
  // - pero se puede hacer que el codigo se ejecute al detectar cambios en una propiedad o variable, en este caso totalTodos
  // - si se agrega o elimina una tarea este codigo se ejecutara.

  const addTodo = (text) => {
    const id = newTodoId(todos);
    const newTodos = [...todos];
    newTodos.push({
      id,
      text,
      done: false,
    });
    saveTodos(newTodos);
  };

  const getTodo = (id) => {
    const todoIndex = todos.findIndex(todo => todo.id === id);
    return todos[todoIndex];
  }

  const editTodo = (id, newText) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id);
    const newTodos = [...todos];
    newTodos[todoIndex].text = newText;
    saveTodos(newTodos);
  }

  const completeTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id);
    //Cuando se va a modificar el valor de un elemento en un estado, debemos extraer el valor en una variable externa, hacer el cambio
    //y colocarlo nuevamente en el estado, de lo contrario React no funcionara correctamete y no realizara los re renders que ejecuta
    //cuando se hacen cambios
    const newTodos = [...todos];
    newTodos[todoIndex].done = true;
    saveTodos(newTodos);
  };

  const removeTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id);
    //Cuando se va a modificar el valor de un elemento en un estado, debemos extraer el valor en una variable externa, hacer el cambio
    //y colocarlo nuevamente en el estado, de lo contrario React no funcionara correctamete y no realizara los re renders que ejecuta
    //cuando se hacen cambios
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return (
    // En nuestro provider vamos a envolver nuestro componente app y asi indicarle que esta dentro de un contexto
    // y vamos a utilizar value para indicar el estado que se va a compartir en todos los componentes
    <TodoContext.Provider
      value={{
        totalTodos,
        completedTodos,
        searchValue,
        searchedTodos,
        loading,
        error,
        setSearchValue,
        addTodo,
        editTodo,
        getTodo,
        completeTodo,
        removeTodo,
        synchronizeTodos,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
  // En esta version se van a trabajar los todos con id, por esto creamos un generador de ids para que retorne el valor maximo
  // y le sume 1
  function newTodoId(todos){
    const todoIds =  todos.map(todo => todo.id);
    const idMax = Math.max(0, ...todoIds);
    return idMax + 1;
  }
}

// Y el consumer es para suministrar informacion a los componentes de un estado compartido
<TodoContext.Consumer></TodoContext.Consumer>;
