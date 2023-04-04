
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import {Route, Routes}  from 'react-router-dom';
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";


function App() {
  return (
      <div className="App">
          <Navbar/>
          <Footer/>

          <Routes>
            <Route path='/' element ={<Home/>}/>
            <Route path='/detail/:id' element ={<Detail/>}/>
            <Route path='/contact' element ={<Contact/>}/>
            <Route path='/fav' element ={<Favs/>}/>
          </Routes>
      
         
      </div>
  );
}

export default App;




// El routes es para las rutas de la navegacion cuando aparace /contacto/alumno etc
//me falta poner la ruta con id del dentista <Route path="/dentist/:id" component={DentistDetail} />
