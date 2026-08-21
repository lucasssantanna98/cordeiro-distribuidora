import { supabase } from '../utils/supabase';
import { MOCK_PRODUCTS } from '../data/mockProducts';
import { Product } from '../types';

export async function getProducts(): Promise<Product[]> {
  try {
    // Tenta buscar do Supabase
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('is_active', true)
      .order('created_at', { ascending: false });

    if (error) {
      console.warn("Erro ao buscar do Supabase (Usando dados de mock):", error.message);
      return MOCK_PRODUCTS;
    }

    if (data && data.length > 0) {
      return data as Product[];
    }
    
    // Se estiver vazio (URL configurada mas sem dados), retorna o mock para não quebrar a UI
    return MOCK_PRODUCTS;
  } catch (err) {
    // Se a URL/Key não estiver configurada, o supabase-js lançará erro
    console.warn("Supabase não configurado ou erro de rede (Usando dados de mock).");
    return MOCK_PRODUCTS;
  }
}

export async function getAllProductsForAdmin(): Promise<Product[]> {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data as Product[];
}

export async function addProduct(product: Omit<Product, 'id'>) {
  const { data, error } = await supabase.from('products').insert([product]).select().single();
  if (error) throw error;
  return data;
}

export async function updateProduct(id: string, updates: Partial<Product>) {
  const { data, error } = await supabase.from('products').update(updates).eq('id', id).select().single();
  if (error) throw error;
  return data;
}

export async function deleteProduct(id: string) {
  const { error } = await supabase.from('products').delete().eq('id', id);
  if (error) throw error;
}

export async function uploadImage(file: File): Promise<string> {
  const fileExt = file.name.split('.').pop();
  const fileName = `${Math.random()}.${fileExt}`;
  const filePath = `${fileName}`;

  const { error: uploadError } = await supabase.storage
    .from('products-images')
    .upload(filePath, file);

  if (uploadError) throw uploadError;

  const { data } = supabase.storage
    .from('products-images')
    .getPublicUrl(filePath);

  return data.publicUrl;
}
