import React, { useContext } from "react";
import { FiShoppingBag } from "react-icons/fi";
import { CartContext } from "../../Context/CartContext";

import { Link } from "react-router-dom";

function Product({ product }) {
  const { dispatch } = useContext(CartContext);

  return (
    <div className="col mb-4">
      <div className="card rounded-0">
        <img src={product.img} className="card-img-top" alt="Not Found" height="220" />
        <div className="card-body">
          <h6 className="card-title m-0">{product.name}</h6>
          <small className="card-text text-secondary">Location: {product.location}</small>
          <p className="price text-primary my-3">${product.price}.00</p>
          <div className="actions d-flex justify-content-between">
            <Link to="/" type="button" className="preview btn btn-outline-info rounded-0">
              Preview
            </Link>
            <button type="button" className="btn btn-outline-danger rounded-0" onClick={() => dispatch({ type: "ADD_TO_CART", id: product.id, product })}>
              <FiShoppingBag className="d-flex align-items-center" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
