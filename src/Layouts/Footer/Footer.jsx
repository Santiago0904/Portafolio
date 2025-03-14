import React from 'react';
import { EmailBtn } from '../../Components/EmailBtn/EmailBtn';
import { BtnLogo } from '../../Components/BtnLogo/BtnLogo';
import { FaGithub, FaLinkedin, FaFacebookF, FaInstagram } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-[#7F7F7F] text-white w-full p-4 flex flex-col sm:flex-row items-center justify-between border-t border-gray-700 mt-auto">
      {/* Nombre */}
      <span className="text-sm font-semibold text-center sm:text-left">
        © Santiago Bustos Diaz 2025 Armenia-Quindio Sena-Centro De Comercio Y Turismo
      </span>

      {/* Contacto e iconos */}
      <div className="flex items-center gap-4 mt-2 sm:mt-0">
        {/* Correo */}
        <EmailBtn />
        {/* Íconos */}
        <div className="flex gap-2">
          <BtnLogo Icon={FaGithub} link="https://github.com/Santiago0904" />
          <BtnLogo Icon={FaLinkedin} link="https://github.com/Santiago0904" />
          <BtnLogo Icon={FaFacebookF} link="https://github.com/Santiago0904" />
          <BtnLogo Icon={FaInstagram} link="https://github.com/Santiago0904" />
        </div>
      </div>
    </footer>
  );
};

