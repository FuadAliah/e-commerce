import React, { useContext, Fragment } from "react";
import { ProductsContext } from "../../Context/ProductsContext";
import Carusel from "../Carusel/Carusel";
import Product from "../Product/Product";

import "./Products.scss";

const Products = () => {
  const { products } = useContext(ProductsContext);

  return (
    <Fragment>
      <Carusel />
      <div className="container mt-5">
        <div className="products row row-cols-1 row-cols-md-4">
          {products.map(product => (
            <Product product={product} key={product.id} />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Products;
