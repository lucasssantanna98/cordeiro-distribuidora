-- ============================================================
-- SCRIPT DE ATUALIZAÇÃO / CRIAÇÃO DO BANCO NO SUPABASE
-- Cole este código no "SQL Editor" do seu Supabase e clique em "Run"
-- ============================================================

-- 1. Criação da tabela de produtos (se ainda não existir)
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

-- 2. Habilitar RLS (Segurança)
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;

-- 3. Políticas de acesso seguras (recria se já existirem para não dar erro)
DROP POLICY IF EXISTS "Permitir leitura publica dos produtos" ON public.products;
CREATE POLICY "Permitir leitura publica dos produtos"
  ON public.products
  FOR SELECT
  USING (true);

DROP POLICY IF EXISTS "Permitir gerenciamento para usuarios autenticados" ON public.products;
CREATE POLICY "Permitir gerenciamento para usuarios autenticados"
  ON public.products
  FOR ALL
  USING (auth.role() = 'authenticated');

-- 4. Limpar e recarregar o catálogo completo com as novas imagens
TRUNCATE TABLE public.products;

INSERT INTO public.products (name, description, price, category, image_url) VALUES
  -- Combos
  ('Combo Vodka Smirnoff + 4 Red Bull', '1 Vodka Smirnoff 998ml + 4 Red Bull Energy Drink 250ml', 89.90, 'Combos', '/products/combo-smirnoff-4-red-bull.png'),
  ('Combo Vodka Absolut + 4 Red Bull', '1 Vodka Absolut Swedish 1L + 4 Red Bull Energy Drink 250ml', 149.90, 'Combos', '/products/combo-absolut-4-red-bull.png'),
  ('Combo Whisky Red Label + 4 Red Bull', '1 Whisky Johnnie Walker Red Label 1L + 4 Red Bull Energy Drink 250ml', 139.90, 'Combos', '/products/combo-whisky-red-label-4-red-bull.png'),
  ('Combo Gin Tanqueray + 4 Tônicas', '1 Gin Tanqueray London Dry 750ml + 4 Schweppes Tônica 350ml', 159.90, 'Combos', '/products/combo-gin-tanqueray-4-tonicas.png'),

  -- Cervejas
  ('Heineken Long Neck 330ml', 'Cerveja Premium Lager Puro Malte Holandesa', 7.50, 'Cervejas', '/products/cerveja-heineken-330ml.png'),
  ('Pack 6 Heineken Long Neck 330ml', 'Pack com 6 unidades Long Neck 330ml', 42.00, 'Cervejas', '/products/cerveja-long-neck-heineken-330ml-pack-6und.jpg'),
  ('Corona Extra Long Neck 330ml', 'Cerveja Premium tipo Pilsen Mexicana', 8.00, 'Cervejas', '/products/corona-extra-330ml.png'),
  ('Pack 6 Corona Extra 330ml', 'Pack com 6 unidades Long Neck 330ml', 45.00, 'Cervejas', '/products/corona-extra-330ml-pack-6und.png'),
  ('Stella Artois Long Neck 330ml', 'Cerveja Premium Puro Malte Belga', 7.50, 'Cervejas', '/products/stella-artois-long-neck-330ml.png'),
  ('Pack 6 Stella Artois 330ml', 'Pack com 6 unidades Long Neck 330ml', 42.00, 'Cervejas', '/products/stella-artois-long-neck-330ml-pack-6und.png'),
  ('Spaten Long Neck 355ml', 'Cerveja Puro Malte estilo Munich Helles', 6.90, 'Cervejas', '/products/spaten-long-neck-355ml.png'),
  ('Pack 6 Spaten Long Neck 355ml', 'Pack com 6 unidades Long Neck 355ml', 38.90, 'Cervejas', '/products/spaten-long-neck-355ml-pack-6und.png'),
  ('Brahma Duplo Malte Lata 350ml', 'Cerveja Puro Malte Pilsen e Munich', 4.50, 'Cervejas', '/products/brahma-duplo-malte-lata-350ml.png'),
  ('Pack 12 Brahma Duplo Malte 350ml', 'Pack com 12 latinhas de 350ml', 49.90, 'Cervejas', '/products/brahma-duplo-malte-lata-350ml-pack-12und.png'),
  ('Amstel Puro Malte Lata 350ml', 'Cerveja Lager Puro Malte receita de Amsterdã', 4.20, 'Cervejas', '/products/amstel-lata-350ml.png'),
  ('Pack 12 Amstel Lata 350ml', 'Pack com 12 latinhas de 350ml', 46.90, 'Cervejas', '/products/amstel-lata-350ml-pack-12und.png'),
  ('Budweiser Lata 350ml', 'Cerveja American Lager The King of Beers', 4.70, 'Cervejas', '/products/budweiser-lata-350ml.png'),
  ('Pack 12 Budweiser Lata 350ml', 'Pack com 12 latinhas de 350ml', 52.90, 'Cervejas', '/products/budweiser-lata-350ml-pack-12und.png'),
  ('Skol Lata 350ml', 'Cerveja Pilsen leve e refrescante', 3.99, 'Cervejas', '/products/skol-lata-350ml.png'),
  ('Pack 12 Skol Lata 350ml', 'Pack com 12 latinhas de 350ml', 44.90, 'Cervejas', '/products/skol-lata-350ml-pack-12und.png'),

  -- Destilados
  ('Whisky Johnnie Walker Black Label 1L', 'Blended Scotch Whisky envelhecido 12 anos', 169.00, 'Destilados', '/products/whisky-johnnie-walker-black-label-1l.png'),
  ('Whisky Johnnie Walker Red Label 1L', 'O whisky escocês pioneiro e mais vendido do mundo', 98.00, 'Destilados', '/products/whisky-johnnie-walker-red-label-1l.png'),
  ('Whisky Chivas Regal 12 Anos 1L', 'Blended Scotch Whisky refinado e aveludado', 159.00, 'Destilados', '/products/whisky-chivas-regal-12-anos-1l.png'),
  ('Whisky Jack Daniel''s Old No. 7 1L', 'Tennessee Whiskey autêntico e encorpado', 165.00, 'Destilados', '/products/whisky-jack-daniels-1l.png'),
  ('Gin Tanqueray London Dry 750ml', 'Gin premium importado clássico para Gin & Tônica', 145.00, 'Destilados', '/products/gin-tanqueray-london-dry-750ml.png'),
  ('Gin Bombay Sapphire 750ml', 'Gin premium com 10 botânicos selecionados', 139.90, 'Destilados', '/products/gin-bombay-sapphire-750ml.png'),
  ('Vodka Absolut 1L', 'Vodka Sueca pura e aromática 100% natural', 105.00, 'Destilados', '/products/vodka-absolut-1l.png'),
  ('Vodka Smirnoff 998ml', 'Vodka triplamente destilada e dez vezes filtrada', 48.00, 'Destilados', '/products/vodka-smirnoff-998ml.png'),
  ('Tequila José Cuervo Especial Ouro 750ml', 'Tequila Reposado mexicana tradicional', 119.90, 'Destilados', '/products/tequila-jose-cuervo-especial-ouro.png'),
  ('Campari Bitter 900ml', 'Aperitivo clássico italiano para Negroni e drinks', 58.00, 'Destilados', '/products/campari-900ml.png'),
  ('Cachaça 51 965ml', 'A cachaça tradicional do Brasil, ideal para caipirinhas', 16.50, 'Destilados', '/products/cachaca-51-965ml.png'),

  -- Energéticos
  ('Red Bull Energy Drink 250ml', 'Red Bull te dá asas. Energético clássico gelado', 10.90, 'Energéticos', '/products/red-bull-energy-drink-250ml-sabores.png'),
  ('Monster Energy 473ml', 'Energético Monster lata grande 473ml', 11.50, 'Energéticos', '/products/monster-energy-473ml-sabores.png'),
  ('Baly Energy Drink 2L', 'Energético Baly garrafa 2 Litros vários sabores', 14.90, 'Energéticos', '/products/baly-energy-drink-2l-sabores.png'),

  -- Refrigerantes
  ('Coca-Cola Original 2L', 'Refrigerante de Cola garrafa 2 Litros gelada', 12.00, 'Refrigerantes', '/products/coca-cola-2l.png'),
  ('Coca-Cola Lata 350ml', 'Refrigerante Coca-Cola sabor original lata 350ml', 4.50, 'Refrigerantes', '/products/coca-cola-lata-350ml.png'),
  ('Guaraná Antarctica 2L', 'O autêntico refrigerante de Guaraná garrafa 2 Litros', 10.50, 'Refrigerantes', '/products/guarana-antarctica-2l.png'),
  ('Sprite Limão 2L', 'Refrigerante refrescante de limão garrafa 2 Litros', 10.00, 'Refrigerantes', '/products/sprite-2l.png'),
  ('Schweppes Citrus / Tônica 350ml', 'Refrigerante Schweppes lata 350ml para drinks e consumo puro', 4.80, 'Refrigerantes', '/products/schweppes-350ml.png'),

  -- Diversos
  ('Essência Zomo Strong Mint', 'Essência para narguilé sabor Menta refrescante', 15.00, 'Diversos', null);

-- 5. Bucket de imagens (se não existir)
INSERT INTO storage.buckets (id, name, public) 
VALUES ('products-images', 'products-images', true)
ON CONFLICT (id) DO NOTHING;

DROP POLICY IF EXISTS "Imagens de produtos sao publicas" ON storage.objects;
CREATE POLICY "Imagens de produtos sao publicas"
  ON storage.objects FOR SELECT
  USING ( bucket_id = 'products-images' );

DROP POLICY IF EXISTS "Apenas admin pode fazer upload" ON storage.objects;
CREATE POLICY "Apenas admin pode fazer upload"
  ON storage.objects FOR INSERT
  WITH CHECK ( bucket_id = 'products-images' AND auth.role() = 'authenticated' );

DROP POLICY IF EXISTS "Apenas admin pode modificar imagens" ON storage.objects;
CREATE POLICY "Apenas admin pode modificar imagens"
  ON storage.objects FOR UPDATE
  USING ( bucket_id = 'products-images' AND auth.role() = 'authenticated' );

DROP POLICY IF EXISTS "Apenas admin pode deletar imagens" ON storage.objects;
CREATE POLICY "Apenas admin pode deletar imagens"
  ON storage.objects FOR DELETE
  USING ( bucket_id = 'products-images' AND auth.role() = 'authenticated' );
