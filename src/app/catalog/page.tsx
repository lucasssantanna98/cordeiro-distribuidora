import { getProducts } from '../../services/productService';
import CatalogView from './CatalogView';

export const revalidate = 0;

export default async function Catalog() {
  const products = await getProducts();
  
  return <CatalogView initialProducts={products} />;
}
