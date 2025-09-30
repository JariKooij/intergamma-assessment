"use client";

import { useEffect, useMemo, useState } from "react";

import { loadProducts } from "@/features/products/utils/loadProducts";
import useWishlist from "../hooks/useWishlist";
import SidePanel from "@/components/ui/SidePanel";
import WishlistHeaderIcon from "@/components/layout/header/WishlistHeaderIcon";
import { DetailedWishlistItem } from "../types/wishlist.types";
import WishlistItemCard from "./WishlistItemCard";

const WishlistSidePanel = () => {
  const [detailedWishlistItems, setDetailedWishlistItems] = useState<
    DetailedWishlistItem[]
  >([]);

  const { wishlist } = useWishlist();

  const totalWishlistPrice = useMemo(() => {
    // Calculate the total cents
    const totalCents = detailedWishlistItems.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0,
    );

    // Format to euros
    return Intl.NumberFormat("nl-NL", {
      style: "currency",
      currency: "EUR",
    }).format(totalCents / 100);
  }, [detailedWishlistItems]);

  useEffect(() => {
    const getDetailedWishlistItems = async () => {
      const productIds = wishlist.map((item) => item.productId);
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
      {/* Display total price of wishlist */}
      <p className="m-4">Total: {totalWishlistPrice}</p>

      {/* Wishlist items */}
      {detailedWishlistItems.length ? (
        <div className="flex flex-col gap-4">
          {detailedWishlistItems.map((item) => (
            <WishlistItemCard key={item.product.id} item={item} />
          ))}
        </div>
      ) : (
        <p className="p-4 pt-0 text-sm text-neutral-500">
          Get started by adding items to your wishlist.
        </p>
      )}
    </SidePanel>
  );
};

export default WishlistSidePanel;
