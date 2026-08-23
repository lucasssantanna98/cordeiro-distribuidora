import { Product } from '../types';

export const CATEGORIES = [
  'Todos',
  'Cervejas',
  'Destilados',
  'Combos',
  'Energéticos',
  'Refrigerantes',
  'Diversos'
];

export const MOCK_PRODUCTS: Product[] = [
  // --- COMBOS ---
  {
    id: 'combo-smirnoff-redbull',
    name: 'Combo Vodka Smirnoff + 4 Red Bull',
    description: '1 Vodka Smirnoff 998ml + 4 Red Bull Energy Drink 250ml',
    price: 89.90,
    category: 'Combos',
    image_url: '/products/combo-smirnoff-4-red-bull.png',
    is_featured: true
  },
  {
    id: 'combo-absolut-redbull',
    name: 'Combo Vodka Absolut + 4 Red Bull',
    description: '1 Vodka Absolut Swedish 1L + 4 Red Bull Energy Drink 250ml',
    price: 149.90,
    category: 'Combos',
    image_url: '/products/combo-absolut-4-red-bull.png',
    is_featured: true
  },
  {
    id: 'combo-redlabel-redbull',
    name: 'Combo Whisky Red Label + 4 Red Bull',
    description: '1 Whisky Johnnie Walker Red Label 1L + 4 Red Bull Energy Drink 250ml',
    price: 139.90,
    category: 'Combos',
    image_url: '/products/combo-whisky-red-label-4-red-bull.png',
    is_featured: true
  },
  {
    id: 'combo-tanqueray-tonica',
    name: 'Combo Gin Tanqueray + 4 Tônicas',
    description: '1 Gin Tanqueray London Dry 750ml + 4 Schweppes Tônica 350ml',
    price: 159.90,
    category: 'Combos',
    image_url: '/products/combo-gin-tanqueray-4-tonicas.png',
    is_featured: true
  },

  // --- CERVEJAS ---
  {
    id: 'cerveja-heineken-330ml',
    name: 'Heineken Long Neck 330ml',
    description: 'Cerveja Premium Lager Puro Malte Holandesa',
    price: 7.50,
    category: 'Cervejas',
    image_url: '/products/cerveja-heineken-330ml.png'
  },
  {
    id: 'heineken-pack-6und',
    name: 'Pack 6 Heineken Long Neck 330ml',
    description: 'Pack com 6 unidades Long Neck 330ml',
    price: 42.00,
    category: 'Cervejas',
    image_url: '/products/cerveja-long-neck-heineken-330ml-pack-6und.jpg'
  },
  {
    id: 'corona-extra-330ml',
    name: 'Corona Extra Long Neck 330ml',
    description: 'Cerveja Premium tipo Pilsen Mexicana',
    price: 8.00,
    category: 'Cervejas',
    image_url: '/products/corona-extra-330ml.png'
  },
  {
    id: 'corona-extra-pack-6und',
    name: 'Pack 6 Corona Extra 330ml',
    description: 'Pack com 6 unidades Long Neck 330ml',
    price: 45.00,
    category: 'Cervejas',
    image_url: '/products/corona-extra-330ml-pack-6und.png'
  },
  {
    id: 'stella-artois-330ml',
    name: 'Stella Artois Long Neck 330ml',
    description: 'Cerveja Premium Puro Malte Belga',
    price: 7.50,
    category: 'Cervejas',
    image_url: '/products/stella-artois-long-neck-330ml.png'
  },
  {
    id: 'stella-artois-pack-6und',
    name: 'Pack 6 Stella Artois 330ml',
    description: 'Pack com 6 unidades Long Neck 330ml',
    price: 42.00,
    category: 'Cervejas',
    image_url: '/products/stella-artois-long-neck-330ml-pack-6und.png'
  },
  {
    id: 'spaten-355ml',
    name: 'Spaten Long Neck 355ml',
    description: 'Cerveja Puro Malte estilo Munich Helles',
    price: 6.90,
    category: 'Cervejas',
    image_url: '/products/spaten-long-neck-355ml.png'
  },
  {
    id: 'spaten-pack-6und',
    name: 'Pack 6 Spaten Long Neck 355ml',
    description: 'Pack com 6 unidades Long Neck 355ml',
    price: 38.90,
    category: 'Cervejas',
    image_url: '/products/spaten-long-neck-355ml-pack-6und.png'
  },
  {
    id: 'brahma-duplo-malte-lata',
    name: 'Brahma Duplo Malte Lata 350ml',
    description: 'Cerveja Puro Malte Pilsen e Munich',
    price: 4.50,
    category: 'Cervejas',
    image_url: '/products/brahma-duplo-malte-lata-350ml.png'
  },
  {
    id: 'brahma-duplo-malte-pack-12',
    name: 'Pack 12 Brahma Duplo Malte 350ml',
    description: 'Pack com 12 latinhas de 350ml',
    price: 49.90,
    category: 'Cervejas',
    image_url: '/products/brahma-duplo-malte-lata-350ml-pack-12und.png'
  },
  {
    id: 'amstel-lata-350ml',
    name: 'Amstel Puro Malte Lata 350ml',
    description: 'Cerveja Lager Puro Malte receita de Amsterdã',
    price: 4.20,
    category: 'Cervejas',
    image_url: '/products/amstel-lata-350ml.png'
  },
  {
    id: 'amstel-pack-12und',
    name: 'Pack 12 Amstel Lata 350ml',
    description: 'Pack com 12 latinhas de 350ml',
    price: 46.90,
    category: 'Cervejas',
    image_url: '/products/amstel-lata-350ml-pack-12und.png'
  },
  {
    id: 'budweiser-lata-350ml',
    name: 'Budweiser Lata 350ml',
    description: 'Cerveja American Lager The King of Beers',
    price: 4.70,
    category: 'Cervejas',
    image_url: '/products/budweiser-lata-350ml.png'
  },
  {
    id: 'budweiser-pack-12und',
    name: 'Pack 12 Budweiser Lata 350ml',
    description: 'Pack com 12 latinhas de 350ml',
    price: 52.90,
    category: 'Cervejas',
    image_url: '/products/budweiser-lata-350ml-pack-12und.png'
  },
  {
    id: 'skol-lata-350ml',
    name: 'Skol Lata 350ml',
    description: 'Cerveja Pilsen leve e refrescante',
    price: 3.99,
    category: 'Cervejas',
    image_url: '/products/skol-lata-350ml.png'
  },
  {
    id: 'skol-pack-12und',
    name: 'Pack 12 Skol Lata 350ml',
    description: 'Pack com 12 latinhas de 350ml',
    price: 44.90,
    category: 'Cervejas',
    image_url: '/products/skol-lata-350ml-pack-12und.png'
  },

  // --- DESTILADOS ---
  {
    id: 'whisky-jw-black-label',
    name: 'Whisky Johnnie Walker Black Label 1L',
    description: 'Blended Scotch Whisky envelhecido 12 anos',
    price: 169.00,
    category: 'Destilados',
    image_url: '/products/whisky-johnnie-walker-black-label-1l.png'
  },
  {
    id: 'whisky-jw-red-label',
    name: 'Whisky Johnnie Walker Red Label 1L',
    description: 'O whisky escocês pioneiro e mais vendido do mundo',
    price: 98.00,
    category: 'Destilados',
    image_url: '/products/whisky-johnnie-walker-red-label-1l.png'
  },
  {
    id: 'whisky-chivas-12',
    name: 'Whisky Chivas Regal 12 Anos 1L',
    description: 'Blended Scotch Whisky refinado e aveludado',
    price: 159.00,
    category: 'Destilados',
    image_url: '/products/whisky-chivas-regal-12-anos-1l.png'
  },
  {
    id: 'whisky-jack-daniels',
    name: 'Whisky Jack Daniel\'s Old No. 7 1L',
    description: 'Tennessee Whiskey autêntico e encorpado',
    price: 165.00,
    category: 'Destilados',
    image_url: '/products/whisky-jack-daniels-1l.png'
  },
  {
    id: 'gin-tanqueray-london-dry',
    name: 'Gin Tanqueray London Dry 750ml',
    description: 'Gin premium importado clássico para Gin & Tônica',
    price: 145.00,
    category: 'Destilados',
    image_url: '/products/gin-tanqueray-london-dry-750ml.png'
  },
  {
    id: 'gin-bombay-sapphire',
    name: 'Gin Bombay Sapphire 750ml',
    description: 'Gin premium com 10 botânicos selecionados',
    price: 139.90,
    category: 'Destilados',
    image_url: '/products/gin-bombay-sapphire-750ml.png'
  },
  {
    id: 'vodka-absolut-1l',
    name: 'Vodka Absolut 1L',
    description: 'Vodka Sueca pura e aromática 100% natural',
    price: 105.00,
    category: 'Destilados',
    image_url: '/products/vodka-absolut-1l.png'
  },
  {
    id: 'vodka-smirnoff-998ml',
    name: 'Vodka Smirnoff 998ml',
    description: 'Vodka triplamente destilada e dez vezes filtrada',
    price: 48.00,
    category: 'Destilados',
    image_url: '/products/vodka-smirnoff-998ml.png'
  },
  {
    id: 'tequila-jose-cuervo-ouro',
    name: 'Tequila José Cuervo Especial Ouro 750ml',
    description: 'Tequila Reposado mexicana tradicional',
    price: 119.90,
    category: 'Destilados',
    image_url: '/products/tequila-jose-cuervo-especial-ouro.png'
  },
  {
    id: 'campari-900ml',
    name: 'Campari Bitter 900ml',
    description: 'Aperitivo clássico italiano para Negroni e drinks',
    price: 58.00,
    category: 'Destilados',
    image_url: '/products/campari-900ml.png'
  },
  {
    id: 'cachaca-51-965ml',
    name: 'Cachaça 51 965ml',
    description: 'A cachaça tradicional do Brasil, ideal para caipirinhas',
    price: 16.50,
    category: 'Destilados',
    image_url: '/products/cachaca-51-965ml.png'
  },

  // --- ENERGÉTICOS ---
  {
    id: 'red-bull-250ml',
    name: 'Red Bull Energy Drink 250ml',
    description: 'Red Bull te dá asas. Energético clássico gelado',
    price: 10.90,
    category: 'Energéticos',
    image_url: '/products/red-bull-energy-drink-250ml-sabores.png'
  },
  {
    id: 'monster-energy-473ml',
    name: 'Monster Energy 473ml',
    description: 'Energético Monster lata grande 473ml',
    price: 11.50,
    category: 'Energéticos',
    image_url: '/products/monster-energy-473ml-sabores.png'
  },
  {
    id: 'baly-energy-drink-2l',
    name: 'Baly Energy Drink 2L',
    description: 'Energético Baly garrafa 2 Litros vários sabores',
    price: 14.90,
    category: 'Energéticos',
    image_url: '/products/baly-energy-drink-2l-sabores.png'
  },

  // --- REFRIGERANTES ---
  {
    id: 'coca-cola-2l',
    name: 'Coca-Cola Original 2L',
    description: 'Refrigerante de Cola garrafa 2 Litros gelada',
    price: 12.00,
    category: 'Refrigerantes',
    image_url: '/products/coca-cola-2l.png'
  },
  {
    id: 'coca-cola-lata-350ml',
    name: 'Coca-Cola Lata 350ml',
    description: 'Refrigerante Coca-Cola sabor original lata 350ml',
    price: 4.50,
    category: 'Refrigerantes',
    image_url: '/products/coca-cola-lata-350ml.png'
  },
  {
    id: 'guarana-antarctica-2l',
    name: 'Guaraná Antarctica 2L',
    description: 'O autêntico refrigerante de Guaraná garrafa 2 Litros',
    price: 10.50,
    category: 'Refrigerantes',
    image_url: '/products/guarana-antarctica-2l.png'
  },
  {
    id: 'sprite-2l',
    name: 'Sprite Limão 2L',
    description: 'Refrigerante refrescante de limão garrafa 2 Litros',
    price: 10.00,
    category: 'Refrigerantes',
    image_url: '/products/sprite-2l.png'
  },
  {
    id: 'schweppes-350ml',
    name: 'Schweppes Citrus / Tônica 350ml',
    description: 'Refrigerante Schweppes lata 350ml para drinks e consumo puro',
    price: 4.80,
    category: 'Refrigerantes',
    image_url: '/products/schweppes-350ml.png'
  },

  // --- DIVERSOS ---
  {
    id: 'essencia-zomo-mint',
    name: 'Essência Zomo Strong Mint',
    description: 'Essência para narguilé sabor Menta refrescante',
    price: 15.00,
    category: 'Diversos',
    image_url: ''
  }
];
