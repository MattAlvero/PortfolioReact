import React from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import Button from "../atoms/Button";

type MobileMenuButtonProps = {
  onClick: () => void;
};

const MobileMenuButton = ({ onClick }: MobileMenuButtonProps) => {
  return (
    <Button onClick={onClick} className="lg:hidden">
      <Bars3Icon className="text-white text-2xl w-6" />
    </Button>
  );
};

export default MobileMenuButton;
