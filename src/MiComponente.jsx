import React from "react";
import "./App.css";

function MiComponente({ nombre, vacas, años, imagen }) {
  const eliminar = (e) => {
    e.target.parentNode.remove();
  };

  return (
    <div className="caja" style={{ backgroundColor: "goldenrod" }}>
      <p>
        <span>{nombre}</span> ha comido {vacas} vacas en sus {años} años de
        reinado
      </p>
      <img src={imagen} alt="" />
      <button onClick={eliminar}>REMOVER</button>
    </div>
  );
}

export default MiComponente;
