"use client";

import { Product } from '../types';
import { useCart } from '../context/CartContext';
import styles from './ProductCard.module.css';

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const { addToCart } = useCart();

  const handleAdd = () => {
    addToCart(product);
  };

  return (
    <div className={`${styles.card} glass`}>
      <div className={styles.imagePlaceholder}>
        <span className={styles.categoryBadge}>{product.category}</span>
        {product.name.charAt(0)}
      </div>
      <div className={styles.info}>
        <h3 className={styles.title}>{product.name}</h3>
        <p className={styles.desc}>{product.description}</p>
        <div className={styles.footer}>
          <span className={styles.price}>
            R$ {product.price.toFixed(2).replace('.', ',')}
          </span>
          <button className={styles.addBtn} onClick={handleAdd}>
            + Add
          </button>
        </div>
      </div>
    </div>
  );
}
