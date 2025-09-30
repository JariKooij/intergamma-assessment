import { useContext } from "react";
import WishlistContext from "../contexts/WishlistContext";

const useWishlist = () => {
  const wishlist = useContext(WishlistContext);

  if (wishlist === undefined) {
    throw new Error(
      "useWishlist must be used within a WishlistContextProvider",
    );
  }
  return wishlist;
};

export default useWishlist;
