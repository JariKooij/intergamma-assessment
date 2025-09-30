"use client";

import { createContext, useEffect, useRef, useState } from "react";
import { WishlistItem } from "../models/wishlist.model";

interface IWishlistContext {
  wishlist: WishlistItem[];
  wishlistLoaded: boolean;
  updateWishlist: (productId: number, newQuantity: number) => void;
}

interface IWishlistContextProps {
  children?: React.ReactNode;
}

const WishlistContext = createContext<IWishlistContext>({
  wishlist: [],
  wishlistLoaded: false,
  updateWishlist: () => {},
});

export const WishlistContextProvider = ({
  children,
}: IWishlistContextProps) => {
  const hasMounted = useRef(false);

  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);
  const [wishlistLoaded, setWishlistLoaded] = useState(true);

  useEffect(() => {
    loadWishlist();
  }, []);

  //   Store changes to wishlist in localstorage
  useEffect(() => {
    if (!hasMounted.current) {
      hasMounted.current = true;
      return;
    }

    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const loadWishlist = async () => {
    const storedWishlist = localStorage.getItem("wishlist");

    if (storedWishlist) {
      setWishlist(JSON.parse(storedWishlist));
    }

    setWishlistLoaded(true);
  };

  const updateWishlist = (productId: number, newQuantity: number) => {
    const existingItem = wishlist.find((item) => item.productId === productId);

    if (newQuantity === 0) {
      // Remove from wishlist
      setWishlist((prev) =>
        prev.filter((item) => item.productId !== productId),
      );
      return;
    }

    if (!existingItem) {
      // Create new wishlist item
      const newWishlistItem = { productId, quantity: newQuantity };
      setWishlist((prev) => [...prev, newWishlistItem]);
      return;
    }

    // Update existing wishlist item
    setWishlist((prev) =>
      prev.map((item) =>
        item.productId === productId
          ? { ...item, quantity: newQuantity }
          : item,
      ),
    );
  };

  const context: IWishlistContext = {
    wishlist,
    wishlistLoaded,
    updateWishlist,
  };

  return (
    <WishlistContext.Provider value={context}>
      {children}
    </WishlistContext.Provider>
  );
};

export default WishlistContext;
