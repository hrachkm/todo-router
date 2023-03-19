// Separamos la logica del hook en App.js en un modulo aparte
import React from "react";

export const useLocalStorage = (itemName, initialValue) => {

  //Aplicando reducers para simplificar el codigo
  const [state, dispatch] = React.useReducer(reducer, initialState({ initialValue }))

  const {
    loading,
    error,
    item,
    synchronize
  } = state;

  // - Utilizando actionsCreator
  const onError = (error) => dispatch({ type: actionTypes.error, payload: error })
  const onSuccess = (item) => dispatch({ type: actionTypes.success, payload: item })
  const onSave = (item) => dispatch({ type: actionTypes.save, payload: item })
  const onSynchronize = (item) => dispatch({ type: actionTypes.synchronize })

  // Este estado nos permitira validad si nuestras ventanas o pestanas estan debidamente actualizados
  //const [synchronize, setSynchronize] = React.useState(true);*/

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
        onSuccess(parsedItem);
      } catch (error) {
        onError(error)
        //setError(error);
      }
    }, 3000);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [synchronize]);// - ahora este efecto se aplicara cada vez que ocurran cambios en el estado synchronize

  const saveItem = (newItem) => {
    try {
      const stringItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringItem);
      onSave(newItem);
    } catch (error) {
      onError(error);
    }
  };

  const synchronizeApp = () => {
    onSynchronize()
  }

  //Hay una convencion de react que dice si un hook retorna dos elementos (un estado y su funcion de actualizacion)
  //se recomienda utilizar un arreglo de 2 espacios, pero si retorna mas de dos elementos, entonces lo mejor es retornar
  //un objeto

  return { item, saveItem, loading, error, synchronizeApp };
};

const initialState = ({ initialValue }) => ({
  loading: true,
  error: false,
  synchronize: true,
  item: initialValue,
})

const actionTypes = {
  error: 'ERROR',
  success: 'SUCCESS',
  save: 'SAVE',
  synchronize: 'SYNCHRONIZE'
}

const reducerObject = (state, payload) => ({
  [actionTypes.error]: {
    ...state,
    error: true
  },
  [actionTypes.success]: {
    ...state,
    error: false,
    synchronize: true,
    loading: false,
    item: payload
  },
  [actionTypes.save]: {
    ...state,
    item: payload
  },
  [actionTypes.synchronize]: {
    ...state,
    loading: true,
    synchronize: false
  }
});

const reducer = (state, action) => {
  return reducerObject(state, action.payload)[action.type] || state;
};