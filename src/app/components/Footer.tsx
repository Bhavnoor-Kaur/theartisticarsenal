// Footer.tsx
import React from "react";
import { FaEnvelope, FaInstagram, FaPager, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-indigo-dye text-white py-4 h-64">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left section */}
        <div className="text-xs flex flex-col py-24 ">
            <p>© 2024 The Artistic Arsenal</p>
            <p>All Rights Reserved</p>
        </div>

        {/* TODO: Add Center section Logo*/}

        {/* Right section - Social Icons */}
        <div className="flex space-x-4 py-24">
          <a href="#" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="#" aria-label="Instagram">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
