import React from "react";
import { Link } from "react-router"; // Import Link from react-router-dom

type NavbarLinkProps = {
  to: string;
  label: string;
  className?: string;
};

const NavbarLink = ({ to, label, className = "" }: NavbarLinkProps) => {
  return (
    <Link to={to} className={`text-lg ${className}`}>
      {label}
    </Link>
  );
};

export default NavbarLink;