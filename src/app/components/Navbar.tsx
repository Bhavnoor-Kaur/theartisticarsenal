import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 flex items-center justify-center py-2 px-8 bg-transparent text-gold z-50">
      <div className="flex items-center justify-between w-full max-w-6xl px-24 h-16 border-b-2 border-bright-pink">
        {/* Left links */}
        <div className="flex space-x-10 text-lg text-indigo-dye">
          <Link href="/" className="hover:scale-110 hover:text-tiffany-blue duration-300">
            HOME
          </Link>
          <Link href="/work" className="hover:scale-110 hover:text-tiffany-blue duration-300">
            WORK
          </Link>
          <Link href="/artworks" className="hover:scale-110 hover:text-tiffany-blue duration-300">
            ARTWORKS
          </Link>
        </div>

        {/* Logo in the center */}
        <Link href="/artworks" className="hover:scale-110 duration-300">
            <img
              src="/shortcuticon.jpg"
              alt="Logo"
              className="h-12 w-auto"
            />
          </Link>

        {/* Right links */}
        <div className="flex space-x-10 text-lg text-indigo-dye">
          <Link href="/about" className="hover:scale-110 hover:text-tiffany-blue duration-300">
            ABOUT
          </Link>
          <Link href="/services" className="hover:scale-110 hover:text-tiffany-blue duration-300">
            SERVICES
          </Link>
          <Link href="/contact" className="hover:scale-110 hover:text-tiffany-blue duration-300">
            CONTACT
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
