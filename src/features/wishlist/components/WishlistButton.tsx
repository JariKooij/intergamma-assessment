"use client";

import { useMemo, useState } from "react";
import { HeartIcon } from "lucide-react";

import { cn } from "@/utils/cn";
import Button from "@/components/ui/Button";
import useWishlist from "../hooks/useWishlist";
import WishlistWidget from "./WishlistWidget";

interface IWishlistButtonProps {
  productId: number;
}

const WishlistButton = ({ productId }: IWishlistButtonProps) => {
  const { updateWishlist, wishlist } = useWishlist();

  const [widgetActive, setWidgetActive] = useState(false);

  const wishlistedItem = useMemo(
    () => wishlist.find((item) => item.productId === productId),
    [wishlist, productId],
  );

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setWidgetActive(true);
  };

  const handleSave = (quantity: number) => {
    updateWishlist(productId, quantity);
    setWidgetActive(false);
  };

  return (
    <div className="relative">
      <Button
        variant="secondary"
        size="icon"
        onClick={handleClick}
        className={cn({ "border-primary border-2": wishlistedItem })}
      >
        <HeartIcon
          className={cn({
            "fill-primary stroke-primary": wishlistedItem,
          })}
        />
      </Button>

      {widgetActive && (
        <WishlistWidget
          quantity={wishlistedItem?.quantity || 0}
          handleClose={() => setWidgetActive(false)}
          handleSave={handleSave}
        />
      )}
    </div>
  );
};

export default WishlistButton;
