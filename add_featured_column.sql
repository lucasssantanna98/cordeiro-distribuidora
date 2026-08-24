-- Adiciona a coluna is_featured na tabela products
ALTER TABLE public.products
ADD COLUMN is_featured BOOLEAN DEFAULT false;

-- Opcional: Atualiza alguns produtos para já serem destaque por padrão
UPDATE public.products
SET is_featured = true
WHERE id IN (
  SELECT id FROM public.products 
  WHERE category = 'Combos' 
  LIMIT 4
);
