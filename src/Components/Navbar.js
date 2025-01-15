import React, { useState, useEffect, useRef } from "react";
import Logo from "./img/logo2.jpg";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  // Función para cerrar el menú al hacer clic fuera de él
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const closeMenu = () => {
    setIsActive(false); // Cierra el menú
  };

  return (
    <nav className="w-full fixed top-0 border-b border-customBrown z-10 bg-brownDrak">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Imagen como enlace al inicio */}
        <a
          href="#home"
          className="w-20 rounded-full overflow-hidden cursor-pointer"
        >
          <img
            src={Logo}
            alt="Logo"
            className="w-full h-2/12 lg-h-full  transition-transform duration-300"
          />
        </a>

        {/* Botón hamburguesa */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
        >
          <svg
            className="w-8 h-8"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Lista de navegación */}
        <ul
          ref={menuRef}
          className={`${
            isActive ? "block" : "hidden"
          } absolute top-16 left-0 w-full bg-brownDrak md:static md:flex md:space-x-6 text-lg`}
        >
          <li>
            <a
              href="#home"
              onClick={closeMenu} // Cierra el menú al hacer clic
              className="block py-2 px-4 hover:text-customBrown transition duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={closeMenu} // Cierra el menú al hacer clic
              className="block py-2 px-4 hover:text-customBrown transition duration-300"
            >
              Sobre mí
            </a>
          </li>
          <li>
            <a
              href="#skills"
              onClick={closeMenu} // Cierra el menú al hacer clic
              className="block py-2 px-4 hover:text-customBrown transition duration-300"
            >
              Habilidades
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={closeMenu} // Cierra el menú al hacer clic
              className="block py-2 px-4 hover:text-customBrown transition duration-300"
            >
              Proyectos
            </a>
          </li>
          <li>
            <a
              href="#jobs"
              onClick={closeMenu} // Cierra el menú al hacer clic
              className="block py-2 px-4 hover:text-customBrown transition duration-300"
            >
              Trabajo
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={closeMenu} // Cierra el menú al hacer clic
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
