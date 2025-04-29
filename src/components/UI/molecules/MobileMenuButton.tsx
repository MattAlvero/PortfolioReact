import React from "react";
import Icon from "../atoms/Icon";
import Button from "../atoms/Button";

type MobileMenuButtonProps = {
  onClick: () => void;
};

const MobileMenuButton = ({ onClick }: MobileMenuButtonProps) => {
  return (
    <Button onClick={onClick} className="lg:hidden">
      <Icon icon="fa fa-bars" className="text-white text-2xl" />
    </Button>
  );
};

export default MobileMenuButton;
