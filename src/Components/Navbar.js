import React, { useState } from 'react';
import Hero from './Hero';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Función para alternar la clase 'dark' en el elemento HTML
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };
  const [menuActive, setMenuActive] = useState(false);

  // Función para alternar el menú
  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <nav className="w-full fixed top-0  border-b border-customBrown z-10">
    <div className="container mx-auto flex justify-between items-center p-4">
      <h1 className="text-3xl font-serif font-semibold text-white">VU</h1>
        {/* Botón de Dark Mode */}
    <button
      onClick={toggleDarkMode}
      className="py-2.5 px-6 text-sm rounded-full font-semibold text-white transition-all duration-500 hover:bg-indigo-100 hover:shadow-xs hover:text-customBrown"
    >
      {isDarkMode ? 'Desactivar Modo Oscuro' : 'Activar Modo Oscuro'}
    </button>


        {/* Botón de menú para móviles */}
        <button
          onClick={toggleMenu}
          className="block md:hidden text-white focus:outline-none"
        >
          {menuActive ? "Cerrar" : "Menú"}
        </button>
        <ul
          className={`${
            menuActive ? "block" : "hidden"
          } md:flex md:space-x-6 text-lg`}
        >
        <li>
          <a href='/Hero' className="block py-2 px-4 hover:text-customBrown transition duration-300"> Sobre mí</a>
          </li>
        <li>
          <a href='/Skills' className="block py-2 px-4 hover:text-customBrown transition duration-300">Habilidades
            </a> 
        </li>
        <li>
          <a href='#' className="block py-2 px-4 hover:text-customBrown transition duration-300">Formación
            </a> 
        </li>
        <li>
          <a href='#' className="block py-2 px-4 hover:text-customBrown transition duration-300">Proyectos
            </a> 
        </li>
        <li>
          <a href='#' className="block py-2 px-4 hover:text-customBrown transition duration-300">Contacto
            </a> 
        </li>
       
      </ul>
      </div>
    </nav>
  )
};

export default Navbar;
