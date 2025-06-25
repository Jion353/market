import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import products from '../../data/products.json';
import { useCart } from '../CartContext';
import './ProductDetail.scss';

const SIZES = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find(p => String(p.id) === String(id));
  const [selectedSize, setSelectedSize] = useState('');

  if (!product) {
    return (
      <div className="product-detail">
        <h2>Товар не знайдено</h2>
        <Link to="/">Повернутися до каталогу</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Оберіть розмір!');
      return;
    }
    addToCart({ ...product, size: selectedSize });
  };

  return (
    <div className="product-detail">
      <Link to="/" className="back-link">← До каталогу</Link>
      <div className="product-detail-content">
        <img src={product.image} alt={product.name} className="product-detail-image" />
        <div className="product-detail-info">
          <h2>{product.name}</h2>
          <div className="product-detail-type">{product.type}</div>
          <div className="product-detail-desc">{product.description}</div>
          <div className="product-detail-price">{product.price} грн</div>
          <div className="product-detail-sizes">
            <span>Розмір:</span>
            <div className="sizes-list">
              {SIZES.map(size => (
                <button
                  key={size}
                  className={`size-btn${selectedSize === size ? ' selected' : ''}`}
                  onClick={() => setSelectedSize(size)}
                  type="button"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          <button className="product-detail-btn" onClick={handleAddToCart}>
            Додати до кошика
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;