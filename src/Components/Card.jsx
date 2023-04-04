import React, { useState } from "react";


const Card = ({name,username,id}) => {
  
  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
  };

  return (
    <div className="card">
      {/* En cada card deberan mostrar en name - username y el id */}

      <h1>{name}</h1>
      <ul style={{ listStyle: "none" }}>
        <li>Id: {id}</li>
        <li>User:{username}</li>
      </ul>

      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}

      <button onClick={addFav} className="favButton">
        Add ⭐
      </button>
    </div>
  );
};

export default Card;

