import React from "react";

export function TodoHeader(value) {
  //Cuando recibimos mas de un componente por children, este se convierte en un array
  //y cuando no le pasamos ningun elemento se transforma en boolean
  //Esto se soluciona utilizando React.Children con su metodo toArray.

  return (
    <header>
      {
        //Creamos un clone de la prop children utilizando React clone element
        //A este clon le pasamos la propiedad loading
        React.Children.toArray(value.children).map((child) =>
          React.cloneElement(child, { loading: value.loading })
        )
      }
    </header>
  );
}
