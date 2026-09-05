"use client";

import { useState, useMemo } from 'react';
import Header from '../../components/Header';
import ProductCard from '../../components/ProductCard';
import { Product } from '../../types';
import { getMainCategory } from '../../data/categoryMap';
import styles from './page.module.css';

interface Props {
  initialProducts: Product[];
}

export default function CatalogView({ initialProducts }: Props) {
  const [activeMainCategory, setActiveMainCategory] = useState<string>('Todos');
  const [activeSubCategory, setActiveSubCategory] = useState<string>('Tudo');

  // As categorias principais que possuem pelo menos 1 produto no banco
  const availableMainCategories = useMemo(() => {
    const mainCats = new Set<string>();
    initialProducts.forEach(p => {
      mainCats.add(getMainCategory(p.category));
    });
    // Garantir a ordem predefinida ou apenas ordem alfabética? 
    // Vamos usar a ordem em que aparecem
    return ['Todos', ...Array.from(mainCats)];
  }, [initialProducts]);

  // As subcategorias disponíveis para a categoria principal ativa
  const availableSubCategories = useMemo(() => {
    if (activeMainCategory === 'Todos') return [];
    
    // Pegar todas as subcategorias mapeadas para a mainCategory atual que também existam nos produtos
    const subCats = new Set<string>();
    initialProducts.forEach(p => {
      if (getMainCategory(p.category) === activeMainCategory) {
        subCats.add(p.category);
      }
    });
    return ['Tudo', ...Array.from(subCats)];
  }, [activeMainCategory, initialProducts]);

  // Produtos filtrados
  const filteredProducts = useMemo(() => {
    if (activeMainCategory === 'Todos') {
      return initialProducts;
    }
    
    if (activeSubCategory === 'Tudo') {
      return initialProducts.filter(p => getMainCategory(p.category) === activeMainCategory);
    }
    
    return initialProducts.filter(p => p.category === activeSubCategory);
  }, [initialProducts, activeMainCategory, activeSubCategory]);

  const handleMainCategoryClick = (cat: string) => {
    setActiveMainCategory(cat);
    setActiveSubCategory('Tudo');
  };

  return (
    <>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>Catálogo</h1>
        
        {/* Nível 1: Categoria Principal */}
        <div className={styles.categoryScroll}>
          {availableMainCategories.map(category => (
            <button
              key={category}
              className={`${styles.catBtn} ${activeMainCategory === category ? styles.active : ''}`}
              onClick={() => handleMainCategoryClick(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Nível 2: Subcategorias (só exibe se não estiver no 'Todos') */}
        {activeMainCategory !== 'Todos' && availableSubCategories.length > 1 && (
          <div className={styles.subCategoryScroll}>
            {availableSubCategories.map(subCat => (
              <button
                key={subCat}
                className={`${styles.subCatBtn} ${activeSubCategory === subCat ? styles.active : ''}`}
                onClick={() => setActiveSubCategory(subCat)}
              >
                {subCat}
              </button>
            ))}
          </div>
        )}

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
