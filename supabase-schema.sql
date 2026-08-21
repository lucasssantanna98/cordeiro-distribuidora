-- Cole este código no "SQL Editor" do seu painel do Supabase e clique em "Run"

-- Criação da tabela de produtos
CREATE TABLE IF NOT EXISTS public.products (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  price NUMERIC(10, 2) NOT NULL,
  category TEXT NOT NULL,
  image_url TEXT,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Habilitar RLS (Segurança)
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;

-- Permitir leitura pública (qualquer um pode ver o catálogo)
CREATE POLICY "Permitir leitura publica dos produtos"
  ON public.products
  FOR SELECT
  USING (true);

-- Inserir alguns dados de exemplo (os mesmos do nosso Mock)
INSERT INTO public.products (name, description, price, category) VALUES
  ('Heineken Long Neck 330ml', 'Cerveja Premium Puro Malte', 7.50, 'Cervejas'),
  ('Brahma Duplo Malte Lata 350ml', 'Cerveja Pilsen Duplo Malte', 4.50, 'Cervejas'),
  ('Combo Vodka Smirnoff + 4 Red Bull', '1 Smirnoff 998ml + 4 Red Bull Energy Drink 250ml', 89.90, 'Combos'),
  ('Red Bull Energy Drink 250ml', 'Energético clássico', 10.90, 'Energéticos'),
  ('Coca-Cola 2L', 'Refrigerante de Cola', 12.00, 'Refrigerantes'),
  ('Gin Tanqueray London Dry 750ml', 'Gin premium importado', 145.00, 'Destilados'),
  ('Essência Zomo Mint', 'Essência para narguilé sabor Menta', 15.00, 'Diversos');

-- Permitir que usuários autenticados gerenciem os produtos
CREATE POLICY "Permitir gerenciamento para usuarios autenticados"
  ON public.products
  FOR ALL
  USING (auth.role() = 'authenticated');

-- ==========================================
-- BUCKET DE IMAGENS E POLÍTICAS DE STORAGE
-- ==========================================

-- 1. Criar o bucket chamado 'products-images' (se não existir)
INSERT INTO storage.buckets (id, name, public) 
VALUES ('products-images', 'products-images', true)
ON CONFLICT (id) DO NOTHING;

-- 2. Permitir leitura pública das imagens
CREATE POLICY "Imagens de produtos sao publicas"
  ON storage.objects FOR SELECT
  USING ( bucket_id = 'products-images' );

-- 3. Permitir que usuários autenticados façam upload
CREATE POLICY "Apenas admin pode fazer upload"
  ON storage.objects FOR INSERT
  WITH CHECK ( bucket_id = 'products-images' AND auth.role() = 'authenticated' );

-- 4. Permitir que usuários autenticados modifiquem/excluam imagens
CREATE POLICY "Apenas admin pode modificar imagens"
  ON storage.objects FOR UPDATE
  USING ( bucket_id = 'products-images' AND auth.role() = 'authenticated' );

CREATE POLICY "Apenas admin pode deletar imagens"
  ON storage.objects FOR DELETE
  USING ( bucket_id = 'products-images' AND auth.role() = 'authenticated' );

