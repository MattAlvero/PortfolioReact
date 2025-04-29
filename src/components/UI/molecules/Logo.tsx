// src/components/molecules/Logo.tsx
import React from "react";
import Text from "../atoms/Text";

type LogoProps = {
  text: string;
  className?: string;
};

const Logo = ({ text, className = "" }: LogoProps) => {
  return <Text className={`text-2xl font-bold ${className}`}>{text}</Text>;
};

export default Logo;
