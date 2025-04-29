import React, { useState } from "react";
import Logo from "../molecules/Logo";
import NavbarLink from "../molecules/NavbarLink";
import SearchBar from "../molecules/SearchBar";
import MobileMenuButton from "../molecules/MobileMenuButton";

type NavbarProps = {
  onSearch: (query: string) => void;
};

const Navbar = ({ onSearch }: NavbarProps) => {
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

      {/* Search bar (desktop) */}
      <div className="hidden lg:block">
        <SearchBar placeholder="Search..." onSearch={onSearch} />
      </div>

      {/* Navbar links (desktop) */}
      <div className="hidden lg:flex space-x-4">
          <NavbarLink label="About" />
          <NavbarLink label="Experience" />
          <NavbarLink label="Projects" />
          <NavbarLink label="Contact" />
      </div>

      {/* Mobile menu (when screen is small and button is clicked) */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-gray-700 text-white p-4">
          <NavbarLink label="About" />
          <NavbarLink label="Experience" />
          <NavbarLink label="Projects" />
          <NavbarLink label="Contact" />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
