"use server";

import products from "@/features/products/data/products.json";
import { Product } from "../models/product.model";

/**
 * Load productdata from a JSON file.
 * @param ids the ids of the products to load
 * @returns an array of products.
 */
export const loadProducts = async (ids?: number[]): Promise<Product[]> => {
  const filteredProductData = ids?.length
    ? products.filter((product) => ids.includes(product.id))
    : products;

  return filteredProductData;
};
