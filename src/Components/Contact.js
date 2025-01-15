import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const formRef = useRef(null); // Asegúrate de usar el ref correctamente

 
   useEffect(() => {
     const observer = new IntersectionObserver(
       (entries) => {
         const entry = entries[0];
         if (entry.isIntersecting) {
           setIsVisible(true); // Activa el efecto cuando la sección es visible
         } else {
           setIsVisible(false); // Desactiva el efecto cuando la sección deja de ser visible
         }
       },
      { threshold: 0.3 } // Aparece cuando el 30% de la sección está visible
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const sendEmail = (e) => {
    e.preventDefault(); // Previene la recarga de la página al enviar el formulario

    emailjs
      .sendForm(
        "service_etx4xsn", 
        "template_fwwe4rp", 
        formRef.current, 
        "AXSfsy6k1iJbhFGJD" 
      )
      .then(
        (result) => {
          console.log("Correo enviado:", result.text);
          // alert("Mensaje enviado correctamente.");
        },
        (error) => {
          console.error("Error al enviar el correo:", error.text);
          // alert("Hubo un error al enviar el mensaje. Inténtalo nuevamente.");
        }
      );

    // Limpia los campos del formulario
    formRef.current.reset();
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="bg-brownDrak text-white py-16 px-8 md:px-20 lg:px-32 min-h-screen flex justify-center items-center"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-customBrown to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-customBrown to-transparent"></div>

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
        <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
          <input
            type="text"
            name="nombre" // Nombre del campo para la plantilla de EmailJS
            placeholder="Nombre"
            className="w-full px-4 py-2 rounded-lg border border-gray-400 text-black focus:outline-none focus:ring-2 focus:ring-gray-700"
            required
          />
          <input
            type="text"
            name="asunto" // Nombre del campo para la plantilla de EmailJS
            placeholder="Asunto"
            className="w-full px-4 py-2 rounded-lg border border-gray-400 text-black focus:outline-none focus:ring-2 focus:ring-gray-700"
            required
          />
          <textarea
            name="mensaje" // Nombre del campo para la plantilla de EmailJS
            placeholder="Mensaje | Message"
            rows="4"
            className="w-full px-4 py-2 rounded-lg border border-gray-400 text-black focus:outline-none focus:ring-2 focus:ring-gray-700"
            required
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
