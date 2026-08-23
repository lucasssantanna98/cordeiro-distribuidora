"use client";

import { useState } from 'react';
import Image from 'next/image';
import Header from '../../components/Header';
import { useCart } from '../../context/CartContext';
import { generateWhatsAppLink } from '../../utils/whatsapp';
import styles from './page.module.css';
import Link from 'next/link';

export default function Cart() {
  const { items, updateQuantity, removeFromCart, cartTotal, clearCart } = useCart();
  const [name, setName] = useState('');
  const [deliveryMethod, setDeliveryMethod] = useState<'delivery' | 'pickup'>('delivery');
  const [address, setAddress] = useState('');

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (items.length === 0) return;

    const link = generateWhatsAppLink({
      items,
      total: cartTotal,
      name,
      address,
      deliveryMethod
    });

    // Redirecionar para o WhatsApp
    window.open(link, '_blank');
  };

  if (items.length === 0) {
    return (
      <>
        <Header />
        <main className={styles.main}>
          <div className={styles.emptyCart}>
            <h2>Seu carrinho está vazio 😕</h2>
            <p>Adicione algumas bebidas para começar.</p>
            <Link href="/catalog" className={styles.backBtn}>
              Ir para o Catálogo
            </Link>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.headerBar}>
          <h1 className={styles.title}>Carrinho</h1>
          <button className={styles.clearBtn} onClick={clearCart}>
            Limpar tudo
          </button>
        </div>

        <div className={styles.cartContent}>
          {/* Items List */}
          <div className={styles.itemsList}>
            {items.map(item => (
              <div key={item.id} className={`${styles.cartItem} glass`}>
                <div className={styles.itemHeader}>
                  {item.image_url ? (
                    <div className={styles.itemThumb}>
                      <Image 
                        src={item.image_url} 
                        alt={item.name} 
                        fill 
                        sizes="50px"
                        style={{ objectFit: 'contain', padding: '2px' }} 
                      />
                    </div>
                  ) : null}
                  <div className={styles.itemInfo}>
                    <h4>{item.name}</h4>
                    <span className={styles.itemPrice}>
                      R$ {item.price.toFixed(2).replace('.', ',')} un
                    </span>
                  </div>
                </div>

                <div className={styles.itemControls}>
                  <div className={styles.quantityControl}>
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                  </div>
                  <span className={styles.itemTotal}>
                    R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Checkout Form */}
          <form className={`${styles.checkoutForm} glass`} onSubmit={handleCheckout}>
            <h3 className={styles.formTitle}>Dados para Entrega</h3>
            
            <div className={styles.inputGroup}>
              <label>Seu Nome</label>
              <input 
                type="text" 
                required 
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Como devemos te chamar?"
              />
            </div>

            <div className={styles.deliveryToggle}>
              <button 
                type="button"
                className={deliveryMethod === 'delivery' ? styles.active : ''}
                onClick={() => setDeliveryMethod('delivery')}
              >
                Delivery
              </button>
              <button 
                type="button"
                className={deliveryMethod === 'pickup' ? styles.active : ''}
                onClick={() => setDeliveryMethod('pickup')}
              >
                Retirar no Local
              </button>
            </div>

            {deliveryMethod === 'delivery' && (
              <div className={styles.inputGroup}>
                <label>Endereço Completo</label>
                <textarea 
                  required 
                  value={address}
                  onChange={e => setAddress(e.target.value)}
                  placeholder="Rua, Número, Bairro, Ponto de Referência..."
                  rows={3}
                />
              </div>
            )}

            <div className={styles.summary}>
              <span>Total:</span>
              <span className={styles.totalPrice}>
                R$ {cartTotal.toFixed(2).replace('.', ',')}
              </span>
            </div>

            <button type="submit" className={styles.checkoutBtn}>
              Finalizar no WhatsApp 💬
            </button>
          </form>
        </div>
      </main>
    </>
  );
}
