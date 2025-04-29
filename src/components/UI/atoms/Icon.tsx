import React from "react";

type IconProps = {
  icon: string;
  className?: string;
};

const Icon = ({ icon, className = "" }: IconProps) => {
  return <i className={`${icon} ${className}`} />;
};

export default Icon;
