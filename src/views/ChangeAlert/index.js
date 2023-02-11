// - Vamos a usar este componente para manipular el evento storage
/**Esto nos permitira evitar conflictos cuando el usuario tenga el mismo componente cargado
 * en varias pestanas y asi cuando se realicen cambios en una pestana, los mismos se veran
 * reflejados en la otra
 */
import React from "react";
import { useStorageListener } from "./useStorageListener";

import './ChangeAlert.css'

export function ChangeAlert({synchronize}) {

  const { show, toggleShow } = useStorageListener(synchronize);

  if(show){
    return (
      <div className="alert-container">
        <div className="alert-content">
          <div className="alert-text">
            <p className="text-message">Cambios aqui</p>
          </div>
          <div className="alert-actions">
            <button className="btn-reload" onClick={toggleShow}>Recargar pagina</button>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

// - export const ChangeAlertWithStorageListener = useStorageListener(ChangeAlert);

