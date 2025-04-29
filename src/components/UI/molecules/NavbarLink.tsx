import React from "react";
import Button from "../atoms/Button";
import Text from "../atoms/Text";

type NavbarLinkProps = {
  label: string;
  onClick?: () => void;
  className?: string;
};

const NavbarLink = ({ label, onClick, className = "" }: NavbarLinkProps) => {
  return (
    <Button onClick={onClick} className={`text-lg ${className}`}>
      <Text>{label}</Text>
    </Button>
  );
};

export default NavbarLink;
