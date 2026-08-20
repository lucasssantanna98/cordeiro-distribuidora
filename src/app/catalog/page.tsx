import { getProducts } from '../../services/productService';
import CatalogView from './CatalogView';

export default async function Catalog() {
  const products = await getProducts();
  
  return <CatalogView initialProducts={products} />;
}
