import React, { useState } from "react";
import Logo from "./img/logo2.jpg";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav className="w-full fixed top-0 border-b border-customBrown z-10 bg-brownDrak">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Imagen como enlace al inicio */}
        <a
          href="#home"
          className="w-20 h-20 rounded-full overflow-hidden cursor-pointer"
        >
          <img
            src={Logo}
            alt="Logo"
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          />
        </a>

        {/* Lista de navegación */}
        <ul
          className={`${
            isActive ? "block" : "hidden"
          } md:flex md:space-x-6 text-lg`}
        >
          <li>
            <a
              href="#home"
              className="block py-2 px-4 hover:text-customBrown transition duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="block py-2 px-4 hover:text-customBrown transition duration-300"
            >
              Sobre mí
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="block py-2 px-4 hover:text-customBrown transition duration-300"
            >
              Habilidades
            </a>
          </li>
          <li>
            <a
              href="#formacion"
              className="block py-2 px-4 hover:text-customBrown transition duration-300"
            >
              Formación
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="block py-2 px-4 hover:text-customBrown transition duration-300"
            >
              Proyectos
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="block py-2 px-4 hover:text-customBrown transition duration-300"
            >
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
