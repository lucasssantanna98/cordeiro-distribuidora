"use client";

import { useEffect, useState } from 'react';
import { supabase } from '../../utils/supabase';
import { useRouter } from 'next/navigation';
import { Product } from '../../types';
import { getAllProductsForAdmin, addProduct, updateProduct, deleteProduct, uploadImage } from '../../services/productService';
import { CATEGORIES } from '../../data/mockProducts';
import styles from './page.module.css';

export default function AdminDashboard() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  // Form states
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState('');
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    checkUser();
  }, []);

  async function checkUser() {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      router.push('/admin/login');
    } else {
      loadProducts();
    }
  }

  async function loadProducts() {
    try {
      const data = await getAllProductsForAdmin();
      setProducts(data);
    } catch (e) {
      console.error(e);
      alert('Erro ao carregar produtos. Verifique sua configuração do Supabase.');
    } finally {
      setLoading(false);
    }
  }

  function openNewModal() {
    setEditingProduct(null);
    setName('');
    setDescription('');
    setPrice('');
    setCategory(CATEGORIES.find(c => c !== 'Todos') || 'Diversos');
    setImageFile(null);
    setImageUrl('');
    setIsModalOpen(true);
  }

  function openEditModal(product: Product) {
    setEditingProduct(product);
    setName(product.name);
    setDescription(product.description || '');
    setPrice(product.price.toString());
    setCategory(product.category);
    setImageUrl(product.image_url || '');
    setImageFile(null);
    setIsModalOpen(true);
  }

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    try {
      let finalImageUrl = imageUrl;
      if (imageFile) {
        finalImageUrl = await uploadImage(imageFile);
      }

      const productData = {
        name,
        description,
        price: parseFloat(price.replace(',', '.')),
        category,
        image_url: finalImageUrl,
        is_active: true
      };

      if (editingProduct) {
        await updateProduct(editingProduct.id, productData);
      } else {
        await addProduct(productData);
      }

      setIsModalOpen(false);
      loadProducts();
    } catch (error: any) {
      alert('Erro ao salvar: ' + error.message);
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(id: string) {
    if (confirm('Tem certeza que deseja excluir este produto?')) {
      try {
        await deleteProduct(id);
        loadProducts();
      } catch (error: any) {
        alert('Erro ao excluir: ' + error.message);
      }
    }
  }

  async function handleLogout() {
    await supabase.auth.signOut();
    router.push('/admin/login');
  }

  if (loading) return <div className={styles.container}>Carregando painel...</div>;

  const filteredProducts = products.filter(p => {
    const matchesCategory = selectedCategory === 'Todos' || p.category === selectedCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Painel de Controle</h1>
        <div className={styles.headerActions}>
          <button onClick={openNewModal} className={styles.primaryBtn}>+ Novo Produto</button>
          <button onClick={handleLogout} className={styles.secondaryBtn}>Sair</button>
        </div>
      </div>

      <div className={styles.filters}>
        <input 
          type="text" 
          placeholder="Buscar produto por nome..." 
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className={styles.searchInput}
        />
        <div className={styles.categoryFilters}>
          {CATEGORIES.map(cat => (
            <button 
              key={cat} 
              onClick={() => setSelectedCategory(cat)}
              className={selectedCategory === cat ? styles.filterBtnActive : styles.filterBtn}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Imagem</th>
              <th>Nome</th>
              <th>Preço</th>
              <th>Categoria</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map(p => (
              <tr key={p.id}>
                <td>
                  {p.image_url ? (
                    <img src={p.image_url} alt={p.name} className={styles.tableImg} />
                  ) : (
                    <div className={styles.placeholderImg} />
                  )}
                </td>
                <td>{p.name}</td>
                <td>R$ {p.price.toFixed(2).replace('.', ',')}</td>
                <td>{p.category}</td>
                <td>
                  <button onClick={() => openEditModal(p)} className={styles.editBtn}>Editar</button>
                  <button onClick={() => handleDelete(p.id)} className={styles.deleteBtn}>Excluir</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h2>{editingProduct ? 'Editar Produto' : 'Novo Produto'}</h2>
            <form onSubmit={handleSave} className={styles.form}>
              <input 
                type="text" placeholder="Nome do Produto" required 
                value={name} onChange={e => setName(e.target.value)} className={styles.input}
              />
              <textarea 
                placeholder="Descrição" 
                value={description} onChange={e => setDescription(e.target.value)} className={styles.input}
              />
              <input 
                type="number" step="0.01" placeholder="Preço (Ex: 10.50)" required 
                value={price} onChange={e => setPrice(e.target.value)} className={styles.input}
              />
              <select value={category} onChange={e => setCategory(e.target.value)} className={styles.input}>
                {CATEGORIES.filter(c => c !== 'Todos').map(c => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
              
              <div className={styles.fileInputGroup}>
                <label>Imagem do Produto:</label>
                {imageUrl && !imageFile && <img src={imageUrl} alt="Atual" style={{width: 80, height: 80, objectFit: 'cover', borderRadius: 8, marginBottom: 8}} />}
                <input 
                  type="file" accept="image/*" 
                  onChange={e => {
                    if (e.target.files && e.target.files.length > 0) {
                      setImageFile(e.target.files[0]);
                    }
                  }} 
                  className={styles.fileInput}
                />
              </div>

              <div className={styles.modalActions}>
                <button type="button" onClick={() => setIsModalOpen(false)} className={styles.secondaryBtn} disabled={saving}>Cancelar</button>
                <button type="submit" className={styles.primaryBtn} disabled={saving}>
                  {saving ? 'Salvando...' : 'Salvar'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
