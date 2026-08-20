"use client";

import styles from './Header.module.css';
import Link from 'next/link';
import { useCart } from '../context/CartContext';

export default function Header() {
  const { cartCount } = useCart();

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        {/* TODO: Substituir por imagem da logo quando recebida */}
        <div className={styles.placeholderLogo}>
          <span className={styles.brandName}>Cordeiro</span>
          <span className={styles.brandSub}>Tabacaria</span>
        </div>
      </div>
      <div className={styles.actions}>
        <Link href="/cart" className={styles.cartBtn}>
          🛒
          {cartCount > 0 && (
            <span className={styles.cartBadge}>{cartCount}</span>
          )}
        </Link>
      </div>
    </header>
  );
}
