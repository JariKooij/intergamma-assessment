"use client";

import { useMemo } from "react";
import { HeartIcon } from "lucide-react";

import useWishlist from "@/features/wishlist/hooks/useWishlist";

const WishlistHeaderIcon: React.FC<React.ComponentProps<"button">> = ({
  ...props
}) => {
  const { wishlist } = useWishlist();

  const totalWishlistItems = useMemo(
    () => wishlist.reduce((sum, item) => sum + item.quantity, 0),
    [wishlist],
  );

  return (
    <button
      className="hover:bg-secondary relative cursor-pointer rounded-md p-1 transition-colors"
      {...props}
    >
      <HeartIcon />

      {!!wishlist.length && (
        <span className="bg-primary absolute top-0 -right-1 flex h-4 min-w-4 items-center justify-center rounded-full p-0.5 text-xs text-white">
          {totalWishlistItems}
        </span>
      )}
    </button>
  );
};

export default WishlistHeaderIcon;
