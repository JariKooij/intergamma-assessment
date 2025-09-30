import Link from "next/link";
import Image from "next/image";
import { HeartIcon } from "lucide-react";

import Button from "@/components/ui/Button";
import { Product } from "../models/product.model";

interface IProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: IProductCardProps) => {
  const formattedPrice = Intl.NumberFormat("nl-NL", {
    style: "currency",
    currency: "EUR",
  }).format(product.price / 100);

  return (
    <article className="border-secondary rounded border">
      <Link href={"#"} className="flex gap-8 p-4">
        {/* Product image */}
        <div className="shrink-0">
          <Image
            src={product.img}
            height={256}
            width={256}
            alt={`Image of ${product.title}`}
            className="h-auto w-[100px] sm:w-[140px]"
          />
        </div>

        {/* Product details */}
        <div className="flex grow flex-col sm:flex-row sm:gap-8">
          {/* Left column */}
          <div className="grow">
            <h2 className="mb-2 text-lg font-bold sm:text-xl">
              {product.title}
            </h2>

            <p className="mb-4 text-sm text-neutral-500">
              {product.attributes.join(" | ")}
            </p>

            <p className="line-clamp-3 max-w-[500px] overflow-hidden text-ellipsis max-sm:hidden">
              {product.description}
            </p>
          </div>

          {/* Right column */}
          <div className="flex items-end justify-between sm:flex-col-reverse">
            <p className="font-medium sm:ml-auto sm:text-xl">
              {formattedPrice}
            </p>

            <Button variant="secondary" size="icon">
              <HeartIcon />
            </Button>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default ProductCard;
