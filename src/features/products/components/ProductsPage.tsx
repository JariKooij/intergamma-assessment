import PageWrapper from "@/components/layout/PageWrapper";
import ProductCard from "./ProductCard";
import { Product } from "../types/product.types";

interface IProductsPageProps {
  products: Product[];
}

const ProductsPage = ({ products }: IProductsPageProps) => {
  return (
    <PageWrapper>
      <h1 className="mb-4 text-3xl font-bold">Products</h1>

      <p className="mb-2 text-neutral-500">{products.length} products found.</p>

      <div className="flex flex-col gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </PageWrapper>
  );
};

export default ProductsPage;
