import { useState, useEffect,useContext } from "react";
import { Link } from "react-router-dom";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const [dentist,setDentist] = useState([]);
  const { theme } = useContext(ContextGlobal);
  
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setDentist(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <main className={theme === "dark" ? "dark" : "light"}>
      <div>
        <h1>Home</h1>
        {dentist.map((dentist) => (
          <div className="card-grid" key={dentist.id}>
            <Link to={"/detail/" + dentist.id}>
              <Card
                name={dentist.name}
                username={dentist.username}
                id={dentist.id}
                
              />
            </Link>
            
          </div>
        ))}
      </div>
    </main>
  );
};

export default Home;
