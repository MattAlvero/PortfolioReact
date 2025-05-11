import React from "react";
import { Link } from "react-router"; // Import Link from react-router-dom

type NavbarLinkProps = {
  to: string;
  label: string;
  className?: string;
  onClick?: () => void;
};

const NavbarLink = ({ to, label, className = "", onClick }: NavbarLinkProps) => {
  return (
    <Link to={to} className={`text-lg ${className}`} onClick={onClick}>
      {label}
    </Link>
  );
};

export default NavbarLink;