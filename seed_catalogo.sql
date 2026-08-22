-- Arquivo para popular o banco de dados da Cordeiro Distribuidora
-- Limpa a tabela existente e insere uma lista completa de produtos

-- 1. (Opcional) Limpar os produtos atuais para evitar duplicação. 
-- CUIDADO: Isso apaga todos os produtos que já estão lá!
-- DELETE FROM public.products;

-- 2. Inserir os novos produtos
INSERT INTO public.products (name, description, price, category, image_url, is_active) VALUES

-- =========================================
-- CERVEJAS
-- =========================================
('Heineken Long Neck 330ml', 'Cerveja Premium Puro Malte. Ideal bem gelada.', 7.50, 'Cervejas', 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Heineken_bottle.jpg', true),
('Stella Artois Long Neck 330ml', 'Cerveja Premium. Sabor marcante.', 7.00, 'Cervejas', 'https://placehold.co/400x400/dedede/333333?text=Stella+Artois', true),
('Corona Extra 330ml', 'Cerveja leve e refrescante. Acompanha bem com limão.', 8.50, 'Cervejas', 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Corona_Extra_beer_bottle.jpg/400px-Corona_Extra_beer_bottle.jpg', true),
('Brahma Duplo Malte Lata 350ml', 'Cerveja Pilsen Duplo Malte. Lata.', 4.50, 'Cervejas', 'https://placehold.co/400x400/d32f2f/ffffff?text=Brahma+Duplo+Malte', true),
('Amstel Lata 350ml', 'Cerveja Puro Malte de receita europeia.', 4.30, 'Cervejas', 'https://placehold.co/400x400/b71c1c/ffffff?text=Amstel', true),
('Budweiser Lata 350ml', 'King of Beers. Sabor leve.', 4.80, 'Cervejas', 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Budweiser_can.jpg/400px-Budweiser_can.jpg', true),
('Skol Lata 350ml', 'A cerveja que desce redondo.', 3.99, 'Cervejas', 'https://placehold.co/400x400/fbc02d/333333?text=Skol', true),
('Spaten Long Neck 355ml', 'Cerveja Munich Helles.', 6.50, 'Cervejas', 'https://placehold.co/400x400/1e4620/ffffff?text=Spaten', true),

-- =========================================
-- DESTILADOS
-- =========================================
('Vodka Absolut 1L', 'Vodka sueca premium.', 110.00, 'Destilados', 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Absolut_Vodka.jpg/400px-Absolut_Vodka.jpg', true),
('Vodka Smirnoff 998ml', 'Vodka clássica n.1 do mundo.', 45.90, 'Destilados', 'https://placehold.co/400x400/cc0000/ffffff?text=Smirnoff', true),
('Whisky Johnnie Walker Red Label 1L', 'Whisky escocês tradicional.', 99.90, 'Destilados', 'https://placehold.co/400x400/8b0000/ffffff?text=Red+Label', true),
('Whisky Johnnie Walker Black Label 1L', 'Whisky escocês 12 anos.', 189.90, 'Destilados', 'https://placehold.co/400x400/111111/ffffff?text=Black+Label', true),
('Whisky Jack Daniel''s 1L', 'Whisky Tennessee tradicional.', 169.90, 'Destilados', 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Jack_Daniel%27s_Bottle.jpg/400px-Jack_Daniel%27s_Bottle.jpg', true),
('Whisky Chivas Regal 12 Anos 1L', 'Whisky escocês premium 12 anos.', 175.00, 'Destilados', 'https://placehold.co/400x400/a67c00/ffffff?text=Chivas+12', true),
('Gin Tanqueray London Dry 750ml', 'Gin premium importado.', 145.00, 'Destilados', 'https://placehold.co/400x400/004d40/ffffff?text=Tanqueray', true),
('Gin Bombay Sapphire 750ml', 'Gin premium garrafa azul.', 155.00, 'Destilados', 'https://placehold.co/400x400/0277bd/ffffff?text=Bombay+Sapphire', true),
('Tequila José Cuervo Especial Ouro', 'Tequila dourada.', 125.00, 'Destilados', 'https://placehold.co/400x400/f57f17/ffffff?text=Jose+Cuervo', true),
('Cachaça 51 965ml', 'A cachaça mais vendida do Brasil.', 14.50, 'Destilados', 'https://placehold.co/400x400/ffd54f/333333?text=Cachaça+51', true),
('Campari 900ml', 'Aperitivo clássico italiano.', 55.00, 'Destilados', 'https://placehold.co/400x400/d50000/ffffff?text=Campari', true),

-- =========================================
-- ENERGÉTICOS
-- =========================================
('Red Bull Energy Drink 250ml', 'Energético clássico.', 10.90, 'Energéticos', 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Red_Bull_can.jpg/400px-Red_Bull_can.jpg', true),
('Red Bull Tropical 250ml', 'Energético sabor frutas tropicais.', 10.90, 'Energéticos', 'https://placehold.co/400x400/fbc02d/111111?text=Red+Bull+Tropical', true),
('Monster Energy 473ml', 'Energético lata grande.', 12.50, 'Energéticos', 'https://placehold.co/400x400/000000/00ff00?text=Monster+Energy', true),
('Baly Energy Drink 2L', 'Energético tamanho família (Garrafa PET).', 16.90, 'Energéticos', 'https://placehold.co/400x400/111111/ffeb3b?text=Baly+2L', true),

-- =========================================
-- REFRIGERANTES E SUCOS
-- =========================================
('Coca-Cola 2L', 'Refrigerante de Cola Tradicional.', 12.00, 'Refrigerantes', 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Coca-Cola_1.5L_France.jpg/400px-Coca-Cola_1.5L_France.jpg', true),
('Coca-Cola Lata 350ml', 'Refrigerante de Cola Lata.', 5.00, 'Refrigerantes', 'https://placehold.co/400x400/e53935/ffffff?text=Coca+Lata', true),
('Guaraná Antarctica 2L', 'Refrigerante de Guaraná.', 10.50, 'Refrigerantes', 'https://placehold.co/400x400/4caf50/ffffff?text=Guarana', true),
('Sprite 2L', 'Refrigerante de Limão.', 10.00, 'Refrigerantes', 'https://placehold.co/400x400/00e676/111111?text=Sprite', true),
('Schweppes Tônica 350ml', 'Água Tônica em lata. Perfeita para Gin.', 4.50, 'Refrigerantes', 'https://placehold.co/400x400/ffeb3b/111111?text=Schweppes', true),
('Suco Del Valle Uva 1L', 'Suco de Uva Néctar.', 8.50, 'Refrigerantes', 'https://placehold.co/400x400/6a1b9a/ffffff?text=Del+Valle+Uva', true),
('Água Mineral Sem Gás 500ml', 'Água mineral natural.', 2.50, 'Diversos', 'https://placehold.co/400x400/bbdefb/111111?text=Agua', true),

-- =========================================
-- COMBOS
-- =========================================
('Combo Smirnoff + 4 Red Bull', '1 Vodka Smirnoff 998ml + 4 Energéticos Red Bull 250ml.', 85.00, 'Combos', 'https://placehold.co/400x400/d32f2f/ffffff?text=Combo+Smirnoff', true),
('Combo Absolut + 4 Red Bull', '1 Vodka Absolut 1L + 4 Energéticos Red Bull 250ml.', 145.00, 'Combos', 'https://placehold.co/400x400/1565c0/ffffff?text=Combo+Absolut', true),
('Combo Gin Tanqueray + 4 Tônicas', '1 Gin Tanqueray 750ml + 4 Tônicas Schweppes 350ml.', 159.00, 'Combos', 'https://placehold.co/400x400/004d40/ffffff?text=Combo+Gin', true),
('Combo Whisky Red Label + 4 Red Bull', '1 Whisky Red Label 1L + 4 Energéticos Red Bull 250ml.', 135.00, 'Combos', 'https://placehold.co/400x400/b71c1c/ffffff?text=Combo+Red+Label', true),

-- =========================================
-- GELO, CARVÃO E DIVERSOS
-- =========================================
('Gelo em Cubos 5kg', 'Pacote de gelo filtrado em cubos.', 15.00, 'Gelo e Carvão', 'https://placehold.co/400x400/81d4fa/111111?text=Gelo+5kg', true),
('Gelo de Coco (saborizado)', 'Gelo saborizado de água de coco. Pacote unitário.', 4.50, 'Gelo e Carvão', 'https://placehold.co/400x400/e0f7fa/111111?text=Gelo+de+Coco', true),
('Carvão Vegetal 3kg', 'Carvão especial para churrasco.', 18.00, 'Gelo e Carvão', 'https://placehold.co/400x400/3e2723/ffffff?text=Carvao+3kg', true),
('Essência Zomo Mint', 'Essência para narguilé sabor Menta.', 15.00, 'Tabacaria', 'https://placehold.co/400x400/00c853/111111?text=Zomo+Mint', true),
('Essência Ziggy Happy Berry', 'Essência para narguilé sabor Happy Berry.', 16.00, 'Tabacaria', 'https://placehold.co/400x400/d500f9/ffffff?text=Ziggy', true),
('Carvão de Coco Narguilé 1kg', 'Carvão de fibra de coco para narguilé.', 35.00, 'Tabacaria', 'https://placehold.co/400x400/212121/ffffff?text=Carvao+Narguile', true);
