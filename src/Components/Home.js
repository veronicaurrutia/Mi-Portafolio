import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Skills from './Skills';
import Contact from './Contact';

function Home() {
return (
  <section className="h-screen flex flex-col text-white">
  {/* Navbar siempre arriba */}
  <div className="w-full fixed top-0 bg-customBrown z-10">
    <Navbar />
  </div>

  {/* Contenido principal, ajustado hacia abajo */}
  <div className="flex-1 flex flex-col justify-end items-center px-8 md:px-20 lg:px-32 pt-16">
    {/* Contenido principal */}
    <div className="flex-1 flex flex-col justify-center items-center">
    <br />
      <h1 className="text-4xl md:text-6xl font-bold text-center">
        Hola! Soy
        <br />
        <span className="text-white">Veronica Urrutia</span>
      </h1>
      <div className="typing-container">
        <p className='typing-text animate-typing'>Desarrolladora Web Front-End</p>
        </div>
      <p className="text-lg md:text-xl text-white mt-4 text-center">
        Desarrolladora Frontend apasionada por los diseños intuitivos y
        estéticamente agradables. Busco crear proyectos que ofrezcan la mejor
        experiencia al usuario.
      </p>

      {/* Botones */}
      <div className="mt-8 flex gap-4">
        <button
          type="button"
          className="py-2.5 px-6 text-sm rounded-full font-semibold text-white transition-all duration-500 hover:bg-customBrown hover:shadow-xs hover:text-white"
        >
          Descargar CV
        </button>
        <button className="py-2.5 px-6 text-sm rounded-full font-semibold text-white transition-all duration-500 hover:bg-customBrown hover:shadow-xs hover:text-white">
          Contacto
        </button>
      </div>
    </div>

    <div className="flex-1 flex justify-center items-center">
      <div className="w-64 h-64 bg-amber-500 rounded-full overflow-hidden relative">
        {/* Imagen de perfil */}
        <img
          src="https://via.placeholder.com/200"
          alt="Veronica Urrutia"
          className="w-full h-full object-cover"
        />
      </div>
     </div>
    <Hero />
    <Skills />
    <Contact />
  </div>
</section>

  );
};

export default Home;
