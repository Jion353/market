import React, { useEffect, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import productsData from '../../data/products.json';
import './Home.scss';

const categories = [
  'Всі',
  'Чоловічий одяг',
  'Жіночий одяг',
  'Дитячий одяг'
];

const advantages = [
  {
    icon: "🚚",
    title: "Безкоштовна доставка",
    desc: "При замовленні від 2000 грн по Україні"
  },
  {
    icon: "🔄",
    title: "Легке повернення",
    desc: "14 днів на повернення товару"
  },
  {
    icon: "💳",
    title: "Зручна оплата",
    desc: "Готівкою, карткою або післяплатою"
  },
  {
    icon: "✅",
    title: "Гарантія якості",
    desc: "Тільки перевірені бренди"
  }
];

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('Всі');
  const [products, setProducts] = useState(productsData);
  const [search, setSearch] = useState('');

  useEffect(() => {
    let filtered = productsData;
    if (selectedCategory !== 'Всі') {
      filtered = filtered.filter(p => p.type === selectedCategory);
    }
    if (search.trim()) {
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    setProducts(filtered);
  }, [selectedCategory, search]);

  return (
    <div className="home-page">
      <div className="promo-banner">
        🎉 Літній розпродаж! Знижки до -30% на обрані моделі! 🎉
      </div>
      <h1 className="main-title">FrostyStyle — стильний верхній одяг для всієї родини</h1>
      <div className="shop-description">
        У нас ви знайдете сучасний верхній одяг для всієї родини: чоловічі, жіночі та дитячі куртки, пальта, пуховики та парки. Оновлюйте гардероб вигідно!
      </div>
      <div className="advantages">
        {advantages.map((adv, idx) => (
          <div className="advantage" key={idx}>
            <span className="adv-icon">{adv.icon}</span>
            <div>
              <div className="adv-title">{adv.title}</div>
              <div className="adv-desc">{adv.desc}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="categories">
        {categories.map(cat => (
          <button
            key={cat}
            className={`category-btn${selectedCategory === cat ? ' active' : ''}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
        <input
          className="search-input"
          type="text"
          placeholder="Пошук товару..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>
      <div className="products-count">
        Знайдено: {products.length} товар{products.length === 1 ? '' : products.length < 5 ? 'и' : 'ів'}
      </div>
      <div className="products-list">
        {products.length === 0 ? (
          <p>Товарів не знайдено.</p>
        ) : (
          products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>
    </div>
  );
};

export default Home;