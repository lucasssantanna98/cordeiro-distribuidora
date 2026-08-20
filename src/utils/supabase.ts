import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// Inicializa o cliente do Supabase
// Vai falhar silenciosamente ou dar erro na hora do fetch se as chaves estiverem vazias,
// o que é esperado até o usuário configurar o .env.local
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
