import React from 'react';
import './ProductCard.scss';
import { useCart } from '../CartContext';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <Link to={product.url} className="product-link-img">
        <img src={product.image} alt={product.name} className="product-image" />
      </Link>
      <h3 className="product-name">
        <Link to={product.url} className="product-link-title">
          {product.name}
        </Link>
      </h3>
      <p className="product-desc">{product.description}</p>
      <div className="product-bottom">
        <span className="product-price">{product.price} грн</span>
        <button className="product-btn" onClick={() => addToCart(product)}>
          До кошика
        </button>
      </div>
    </div>
  );
};

export default ProductCard;