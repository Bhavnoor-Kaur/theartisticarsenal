import React from "react";
import Link from "next/link"; // For Next.js routing
import { FaInstagram } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full flex items-center justify-between p-6 z-20">
      {/* Logo */}
      <div className="flex items-center">
        <img src="/shortcuticon.jpg" alt="Logo" className="h-10 mr-3" />
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-8">
        <Link href="/about" legacyBehavior>
          <a className="text-white hover:text-yellow-50">About</a>
        </Link>
        <Link href="/artworks" legacyBehavior>
          <a className="text-white hover:text-yellow-50">Art Works</a>
        </Link>
        <Link href="/artclassest" legacyBehavior>
          <a className="text-white hover:text-yellow-50">Art Classes</a>
        </Link>
        <Link href="/workshops" legacyBehavior>
          <a className="text-white hover:text-yellow-50">Workshops</a>
        </Link>
        <Link href="/contact" legacyBehavior>
          <a className="text-white hover:text-yellow-50">Contact</a>
        </Link>
      </div>

      {/* Social Media Icons */}
      <div className="flex space-x-2">
        <a href="https://www.instagram.com/theartisticarsenal/?hl=en" target="_blank" rel="noreferrer" className="text-white hover:text-yellow-50">
            <FaInstagram />
        </a>
        {/* Link to email */}
        <a href="mailto:theartisticarsenalco@gmail.com" target="_blank" rel="noreferrer" className="text-white hover:text-yellow-50">
            <MdOutlineMail />
        </a>

      </div>
      
    </nav>
  );
}

export default Navbar;
