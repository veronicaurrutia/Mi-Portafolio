import React from "react";
import Navbar from "./Navbar";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";
import Projects from "./Projects";
import Jobs from "./jobs";
import Yo from "./img/yo.jpeg";
import ScrollToTopButton from "./ScrollToTopButton";

function Home() {
  return (
    <section id="home" className="text-white">
      {/* Navbar siempre arriba */}
      <div className="w-full fixed top-0 z-10">
        <Navbar />
      </div>

      {/* Contenido principal */}
      <div className="h-screen flex flex-col justify-center items-center px-4 sm:px-8 md:px-20 lg:px-32 pt-16">
        <div className="flex flex-col lg:flex-row-reverse justify-between items-center w-full max-w-6xl gap-8">
          {/* Texto con efecto */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold animate-fade-in">
              ¡Hola! Soy
              <br />
              <span className="text-white animate-zoom-in-out">Verónica Urrutia</span>
            </h1>
            <div className="typing-container">
              <p className="typing-text animate-typing mt-4 text-sm sm:text-base lg:text-lg">
                Desarrolladora Web Frontend
              </p>
            </div>
            <p className="text-base sm:text-lg md:text-xl text-white mt-4 animate-zoom-in-out leading-relaxed">
              Desarrolladora Frontend especializada en crear experiencias digitales 
              intuitivas y atractivas. Me apasiona desarrollar aplicaciones web modernas 
              que ofrezcan la mejor experiencia al usuario, combinando funcionalidad 
              excepcional con diseño estético.
            </p>
            {/* Botones */}
            <div className="mt-6 sm:mt-8 flex gap-3 sm:gap-4 flex-wrap justify-center lg:justify-start">
              <button className="py-2 sm:py-2.5 px-4 sm:px-6 text-sm rounded-full font-semibold text-white bg-customBrown transition-all duration-500 hover:bg-opacity-80 hover:shadow-lg">
                <a
                  href="https://www.linkedin.com/in/veronica-urrutia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  LinkedIn
                </a>
              </button>
              <button className="py-2 sm:py-2.5 px-4 sm:px-6 text-sm rounded-full font-semibold text-white border border-customBrown transition-all duration-500 hover:bg-customBrown hover:shadow-lg">
                <a
                  href="mailto:vero.urrutia.b@gmail.com"
                  className="block"
                >
                  Contáctame
                </a>
              </button>
            </div>
          </div>

          {/* Imagen de perfil con efecto */}
          <div className="lg:w-1/2 flex justify-center items-center">
            <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden group">
              <img
                src={Yo}
                className="w-full h-full object-cover animate-zoom-in-out group-hover:scale-110 transition-transform duration-1000"
                alt="Verónica Urrutia - Desarrolladora Web Frontend"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-screen flex items-center justify-center bg-darkFond transition-all duration-1000">
        <About />
      </div>
      <div className="min-h-screen flex items-center justify-center bg-brownDrak transition-all duration-1000">
        <Skills />
      </div>
      <div className="min-h-screen flex items-center justify-center bg-darkFond transition-all duration-1000">
        <Projects />
      </div>
      <div className="min-h-screen flex items-center justify-center bg-brownDrak transition-all duration-1000">
        <Jobs />
      </div>
      <div className="min-h-screen flex items-center justify-center bg-brownDrak transition-all duration-1000">
        <Contact />
      </div>

      {/* Botón para subir arriba */}
      <ScrollToTopButton />
    </section>
  );
}

export default Home;
