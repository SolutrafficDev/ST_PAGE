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
                  <span>contacto@solutrafficcra.com</span>
                </div>
                <div className="flex items-center gap-3 text-contrast-soft">
                  <span className="text-primary text-lg">📞</span>
                  <span>+506 8888-8888</span>
                </div>
                <div className="flex items-center gap-3 text-contrast-soft">
                  <span className="text-primary text-lg">📍</span>
                  <span>San José, Costa Rica</span>
                </div>
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
