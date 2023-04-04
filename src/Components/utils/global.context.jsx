import { createContext } from "react";
import React, { useState, useMemo } from 'react';

export const initialState = {theme: "", data: []}

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {


  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  const contextData = useMemo(() => {
    return { theme, toggleTheme };
  }, [theme]);

//revisar y relacionar con el boton del navbar SE DAÑO CON TODO EL TEMA DE COLOR

  return (
    <ContextGlobal.Provider value={contextData}>
      {children}
    </ContextGlobal.Provider>
  );
};
