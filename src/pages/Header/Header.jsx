import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../CartContext";
import "./Header.scss";

const Header = () => {
  const { cart } = useCart();
  const count = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <header className="header">
      <div className="header-inner">
        <div className="header-left">
          <Link to="/" className="header-logo">
            FrostyStyle
          </Link>
        </div>
        <div className="header-right">
          <Link to="/cart" className="header-cart">
            🛒 Кошик <span className="cart-count">{count}</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
