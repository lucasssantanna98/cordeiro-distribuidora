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
