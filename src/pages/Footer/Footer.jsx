import React from 'react';
import './Footer.scss';

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-section">
        <h4>Контакти</h4>
        <p>Телефон: <a href="tel:+380991234567">+38 (099) 123-45-67</a></p>
        <p>Email: <a href="mailto:info@shop.com">info@shop.com</a></p>
      </div>
      <div className="footer-section">
        <h4>Ми в соцмережах</h4>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a> |{" "}
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
      </div>
      <div className="footer-section">
        <h4>Інформація</h4>
        <p>Доставка та оплата</p>
        <p>Повернення</p>
        <p>Про магазин</p>
      </div>
    </div>
    <div className="footer-bottom">
      © {new Date().getFullYear()} Магазин верхнього одягу. Всі права захищено.
    </div>
  </footer>
);

export default Footer;