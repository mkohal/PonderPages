import React from "react";
import logoImage from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-white p-4 md:py-6 border-t border-gray-200 w-full">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-screen-xl mx-auto px-4">
        <a href="#">
          <img src={logoImage} className="h-20" alt="Ponder Pages Logo" />
        </a>
        <ul className="flex flex-wrap items-center text-sm font-medium text-gray-600">
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              Licensing
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <hr className="my-4 border-gray-300" />
      <p className="text-sm text-gray-600 text-center">
        © 2025 <span className="font-semibold">Ponder Pages™</span>. All Rights
        Reserved.
      </p>
    </footer>
  );
};

export default Footer;
