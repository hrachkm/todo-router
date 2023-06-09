import React from "react";
import ReactDOM from "react-dom";

import './Modal.css';

export function Modal({children}) {
  //Creamos nuestro portal con React dom
  return ReactDOM.createPortal(
    <div className="ModalBackground">
      <div className="modal-content">
        {children}
      </div>
    </div>,
    document.getElementById('modal')
  );
}