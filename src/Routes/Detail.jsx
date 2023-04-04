import React, { useEffect, useState, useParams } from "react";


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const [dentist, setDentist] = useState({});
  const {id} = useParams();
  <h4>Hola</h4>

  const url = 'https://jsonplaceholder.typicode.com/users/'+ id

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setDentist(data));
  }, [id]);

  //lo primero que me traigo es la rta del fetch y lo segundo es la informacion procesada en formato json
  //data es lo que se retorna del response.json
  //useEffect se utiliza para ejecutar código en respuesta a cambios en el estado de un componente o en la llegada de nuevas propiedades.
  // después del useState va vacío el objeto {} porque si le pongo null no lo toma

  if (!dentist) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1>Detail Dentist id {dentist.id}</h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
     
      <div key={dentist.id} className="card"></div>
      <img
        src="images/doctor.jpg"
        alt=""
        style={{ height: "50%", width: "75%" }}
      />

      <ul style={{ listStyle: "none" }}>
        <li> {dentist.name}</li>
        <li>Id: {dentist.id}</li>
        <li>{dentist.username}</li>
        <li>Phone: {dentist.phone}</li>
        <li>Website: {dentist.website}</li>
      </ul>
     
    </>
  );
};

export default Detail;
