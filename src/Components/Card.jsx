import React, { useState, useContext } from "react";
import { ContextGlobal } from "../Components/utils/global.context";


const Card = ({ name, username, id }) => {
  const { setData } = useContext(ContextGlobal);
  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage

    // Obtener la list de fav del localStorage. Parce es el invers de stringify
    const favList = JSON.parse(localStorage.getItem("favList")) || [];

    // Crear un objet con la información de la card
    const cardData = { name, username, id };

    // Agrega el objet a la lista de fav
    favList.push(cardData);

    // Guardar la lista de favoritos actualizada en el localStorage el stringi para pasar como txt plano para poder ser interpretado
    localStorage.setItem("favList", JSON.stringify(favList));
    
    setData(favList);
  
  };

  return (
    
    <div className="card">
      {/* En cada card deberan mostrar en name - username y el id */}

      <img
        src="images/doctor.jpg"
        alt=""
        style={{ height: "50%", width: "75%" }}
      />
      <h1 style={{fontSize: 20}}>{name}</h1>

      <ul style={{ listStyle: "none" }}>
        <li>Id:  {id}</li>
        <li>User: {username}</li>
      </ul>

      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}


      <button className="favButton"
        onClick={(e) => {
          e.preventDefault();
          addFav();
        }}
      >
        Add ⭐
      </button>
      {/* El e.stop es para que no se sobreescriba la ruta establecida por el componente Link que viene de Home*/}
      </div>
     
    
  );
};

export default Card;
