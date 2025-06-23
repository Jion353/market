import React from 'react';
import Header from './pages/Header/Header';
import Home from './pages/Home/Home';
import Footer from './pages/Footer/Footer';
import Cart from './pages/Cart/Cart';
import { CartProvider } from './pages/CartContext';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
