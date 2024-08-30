import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 flex items-center justify-center py-2 px-8 bg-transparent text-gold z-50">
      <div className="flex items-center justify-between w-full max-w-6xl px-24 h-16 border-b-2 border-gold">
        {/* Left links */}
        <div className="flex space-x-10 text-xl text-white">
          <Link href="/" className="hover:underline">
            <p className="hover:underline">HOME</p>
          </Link>
          <Link href="/work" className="hover:underline">
            WORK
          </Link>
          <Link href="/artworks" className="hover:underline">
            ARTWORKS
          </Link>
        </div>

        {/* Logo in the center */}
        <Link href="/artworks">
            <img
              src="/shortcuticon.jpg"
              alt="Logo"
              className="h-12 w-auto"
            />
          </Link>

        {/* Right links */}
        <div className="flex space-x-10 text-xl text-white">
          <Link href="/about" className="hover:underline">
            ABOUT
          </Link>
          <Link href="/services" className="hover:underline">
            SERVICES
          </Link>
          <Link href="/contact" className="hover:underline">
            CONTACT
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
