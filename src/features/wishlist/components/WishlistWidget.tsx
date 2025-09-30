"use client";

import { useEffect, useRef, useState } from "react";
import { MinusIcon, PlusIcon } from "lucide-react";

import Button from "@/components/ui/Button";

interface IWishlistWidgetProps {
  quantity: number;
  handleClose: () => void;
  handleSave: (quantity: number) => void;
}

const WishlistWidget = ({
  quantity,
  handleClose,
  handleSave,
}: IWishlistWidgetProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const [displayedQuantity, setDisplayedQuantity] = useState(quantity);

  useEffect(() => {
    // Close when click is registered outside of widget
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handleClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClose]);

  const addToDisplayedQuantity = () => {
    setDisplayedQuantity((prev) => (prev += 1));
  };

  const subtractFromDisplayedQuantity = () => {
    setDisplayedQuantity((prev) => (prev > 0 ? (prev -= 1) : 0));
  };

  return (
    <div
      ref={ref}
      className="bg-background border-secondary absolute top-0 -left-1 flex -translate-x-[100%] flex-col gap-2 rounded-md border p-2"
      onClick={(e) => e.preventDefault()}
    >
      <div className="flex gap-4 py-2">
        {/* Minus button */}
        <button
          onClick={subtractFromDisplayedQuantity}
          className="bg-secondary cursor-pointer rounded-full p-1 hover:opacity-70 disabled:pointer-events-none disabled:opacity-20"
          disabled={!displayedQuantity}
        >
          <MinusIcon size={16} />
        </button>

        {/* Quantity */}
        <p className="min-w-8 text-center">{displayedQuantity}</p>

        {/* Plus button */}
        <button
          onClick={addToDisplayedQuantity}
          className="bg-secondary cursor-pointer rounded-full p-1 hover:opacity-70"
        >
          <PlusIcon size={16} />
        </button>
      </div>

      {/* Save button */}
      <Button onClick={() => handleSave(displayedQuantity)} className="py-1">
        Save
      </Button>
    </div>
  );
};

export default WishlistWidget;
