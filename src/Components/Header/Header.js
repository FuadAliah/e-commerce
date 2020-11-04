import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import { CartContext } from "../../Context/CartContext";
import "./Header.scss";

function Header() {
  const { qty } = useContext(CartContext);
  return (
    <nav className="navbar navbar-light py-4">
      <div className="container">
        <Link to="/">
          <img src={process.env.PUBLIC_URL + "logo.svg"} alt="logo" />
        </Link>
        <Link className="cart-num d-flex align-items-center" to="/cart">
          <FiShoppingBag />
          <span>{qty}</span>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
