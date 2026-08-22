import styles from './page.module.css';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import Link from 'next/link';
import { getProducts } from '../services/productService';

export const revalidate = 0;

export default async function Home() {
  const products = await getProducts();
  
  // Pegamos os produtos marcados como destaque
  const featuredProducts = products.filter(p => p.is_featured).slice(0, 4);

  return (
    <>
      <Header />
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={`${styles.hero} animate-fade-in`}>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>
              Sua bebida gelada, <br />
              <span className={styles.highlight}>onde você estiver.</span>
            </h1>
            <p className={styles.subtitle}>
              Cordeiro Distribuidora. Os melhores preços e entrega rápida pelo WhatsApp.
            </p>
            <div className={styles.actionButtons}>
              <Link href="/catalog" className={styles.primaryBtn}>
                Ver Catálogo Completo
              </Link>
            </div>
          </div>
        </section>

        {/* Promoções Section */}
        <section className={styles.promotions}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>🔥 Destaques da Semana</h2>
            <Link href="/catalog" className={styles.seeAll}>
              Ver todos
            </Link>
          </div>
          <div className={styles.cardsGrid}>
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
