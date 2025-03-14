import React, { useState } from "react";
import { ItemNavBar } from "../../Components/ItemNavBar/ItemNavBar";
import { NavBar } from "../NavBar/NavBar";
import { Title } from "../../Components/Title/Title";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="top-0 left-0 z-50 flex w-full h-[5rem] bg-[#7F7F7F] items-center justify-between px-10 py-4 text-white shadow-md sticky">
      {/* Logo */}
      <img
        src="src/assets/img/logo.png"
        alt="Logo"
        className="h-12 w-auto rounded-full border-2 border-white"
      />

      {/* Título */}
      <Title content="PORTAFOLIO" styles="text-3xl sm:text-2xl md:text-xl font-bold tracking-wide text-white text-center break-words" />

      {/* Botón del menú hamburguesa */}
      <button
        className="md:hidden text-white text-2xl"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Abrir menú"
      >
        ☰
      </button>

      {/* Menú de navegación */}
      <NavBar>
        <ul
          className={`flex items-center space-x-8 md:flex ${
            isOpen
              ? "max-md:flex flex-col space-x-0 space-y-4 absolute top-[4.1rem] left-0 bg-[#7F7F7F] w-full py-4 shadow-lg transition-all duration-300"
              : "max-md:hidden"
          }`}
        >
          <ItemNavBar route="/" content="Home" />
          <ItemNavBar route="/Skills" content="Habilidades técnicas" />
          <ItemNavBar route="/SocialAbilities" content="Habilidades sociales" />
          <ItemNavBar route="/Studies" content="Estudios" />
          <ItemNavBar route="/ProfesionalExperience" content="Experiencia Profesional" />
        </ul>
      </NavBar>
    </header>
  );
};
