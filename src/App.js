import React, { Component } from "react";
import MiComponente from "./MiComponente";

const App = () => {
  const reyes = [
    {
      nombre: "Atanagildo",
      reinado: 15,
      vacasComidas: 9,
    },
    {
      nombre: "Ervigio",
      reinado: 7,
      vacasComidas: 3,
    },
    {
      nombre: "Ataúlfo",
      reinado: 5,
      vacasComidas: 16,
    },
    {
      nombre: "Leovigildo",
      reinado: 18,
      vacasComidas: 3,
    },
    {
      nombre: "Sisebuto",
      reinado: 9,
      vacasComidas: 13,
    },
    {
      nombre: "Recesvinto",
      reinado: 19,
      vacasComidas: 11,
    },
    {
      nombre: "Teodorico",
      reinado: 33,
      vacasComidas: 12,
    },
  ];

  const url = "https://html6.es/img/rey_"
  const componentes = reyes.filter((rey) => rey.nombre.startsWith('E'))
  .map((rey) => (
    <MiComponente key={rey.nombre} nombre={rey.nombre} vacas={(rey.vacasComidas)*(rey.reinado)*365} años={rey.reinado} imagen = {`${url}${rey.nombre}.png`}  />
  ));

  console.log(componentes)

  return <div className="cardContainer">{componentes.length==0 ? "No hay reyes que empiecen con esa letra":componentes}</div>;
};

export default App;
