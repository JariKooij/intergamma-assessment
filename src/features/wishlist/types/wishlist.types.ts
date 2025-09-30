import { Product } from "@/features/products/types/product.types";

export interface WishlistItem {
  productId: number;
  quantity: number;
}

export interface DetailedWishlistItem {
  product: Product;
  quantity: number;
}
