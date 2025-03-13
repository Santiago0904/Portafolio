import React from "react";

export const BtnLogo = ({ Icon, link }) => {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-black transition"
      >
        <Icon className="w-4 h-4" />
      </a>
    );
  };
  
  