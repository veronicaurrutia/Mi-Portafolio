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
      <div className="h-screen flex flex-col justify-center items-center px-8 md:px-20 lg:px-32 pt-16">
        <div className="flex flex-col md:flex-row-reverse justify-between items-center w-full max-w-6xl">
          {/* Texto con efecto */}
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold animate-fade-in">
              Hola! Soy
              <br />
              <span className="text-white animate-zoom-in-out">Veronica Urrutia</span>
            </h1>
            <div className="typing-container">
              <p className="typing-text animate-typing mt-4">
                Desarrolladora Web Front-End
              </p>
            </div>
            <p className="text-lg md:text-xl text-white mt-4 animate-zoom-in-out">
              Desarrolladora Frontend apasionada por los diseños intuitivos y
              estéticamente agradables. Busco crear proyectos que ofrezcan la
              mejor experiencia al usuario.
            </p>
            {/* Botones */}
            <div className="mt-8 flex gap-4">
              <button className="py-2.5 px-6 text-sm rounded-full font-semibold text-white transition-all duration-500 hover:bg-customBrown hover:shadow-xs hover:text-white">
                <a
                  href="/CV.pdf" // Ruta del archivo
                  download="Mi_Curriculum.pdf"
                >
                  Descargar CV
                </a>
              </button>
              <button className="py-2.5 px-6 text-sm rounded-full font-semibold text-white transition-all duration-500 hover:bg-customBrown hover:shadow-xs hover:text-white">
                <a
                  href="https://www.linkedin.com/in/veronica-urrutia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative"
                >
                  Linkedin
                </a>
              </button>
            </div>
          </div>

          {/* Imagen de perfil con efecto */}
          <div className="md:w-1/2 flex justify-center items-center">
            <div className="w-64 h-64 rounded-full overflow-hidden group">
              <img
                src={Yo}
                className="w-full h-full object-cover animate-zoom-in-out group-hover:scale-110 transition-transform duration-1000"
                alt="Yo"
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
