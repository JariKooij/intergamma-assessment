import { Product } from "@/features/products/models/product.model";

export interface WishlistItem {
  productId: number;
  quantity: number;
}

export interface DetailedWishlistItem {
  product: Product;
  quantity: number;
}
