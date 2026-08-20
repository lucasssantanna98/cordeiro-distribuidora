import { Product } from '../types';

export const CATEGORIES = [
  'Todos',
  'Cervejas',
  'Destilados',
  'Combos',
  'Energéticos',
  'Refrigerantes',
  'Tabacaria'
];

export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Heineken Long Neck 330ml',
    description: 'Cerveja Premium Puro Malte',
    price: 7.50,
    category: 'Cervejas',
    image_url: ''
  },
  {
    id: '2',
    name: 'Brahma Duplo Malte Lata 350ml',
    description: 'Cerveja Pilsen Duplo Malte',
    price: 4.50,
    category: 'Cervejas',
    image_url: ''
  },
  {
    id: '3',
    name: 'Combo Vodka Smirnoff + 4 Red Bull',
    description: '1 Smirnoff 998ml + 4 Red Bull Energy Drink 250ml',
    price: 89.90,
    category: 'Combos',
    image_url: ''
  },
  {
    id: '4',
    name: 'Red Bull Energy Drink 250ml',
    description: 'Energético clássico',
    price: 10.90,
    category: 'Energéticos',
    image_url: ''
  },
  {
    id: '5',
    name: 'Coca-Cola 2L',
    description: 'Refrigerante de Cola',
    price: 12.00,
    category: 'Refrigerantes',
    image_url: ''
  },
  {
    id: '6',
    name: 'Gin Tanqueray London Dry 750ml',
    description: 'Gin premium importado',
    price: 145.00,
    category: 'Destilados',
    image_url: ''
  },
  {
    id: '7',
    name: 'Essência Zomo Mint',
    description: 'Essência para narguilé sabor Menta',
    price: 15.00,
    category: 'Tabacaria',
    image_url: ''
  }
];
