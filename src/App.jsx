
import { ContextProvider } from "./Components/utils/global.context";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import {Route, Routes}  from 'react-router-dom';
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";
import React from "react";


function App() {

      // Funtion para borrar el contenido del localStorage y no se quede guardado todo siempre
      const clearLocalStorageOnLoad = () => {
      // Borra el item específico (favList) del localStorage utilizando localStorage.removeItem()
      localStorage.removeItem("favList");
  
    };
    // Se ejecuta la función clearLocalStorageOnLoad una sola 
    //vez cuando el componente se monte en el DOM,ya que no hay dependencias que 
    //cambien para activar el efecto nuevamente al
    //estar [] vacío (indica que no hay dependencia).
    React.useEffect(() => {
      clearLocalStorageOnLoad();
    }, []);

  return (
  
      <div className="App">
        <ContextProvider>
          <Navbar/>
          <Footer/>
          <Routes>
            <Route path='/' element ={<Home/>}/>
            <Route path='/detail/:id' element ={<Detail/>}/>
            <Route path='/contact' element ={<Contact/>}/>
            <Route path='/fav' element ={<Favs/>}/>
          </Routes>

          
          </ContextProvider>   
      </div>
      
  );
}

export default App;


// El routes es para las rutas de la navegacion cuando aparace /contacto/alumno etc
