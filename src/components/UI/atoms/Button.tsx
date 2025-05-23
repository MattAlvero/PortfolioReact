import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

const Button = ({ children, onClick, className = "" }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg text-white bg-blue-500 hover:bg-blue-600 focus:outline-none ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
