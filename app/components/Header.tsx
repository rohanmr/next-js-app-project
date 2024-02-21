import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <nav className="bg-transparent  top-49 left-42 md:p-10 flex flex-col md:flex-row justify-between items-center">
      <Link href="/" className="text-white text-xl font-bold W-52 h-10">
        Logoipsum
      </Link>

      <ul className="flex flex-col text-base font-medium md:flex-row md:space-x-4 md:gap-5 mt-4 md:mt-0">
        <li>
          <Link href="/" className="text-white hover:text-gray-200">
            Home
          </Link>
        </li>
        <li>
          <Link href="/product" className="text-white hover:text-gray-200">
            Product
          </Link>
        </li>
        <li>
          <Link href="/contact" className="text-white hover:text-gray-200">
            Contact
          </Link>
        </li>
      </ul>
      <div className="flex items-center mt-4 md:mt-0 space-x-2 text-base font-medium">
        <Link
          href="/signin"
          className="px-3 py-2  text-white text-base font-medium"
        >
          Sign in
        </Link>

        <Link
          href="/register"
          className="px-4 py-2 w-28 h-10 bg-white text-blue-700 text-center shadow-md text-opacity-9  rounded-full"
        >
          Register
        </Link>
      </div>
    </nav>
  );
};

export default Header;
