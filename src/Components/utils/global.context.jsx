import { createContext } from "react";
import React, { useState, useMemo } from 'react';

export const initialState = {theme: "", data: []}

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {


  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [theme, setTheme] = useState("light");

  //toggleTheme cambia el tema de la aplicación entre "light" y "dark".
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  const contextData = useMemo(() => {
    return { theme, toggleTheme };
  }, [theme]);



  return (
    <ContextGlobal.Provider value={contextData}>
      {children}
    </ContextGlobal.Provider>
  );
};


//useMemo te permite guardar el resultado de una función y volver a utilizarlo solo si los parámetros que recibe la función han cambiado, evitando así que la función se ejecute de nuevo en cada renderizado.
//El ContextProvider es responsable de proveer el Contexto creado con el método createContext() a todos los componentes que lo necesitan. 
// También permite definir el valor inicial del Contexto y actualizar ese valor en el futuro a través de la función setState.
//Resumne:Forma de compartir información entre componente.