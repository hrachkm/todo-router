import React from 'react';
import './TodoSearch.css'

//Para enviar los cambios de estado de un componente hijo a un componente padre, lo que debemos hacer es pasar la
//variable y la funcion que cambia el estado por medio de props, y una vez hechos los cambios estos automaticamente
//se mandan al componente padre que a su vez se los envia a los otros hijos.
export function TodoSearch({searchValue, setSearchValue, loading}) {
  // - const {searchValue, setSearchValue} = React.useContext(TodoContext);
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value)
  }
  return (
    <input
      className='input-search'
      placeholder='Onion'
      value={searchValue}
      onChange={onSearchValueChange}
      disabled={loading}
    />
  );
}