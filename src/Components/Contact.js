import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null
  const sectionRef = useRef(null);
  const formRef = useRef(null);

 
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
    e.preventDefault();
    setSubmitStatus(null);

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
          setSubmitStatus('success');
          formRef.current.reset();
        },
        (error) => {
          console.error("Error al enviar el correo:", error.text);
          setSubmitStatus('error');
        }
      );
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
        className={`w-full max-w-lg mx-auto bg-[#b38b7d] p-6 sm:p-8 rounded-lg shadow-lg transition-all duration-1000 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
        }`}
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-center">Contacto</h2>
        <p className="mb-4 sm:mb-6 text-center text-gray-200 text-sm sm:text-base">
          Completa el siguiente formulario y me pondré en contacto contigo lo
          antes posible.
        </p>
        
        {/* Status messages */}
        {submitStatus === 'success' && (
          <div className="mb-4 p-3 bg-green-600 text-white rounded-lg text-center">
            ¡Mensaje enviado correctamente! Te responderé pronto.
          </div>
        )}
        
        {submitStatus === 'error' && (
          <div className="mb-4 p-3 bg-red-600 text-white rounded-lg text-center">
            Hubo un error al enviar el mensaje. Por favor, inténtalo nuevamente.
          </div>
        )}
        <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
          <input
            type="text"
            name="nombre"
            placeholder="Nombre completo"
            className="w-full px-4 py-2 rounded-lg border border-gray-400 text-black focus:outline-none focus:ring-2 focus:ring-gray-700"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            className="w-full px-4 py-2 rounded-lg border border-gray-400 text-black focus:outline-none focus:ring-2 focus:ring-gray-700"
            required
          />
          <input
            type="text"
            name="asunto"
            placeholder="Asunto"
            className="w-full px-4 py-2 rounded-lg border border-gray-400 text-black focus:outline-none focus:ring-2 focus:ring-gray-700"
            required
          />
          <textarea
            name="mensaje"
            placeholder="Mensaje"
            rows="4"
            className="w-full px-4 py-2 rounded-lg border border-gray-400 text-black focus:outline-none focus:ring-2 focus:ring-gray-700"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-[#8c6e63] text-white py-2 rounded-lg hover:bg-[#6c4f4a] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-700"
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
