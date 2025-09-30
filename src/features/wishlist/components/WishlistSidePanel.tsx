"use client";

import { useEffect, useState } from "react";

import SidePanel from "@/components/ui/SidePanel";
import WishlistHeaderIcon from "@/components/layout/header/WishlistHeaderIcon";
import { loadProducts } from "@/features/products/utils/loadProducts";
import useWishlist from "../hooks/useWishlist";
import { DetailedWishlistItem } from "../models/wishlist.model";

const WishlistSidePanel = () => {
  const [detailedWishlistItems, setDetailedWishlistItems] = useState<
    DetailedWishlistItem[]
  >([]);

  const { wishlist } = useWishlist();

  useEffect(() => {
    const getDetailedWishlistItems = async () => {
      // Create a list of product ids of items in the wishlist
      const productIds = wishlist.map((item) => item.productId);

      // Load these specific products
      const products = await loadProducts(productIds);

      // Combine the wishlist-items with their product details
      const detailedItems: DetailedWishlistItem[] = wishlist.flatMap((item) => {
        const product = products.find((p) => p.id === item.productId);
        return product ? [{ product, quantity: item.quantity }] : [];
      });

      setDetailedWishlistItems(detailedItems);
    };

    getDetailedWishlistItems();
  }, [wishlist]);

  return (
    <SidePanel title="My Wishlist" Trigger={WishlistHeaderIcon}>
      {detailedWishlistItems.map((item) => (
        <div key={item.product.id}>
          {item.product.title} - {item.quantity}
        </div>
      ))}
    </SidePanel>
  );
};

export default WishlistSidePanel;
