"use client";

import Link from "next/link";

import CompanyLogo from "./CompanyLogo";
import WishlistSidePanel from "@/features/wishlist/components/WishlistSidePanel";

const Header = () => {
  return (
    <header className="flex justify-center border-b-2 border-neutral-100">
      <nav className="wrapper-spacing flex justify-between gap-4">
        <Link href="/" aria-label="Navigate to the homepage.">
          <CompanyLogo />
        </Link>

        <WishlistSidePanel />
      </nav>
    </header>
  );
};

export default Header;
