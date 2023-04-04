import React, { useContext} from 'react';
import { Link } from 'react-router-dom'
import { ContextGlobal } from './utils/global.context'; 

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ContextGlobal);

  return (
    <nav className={theme}>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <Link to='/'><h3>Home</h3></Link>
      <Link to='/detail/:id'><h3>Dentist</h3></Link>
      <Link to='/contact'><h3>Contact</h3></Link>
      <Link to='/fav'><h3>Fav</h3></Link>
      
      

      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      

      <button onClick={toggleTheme}>Change theme</button>

    </nav>
  )
}

export default Navbar