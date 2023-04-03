
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import {Route, Routes}  from 'react-router-dom';
import Home from "./Routes/Home";
import Dentist from "./Routes/Dentist";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs"
import Form from "./Components/Form";


function App() {
  return (
      <div className="App">
          <Navbar/>
          <Footer/>

          <Routes>
            <Route path='/' element ={<Home/>}/>
            <Route path='/dentista' element ={<Dentist/>}/>
            <Route path='/contacto' element ={<Contact/>}/>
            <Route path='/favoritos' element ={<Favs/>}/>

          </Routes>
          <Form/>
      </div>
  );
}

export default App;




// El routes es para las rutas de la navegacion cuando aparace /contacto/alumno etc
//me falta poner la ruta con id del dentista <Route path="/dentist/:id" component={DentistDetail} />
