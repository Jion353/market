import React from 'react';
import { useCart } from '../CartContext';
import './Cart.scss';

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const handlePay = () => {
    alert('Дякуємо за покупку! (Імітація оплати)');
    clearCart();
  };

  return (
    <div className="cart-page">
      <h2>Кошик</h2>
      {cart.length === 0 ? (
        <p>Кошик порожній.</p>
      ) : (
        <>
          <ul className="cart-list">
            {cart.map(item => (
              <li key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div>
                  <div>{item.name}</div>
                  <div>Кількість: {item.qty}</div>
                  <div>Ціна: {item.price} грн</div>
                  <button onClick={() => removeFromCart(item.id)}>Видалити</button>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <b>Всього: {total} грн</b>
          </div>
          <button className="cart-clear" onClick={clearCart}>Очистити кошик</button>
          <button className="cart-pay" onClick={handlePay}>Сплатити</button>
        </>
      )}
    </div>
  );
};

export default Cart;