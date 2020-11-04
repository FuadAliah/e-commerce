import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ProductsContext = createContext();

const ProductsContextProvider = (props) => {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:3000/data");
      setProduct(result.data);
    };
    fetchData();
  }, [products]);

  return <ProductsContext.Provider value={{ products: [...products] }}>{props.children}</ProductsContext.Provider>;
};

export default ProductsContextProvider;
