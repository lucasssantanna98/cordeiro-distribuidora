"use client";

import styles from './Header.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '../context/CartContext';

export default function Header() {
  const { cartCount } = useCart();

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logoContainer}>
        <Image src="/logo.png" alt="Cordeiro Distribuidora Logo" width={45} height={45} className={styles.logoImage} />
        <div className={styles.placeholderLogo}>
          <span className={styles.brandName}>Cordeiro</span>
          <span className={styles.brandSub}>Distribuidora</span>
        </div>
      </Link>
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
