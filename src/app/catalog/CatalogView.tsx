"use client";

import { useState } from 'react';
import Header from '../../components/Header';
import ProductCard from '../../components/ProductCard';

import { Product } from '../../types';
import styles from './page.module.css';

interface Props {
  initialProducts: Product[];
}

export default function CatalogView({ initialProducts }: Props) {
  const [activeCategory, setActiveCategory] = useState('Todos');

  const dynamicCategories = ['Todos', ...Array.from(new Set(initialProducts.map(p => p.category)))];

  const filteredProducts = activeCategory === 'Todos'
    ? initialProducts
    : initialProducts.filter(p => p.category === activeCategory);

  return (
    <>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>Catálogo</h1>
        
        {/* Category Filter */}
        <div className={styles.categoryScroll}>
          {dynamicCategories.map(category => (
            <button
              key={category}
              className={`${styles.catBtn} ${activeCategory === category ? styles.active : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className={styles.productsGrid}>
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
          
          {filteredProducts.length === 0 && (
            <div className={styles.emptyState}>
              <p>Nenhum produto encontrado nesta categoria.</p>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
