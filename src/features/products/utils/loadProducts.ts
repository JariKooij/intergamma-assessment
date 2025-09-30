"use server";

import { promises as fs } from "fs";
import { Product } from "../models/product.model";

const productDataFilePath = "/src/features/products/data/products.json";

/**
 * Load productdata from a JSON file.
 * @returns an array of products.
 */
export const loadProducts = async (): Promise<Product[]> => {
  const ProductDataJSONFile = await fs.readFile(
    process.cwd() + productDataFilePath,
    "utf8",
  );

  return JSON.parse(ProductDataJSONFile);
};
