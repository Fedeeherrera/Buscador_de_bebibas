import { useState, useEffect, createContext } from "react";
import axios from "axios";

const CategoriasContext = createContext();

const CategoriasProvider = ({ children }) => {
  const [categorias, setCategorias] = useState([]);

  const obtenerCategoria = async () => {
    try {
      const URL = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";
      const { data } = await axios(URL);
      setCategorias(data.drinks);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    obtenerCategoria();
  }, []);

  return (
    <CategoriasContext.Provider value={{categorias}}>
      {children}
    </CategoriasContext.Provider>
  );
};

export { CategoriasProvider };

export default CategoriasContext;
