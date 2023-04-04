import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "../Components/Card";
import Detail from "./Detail";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const [dentist,setDentist] = useState([]);


  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setDentist(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <main className="">
      <div>
        <h1>Home</h1>
        {dentist.map((dentist) => (
          <div className="card-grid" key={dentist.id}>
            <Link to={'/detail/'+ dentist.id}> Ver detalles</Link>
            <Card name={dentist.name} username={dentist.username} id={dentist.id}/>
           
          </div>
        ))}
      </div>
    </main>
  );
};

export default Home;
