import { promises as fs } from "fs";

import { Product } from "@/features/products/models/product.model";
import ProductsPage from "@/features/products/components/ProductsPage";

const productDataFilePath = "/src/features/products/data/products.json";

const Products = async () => {
  // Load product data from JSON file
  const ProductDataJSONFile = await fs.readFile(
    process.cwd() + productDataFilePath,
    "utf8",
  );

  const productData: Product[] = JSON.parse(ProductDataJSONFile);

  return <ProductsPage products={productData} />;
};

export default Products;
