// Separamos la logica del hook en App.js en un modulo aparte
import React from "react";

export const useLocalStorage = (itemName, initialValue) => {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [item, setItem] = React.useState(initialValue);

  // El hook useEffect evita que una parte del codigo se ejectute cada vez que el componente se renderiza
  // solo ejecutara el codigo si se cumplen ciertas condiciones
  // se ejecuta justo antes de comenzar la renderizacion del componente
  // si se quiere ejecutar codigo cuando haya renderizado, se debe utilizar useLayoutEffect.
  React.useEffect(() => {
    //-Revisar bug con esta funcion
    setTimeout(() => {
      try {
        // - Crear persistencia de datos con localStorage
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }
        setItem(parsedItem);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    }, 1000);
  });

  const saveItem = (newItem) => {
    const stringItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringItem);
    setItem(newItem);
  };

  //Hay una convencion de react que dice si un hook retorna dos elementos (un estado y su funcion de actualizacion)
  //se recomienda utilizar un arreglo de 2 espacios, pero si retorna mas de dos elementos, entonces lo mejor es retornar
  //un objeto

  return { item, saveItem, loading, error };
};
