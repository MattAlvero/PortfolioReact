// src/components/organisms/Navbar.tsx
import React, { useState } from "react";
import Logo from "../molecules/Logo";
import NavbarLink from "../molecules/NavbarLink"; // Use NavbarLink here
import MobileMenuButton from "../molecules/MobileMenuButton";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
      {/* Logo */}
      <Logo text="Matthew Alvero" className="text-white" />

      {/* Mobile menu button */}
      <MobileMenuButton onClick={toggleMobileMenu} />

      {/* Navbar links (desktop) */}
      <div className="hidden lg:flex space-x-4">
        <NavbarLink to="/" label="About" className="text-white hover:text-gray-300" />
        <NavbarLink to="/experience" label="Experience" className="text-white hover:text-gray-300" />
        <NavbarLink to="/projects" label="Projects" className="text-white hover:text-gray-300" />
        <NavbarLink to="/contact" label="Contact" className="text-white hover:text-gray-300" />
      </div>

      {/* Mobile menu (when screen is small and button is clicked) */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-gray-700 text-white p-4">
          <NavbarLink to="/" label="About" className="block py-2" />
          <NavbarLink to="/experience" label="Experience" className="block py-2" />
          <NavbarLink to="/projects" label="Projects" className="block py-2" />
          <NavbarLink to="/contact" label="Contact" className="block py-2" />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
