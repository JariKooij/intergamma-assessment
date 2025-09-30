import ProductsPage from "@/features/products/components/ProductsPage";
import { loadProducts } from "@/features/products/utils/loadProducts";

const Products = async () => {
  const productData = await loadProducts();

  return <ProductsPage products={productData} />;
};

export default Products;
