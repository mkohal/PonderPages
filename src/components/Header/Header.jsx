import React, { useState } from "react";
import { LogoutBtn } from "../index";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import logoImage from "../../assets/logo.png";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = {
    main: [
      { name: "Home", slug: "/", active: true },
      { name: "About", slug: "/about", active: true },
      { name: "Contact", slug: "/contact", active: true },
    ],
    auth: [
      { name: "Login", slug: "/login", active: !authStatus },
      { name: "Signup", slug: "/signup", active: !authStatus },
      { name: "My Feed", slug: "/my-feed", active: authStatus },
      { name: "My Posts", slug: "/my-posts", active: authStatus },
      { name: "Add Post", slug: "/add-post", active: authStatus },
    ],
  };

  return (
    <header className="relative z-50 px-9 py-2 bg-white shadow-md">
      <nav className="flex justify-between items-center">
        {/* Left: Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img src={logoImage} alt="Logo" className="h-20" />
          </Link>
        </div>

        {/* Center: Main Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.main.map((item) =>
            item.active ? (
              <button
                key={item.name}
                onClick={() => navigate(item.slug)}
                className={`text-lg font-semibold text-gray-800 px-3 py-2 transition-all ${
                  location.pathname === item.slug
                    ? "underline underline-offset-4 decoration-2 decoration-black"
                    : "hover:underline"
                }`}
              >
                {item.name}
              </button>
            ) : null
          )}
        </div>

        {/* Right: Auth & Other Options */}
        <div className="hidden lg:flex items-center gap-6">
          {navItems.auth.map((item) =>
            item.active ? (
              <button
                key={item.name}
                onClick={() => navigate(item.slug)}
                className={`text-lg font-semibold text-white px-4 py-2 rounded-xl transition-all ${
                  location.pathname === item.slug
                    ? "bg-blue-600 hover:bg-blue-700"
                    : "bg-gray-500 hover:bg-gray-600"
                }`}
              >
                {item.name}
              </button>
            ) : null
          )}
          {authStatus && (
            <LogoutBtn className="text-lg font-bold text-white bg-red-500 hover:bg-red-600 px-4 py-2 rounded-xl transition-all" />
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={toggleMobileMenu} className="text-3xl text-black">
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-[100%] mt-2 left-1/2 transform -translate-x-1/2 w-[90%] max-w-[320px] bg-white shadow-lg rounded-xl z-50 p-4 space-y-2">
          <ul className="flex flex-col items-center space-y-2">
            {navItems.main.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => {
                      navigate(item.slug);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`text-base font-medium text-gray-800 px-3 py-2 rounded-lg transition-all ${
                      location.pathname === item.slug
                        ? "underline underline-offset-4 decoration-2 decoration-black"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
          </ul>
          <hr className="border-gray-300" />
          <ul className="flex flex-col items-center space-y-2">
            {navItems.auth.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => {
                      navigate(item.slug);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`text-base font-medium text-white px-3 py-2 rounded-lg transition-all w-full text-center ${
                      location.pathname === item.slug
                        ? "bg-blue-600 hover:bg-blue-700"
                        : "bg-gray-500 hover:bg-gray-600"
                    }`}
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && <LogoutBtn />}
          </ul>
        </div>
      )}
    </header>
  );
}
