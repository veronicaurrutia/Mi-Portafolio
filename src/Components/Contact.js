import React, { useEffect, useRef, useState } from "react";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 } // Aparece cuando el 30% de la sección está visible
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="bg-brownDrak text-white py-16 px-8 md:px-20 lg:px-32 min-h-screen flex justify-center items-center"
    >
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-customBrown to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-customBrown to-transparent"></div>
            
      {/* Formulario de contacto centrado */}
      <div
        className={`w-full max-w-lg bg-[#b38b7d] p-8 rounded-lg shadow-lg transition-all duration-1000 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
        }`}
      >
        <h2 className="text-4xl font-bold mb-6 text-center">Contacto</h2>
        <p className="mb-6 text-center text-gray-200">
          Completa el siguiente formulario y me pondré en contacto contigo lo
          antes posible.
        </p>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Nombre | Name"
            className="w-full px-4 py-2 rounded-lg border border-gray-400 text-black focus:outline-none focus:ring-2 focus:ring-gray-700"
          />
          <input
            type="email"
            placeholder="E-mail"
            className="w-full px-4 py-2 rounded-lg border border-gray-400 text-black focus:outline-none focus:ring-2 focus:ring-gray-700"
          />
          <input
            type="text"
            placeholder="Asunto | Subject"
            className="w-full px-4 py-2 rounded-lg border border-gray-400 text-black focus:outline-none focus:ring-2 focus:ring-gray-700"
          />
          <textarea
            placeholder="Mensaje | Message"
            rows="4"
            className="w-full px-4 py-2 rounded-lg border border-gray-400 text-black focus:outline-none focus:ring-2 focus:ring-gray-700"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-[#8c6e63] text-white py-2 rounded-lg hover:bg-[#6c4f4a] transition-all duration-300"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
