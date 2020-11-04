import React, { Fragment, useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { FiPlus, FiMinus, FiTrash2 } from "react-icons/fi";

import "./Cart.scss";

const Cart = () => {
  const { shoppingCart, dispatch } = useContext(CartContext);
  return (
    <Fragment>
      <div className="empty container mt">
        <h2 className="mb-5 text-info">Shopping Cart</h2>
        {shoppingCart.length > 0 ? (
          shoppingCart.map((cart) => (
            <div className="cart-contain d-flex justify-content-between align-items-center mb-5" key={cart.id}>
              <div className="left d-flex justify-content-between align-items-center">
                <img className="cart-img" src={cart.img} alt="Not Found" />
                <div className="info d-flex flex-column ml-4">
                  <h6 className="card-title m-0">{cart.name}</h6>
                  <small className="card-text text-secondary">Location: {cart.location}</small>
                </div>
              </div>
              <span className="price text-muted">${cart.price}.00</span>
              <div className="qty d-flex justify-content-between align-items-center">
                <button
                  type="button"
                  className="butt btn btn-outline-info rounded-0"
                  onClick={() => dispatch({ type: "INC", id: cart.id, cart })}>
                  <FiPlus className="d-flex align-items-center" />
                </button>
                <span className="cart-qty">{cart.qty}</span>
                <button
                  type="button"
                  className="butt btn btn-outline-info rounded-0"
                  onClick={() => dispatch({ type: "DEC", id: cart.id, cart })}>
                  <FiMinus className="d-flex align-items-center" />
                </button>
              </div>
              <span className="price">${cart.price * cart.qty}.00</span>
              <button
                type="button"
                className="butt btn btn-outline-danger rounded-0"
                onClick={() => dispatch({ type: "DEL", id: cart.id, cart })}>
                <FiTrash2 className="d-flex align-items-center" />
              </button>
            </div>
          ))
        ) : (
          <img className="d-flex m-auto" src="./imgs/empty-cart.png" alt="Not Found" />
        )}
      </div>
    </Fragment>
  );
};

export default Cart;
