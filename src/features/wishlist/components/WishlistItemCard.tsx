import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MinusIcon, PlusIcon, XIcon } from "lucide-react";

import { cn } from "@/utils/cn";
import { DetailedWishlistItem } from "../types/wishlist.types";
import useWishlist from "../hooks/useWishlist";

interface IWishlistItemCardProps {
  item: DetailedWishlistItem;
}

const WishlistItemCard = ({ item }: IWishlistItemCardProps) => {
  const { updateWishlist } = useWishlist();
  const [displayedQuantity, setDisplayedQuantity] = useState(item.quantity);

  const formattedPrice = useMemo(
    () =>
      Intl.NumberFormat("nl-NL", {
        style: "currency",
        currency: "EUR",
      }).format((item.product.price / 100) * item.quantity),
    [item.quantity, item.product.price],
  );

  useEffect(() => {
    updateWishlist(item.product.id, displayedQuantity);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [displayedQuantity, item.product.id]);

  const addToQuantity = () => {
    setDisplayedQuantity((prev) => prev + 1);
  };

  const subtractFromQuantity = () => {
    setDisplayedQuantity((prev) => (prev - 1 >= 0 ? prev - 1 : 0));
  };

  const removeFromWishlist = () => {
    setDisplayedQuantity(0);
  };

  return (
    <article
      className={cn("border-secondary flex gap-4 border-b px-2 py-4 sm:px-4", {
        "pointer-events-none opacity-50": displayedQuantity === 0,
      })}
    >
      {/* Product image */}
      <div className="shrink-0">
        <Image
          src={item.product.img}
          height={128}
          width={128}
          alt={`Image of ${item.product.title}`}
          loading="lazy"
          className="h-auto w-[70px] min-[400px]:w-[100px]"
        />
      </div>

      {/* Product details */}
      <div className="grow">
        <div className="flex items-start justify-between">
          <Link href={"#"} className="font-bold">
            {item.product.title}
          </Link>

          <button
            onClick={removeFromWishlist}
            className="-translate-y-2 cursor-pointer p-1 hover:opacity-50"
          >
            <XIcon size={20} />
          </button>
        </div>

        <p className="mb-4">{formattedPrice}</p>

        {/* Quantity editor */}
        <div className="border-secondary w-max rounded-md border px-2">
          <div className="flex gap-1 py-2">
            {/* Minus button */}
            <button
              onClick={subtractFromQuantity}
              className="cursor-pointer p-1 hover:opacity-70 disabled:pointer-events-none disabled:opacity-20"
              disabled={!item.quantity}
            >
              <MinusIcon size={16} />
            </button>

            {/* Quantity */}
            <p className="min-w-6 text-center">{displayedQuantity}</p>

            {/* Plus button */}
            <button
              onClick={addToQuantity}
              className="cursor-pointer p-1 hover:opacity-70"
            >
              <PlusIcon size={16} />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default WishlistItemCard;
