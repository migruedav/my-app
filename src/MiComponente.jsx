import React from "react";
import './App.css'

function MiComponente({nombre,imagen,precio,color}) {
  return (
    <div className="caja" style={{backgroundColor:color}}>
        <h1>{nombre}</h1>
        <img src={imagen} alt="" />
        <p>Precio:</p>
        <p>{precio}</p>
        <button>Comprar</button>
    </div>
  );
}


export default MiComponente;
