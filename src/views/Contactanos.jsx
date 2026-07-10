import { useState } from "react";
import { SecondaryText, BodyText } from "../components/Typography";

const Contactanos = () => {
  const [form, setForm] = useState({ nombre: "", email: "", telefono: "", mensaje: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contacto" className="section px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
  
        {sent ? (
          <div className="mt-12 max-w-xl mx-auto text-center bg-success-background text-contrast p-10 rounded-lg animate-fade-in">
            <span className="text-5xl">✓</span>
            <BodyText
              text="¡Mensaje enviado con éxito!"
              weight="font-semibold"
              className="mt-4 text-lg"
            />
            <p className="text-contrast-soft mt-2">
              Pronto nos pondremos en contacto contigo.
            </p>
            <button
              onClick={() => { setSent(false); setForm({ nombre: "", email: "", telefono: "", mensaje: "" }); }}
              className="mt-6 text-primary font-semibold underline cursor-pointer"
            >
              Enviar otro mensaje
            </button>
          </div>
        ) : (
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="flex flex-col justify-center space-y-6">
              <h3 className="text-h3-mobile md:text-h3 text-contrast font-semibold">
                Hablemos de tu proyecto
              </h3>
              <p className="text-contrast-soft leading-relaxed">
                Estamos listos para ayudarte a resolver los desafíos de movilidad de tu ciudad o empresa. 
                Cuéntanos más sobre lo que necesitas y te daremos una solución a la medida.
              </p>
              <div className="space-y-3 pt-4">
                <div className="flex items-center gap-3 text-contrast-soft">
                  <span className="text-primary text-lg">📧</span>
                  <span>director@solutraffic.com</span>
                </div>
                <div className="flex items-center gap-3 text-contrast-soft">
                  <span className="text-primary text-lg">📞</span>
                  <span>+57 318 2152340</span>
                </div>
                <div className="flex items-center gap-3 text-contrast-soft">
                  <span className="text-primary text-lg">📍</span>
                  <span>Cali, Colombia</span>
                </div>
              </div>

              <div className="mt-6 w-full aspect-video rounded-lg overflow-hidden shadow-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.123!2d-76.5248616!3d3.4390817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a6f4ab67647f%3A0x304ed78e87b1675d!2sSolutraffic+Ingenieria+S.A.S!5e0!3m2!1sen!2sco!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación Solutraffic"
                />
              </div>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6 bg-foreground p-8 rounded-lg shadow-sm">
              <div>
                <label htmlFor="nombre" className="block text-contrast font-medium mb-1.5">
                  Nombre
                </label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  required
                  value={form.nombre}
                  onChange={handleChange}
                  className="w-full border border-border rounded-md px-4 py-3 bg-background text-contrast outline-none focus:border-primary transition-colors"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-contrast font-medium mb-1.5">
                  Correo electrónico
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full border border-border rounded-md px-4 py-3 bg-background text-contrast outline-none focus:border-primary transition-colors"
                  placeholder="correo@ejemplo.com"
                />
              </div>

              <div>
                <label htmlFor="telefono" className="block text-contrast font-medium mb-1.5">
                  Teléfono
                </label>
                <input
                  id="telefono"
                  name="telefono"
                  type="tel"
                  value={form.telefono}
                  onChange={handleChange}
                  className="w-full border border-border rounded-md px-4 py-3 bg-background text-contrast outline-none focus:border-primary transition-colors"
                  placeholder="+506 8888-8888"
                />
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-contrast font-medium mb-1.5">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={5}
                  required
                  value={form.mensaje}
                  onChange={handleChange}
                  className="w-full border border-border rounded-md px-4 py-3 bg-background text-contrast outline-none focus:border-primary transition-colors resize-y"
                  placeholder="Escribe tu mensaje..."
                />
              </div>

              <button
                type="submit"
                className="bg-primary text-accent px-8 py-3.5 rounded font-semibold cursor-pointer transition-all duration-200 hover:bg-secondary hover:text-primary text-base"
              >
                Enviar mensaje
              </button>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contactanos;
