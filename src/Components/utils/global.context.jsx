import { createContext } from "react";
import React, { useMemo, useReducer } from 'react';

export const ContextGlobal = createContext(undefined);
export const initialState = {theme: "", data: []}


const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_THEME':
      return { ...state, theme: action.payload };
    case 'SET_DATA':
      return { ...state, data: action.payload };
    default:
      return state;
  }
};



export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleTheme = () => {
    const newTheme = state.theme === "light" ? "dark" : "light";
    dispatch({ type: 'SET_THEME', payload: newTheme });
  };

  const setData = (newData) => {
    dispatch({ type: 'SET_DATA', payload: newData });
  };

  const contextData = useMemo(() => {
    return { theme: state.theme, toggleTheme: toggleTheme, data: state.data, setData: setData };
  }, [state.theme, state.data]);

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