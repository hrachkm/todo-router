import React from "react";

export function useStorageListener(synchronize) {
  // - Creamos un estado que capture los cambios realizados entre pestanas
  const [storageChange, setStorageChange] = React.useState(false);

  window.addEventListener('storage', (change) => {
    // validamos que el elemento de localstorage a validar sea donde estamos guardando nuestros todos
    if(change.key === 'TODOS_V1'){
      setStorageChange(true);
    }
  });

  const toggleShow = () => {
    synchronize()
    setStorageChange(false);
  }

  //Creamos una propiedad show para capturar el cambio de estado
  return {
    show: storageChange,
    toggleShow
  }
}
