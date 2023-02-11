import React from 'react';

import './TodoCounter.css';

export function TodoCounter ({totalTodos, completedTodos, loading}) {

  //const { completedTodos, totalTodos } = React.useContext(TodoContext)
  // Para definir estilos de un elemento, lo podemos hacer de varias formas
  // La primera es utilizando estilos en linea pero con el metodo de react que consiste en
  // Definirlos directamente en el elemento pero pasandole un objeto al atributo style como se muestra a continuacion
  const styles = {
    color: 'red',
    backgroundColor: 'aquamarine',
  }
  return (
    <>
      {
        // En react el property binding se realize con el uso de llaves simples en este caso el atrbuto style recibe estrictamente un objeto
        // con los estilos definidos por lo que debes utilizar doble llave para que funcione.
        <h2 style={styles}>Completaste {completedTodos} de {totalTodos} todos</h2>
      }
      <h1 className='title'>Your tasks</h1>
      {
        //Otra forma de Hacerlo es utilizando una hoja de estilos importada y otorgando una clase al elemento
        //pero utilizando el atributo className
        <h2 className={`subtitle ${!!loading && 'loading'}`}>Completaste {completedTodos} de {totalTodos} todos</h2>
      }
    </>
  )
}