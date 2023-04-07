import React from "react";
import {useContext } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const favList = JSON.parse(localStorage.getItem("favList")) || [];
  const { theme } = useContext(ContextGlobal);

  return (
    <>
      <h1 className={theme}>Dentists Favs</h1>
      <div className={`card-grid ${theme}`}>
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {favList.map((dentist) => (
          <Card
            key={dentist.id}
            id={dentist.id}
            name={dentist.name}
            username={dentist.username}
          />
        ))}
      </div>
    </>
  );
};

export default Favs;
