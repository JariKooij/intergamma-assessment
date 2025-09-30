"use client";

import Link from "next/link";
import { HeartIcon } from "lucide-react";

import CompanyLogo from "./CompanyLogo";

const Header = () => {
  return (
    <header className="flex justify-center border-b-2 border-neutral-100">
      <nav className="wrapper-spacing flex justify-between gap-4">
        <Link href="/" aria-label="Navigate to the homepage.">
          <CompanyLogo />
        </Link>

        <button className="hover:bg-secondary relative cursor-pointer rounded-md p-1 transition-colors">
          <HeartIcon />

          <span className="bg-primary absolute top-0 -right-1 flex h-4 min-w-4 items-center justify-center rounded-full p-0.5 text-xs text-white">
            10
          </span>
        </button>
      </nav>
    </header>
  );
};

export default Header;
