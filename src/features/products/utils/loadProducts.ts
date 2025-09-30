"use server";

import { promises as fs } from "fs";
import { Product } from "../models/product.model";

const productDataFilePath = "/src/features/products/data/products.json";

/**
 * Load productdata from a JSON file.
 * @param ids the ids of the products to load
 * @returns an array of products.
 */
export const loadProducts = async (ids?: number[]): Promise<Product[]> => {
  const ProductDataJSONFile = await fs.readFile(
    process.cwd() + productDataFilePath,
    "utf8",
  );

  const productData: Product[] = JSON.parse(ProductDataJSONFile);
  const filteredProductData = ids?.length
    ? productData.filter((product) => ids.includes(product.id))
    : productData;

  return filteredProductData;
};
