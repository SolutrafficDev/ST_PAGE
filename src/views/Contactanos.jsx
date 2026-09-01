import { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import SectionTitle from "../components/SectionTitle";
import { SecondaryText, BodyText } from "../components/Typography";

const Contactanos = () => {
  const [form, setForm] = useState({ nombre: "", email: "", telefono: "", area: "", mensaje: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError(false);

    try {
      const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: "service_8oz9109",
          template_id: "template_iqovkbt",
          user_id: "0CzDTy1_EbNPtX5xt",
          accessToken: "sn8zU0Hu14L0ViYfFrpYm",
          template_params: {
            name: form.nombre,
            email: form.email,
            phone: form.telefono,
            area: form.area,
            message: form.mensaje,
          },
        }),
      });

      if (!res.ok) throw new Error("Error al enviar");

      setSent(true);
      setForm({ nombre: "", email: "", telefono: "", area: "", mensaje: "" });
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
  };

  const closeModal = () => {
    setSent(false);
    setError(false);
  };

  return (
    <section id="contacto" className="section section-compact">
      <SectionTitle className="mt-2">Contáctanos</SectionTitle>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(sent || error) && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
            onClick={closeModal}
          >
            <div
              className="bg-white rounded-xl shadow-2xl p-10 sm:p-12 w-full max-w-4xl text-center animate-fade-in"
              onClick={(e) => e.stopPropagation()}
            >
              {sent ? (
                <>
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-3xl text-green-600">✓</span>
                  </div>
                  <BodyText
                    text="¡Mensaje enviado con éxito!"
                    weight="font-semibold"
                    className="mt-4 text-lg"
                  />
                  <p className="text-contrast-soft mt-2">
                    Pronto nos pondremos en contacto contigo.
                  </p>
                </>
              ) : (
                <>
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-3xl text-red-600">✕</span>
                  </div>
                  <BodyText
                    text="Error al enviar el mensaje"
                    weight="font-semibold"
                    className="mt-4 text-lg"
                  />
                  <p className="text-contrast-soft mt-2">
                    Hubo un problema al enviar tu mensaje. Intenta de nuevo.
                  </p>
                </>
              )}
              <div className="flex justify-center mt-8">
                <button
                  onClick={closeModal}
                  className="bg-primary text-accent px-8 py-3 rounded font-semibold cursor-pointer transition-all duration-200 hover:bg-secondary hover:text-primary"
                >
                  Aceptar
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          <div className="flex flex-col justify-between">
            <div className="space-y-5">
              <h3 className="text-h3-mobile md:text-h3 text-contrast font-semibold">
                Hablemos de tu proyecto
              </h3>
              <p className="text-contrast-soft leading-relaxed">
                Estamos listos para ayudarte a resolver los desafíos de movilidad de tu ciudad o empresa. 
                Cuéntanos más sobre lo que necesitas y te daremos una solución a la medida.
              </p>
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-contrast-soft">
                  <FaEnvelope className="text-primary text-lg shrink-0" />
                  <span>director@solutraffic.com</span>
                </div>
                <div className="flex items-center gap-3 text-contrast-soft">
                  <FaPhoneAlt className="text-primary text-lg shrink-0" />
                  <span>+57 318 2152340</span>
                </div>
                <div className="flex items-center gap-3 text-contrast-soft">
                  <FaMapMarkerAlt className="text-primary text-lg shrink-0" />
                  <span>Cali, Colombia</span>
                </div>
              </div>
            </div>

            <div className="mt-8 w-full h-52 sm:h-60 rounded-lg overflow-hidden shadow-sm">
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

          <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-foreground p-5 rounded-lg shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                  className="w-full border border-border rounded-md px-4 py-2.5 bg-background text-contrast outline-none focus:border-primary transition-colors"
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
                  className="w-full border border-border rounded-md px-4 py-2.5 bg-background text-contrast outline-none focus:border-primary transition-colors"
                  placeholder="correo@ejemplo.com"
                />
              </div>
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
                className="w-full border border-border rounded-md px-4 py-2.5 bg-background text-contrast outline-none focus:border-primary transition-colors"
                placeholder="+506 8888-8888"
              />
            </div>

            <div>
              <span className="block text-contrast font-medium mb-1.5">¿Sobre qué nos escribes?</span>
              <p className="text-contrast-soft text-sm mb-3">Selecciona una opción para dirigir tu mensaje al equipo correcto.</p>
              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2.5">
                {["Comercial", "Soporte", "Proyectos"].map((area) => (
                  <label
                    key={area}
                    className={`flex-1 flex items-center gap-3 border rounded-md px-4 py-2.5 cursor-pointer transition-colors sm:justify-center ${
                      form.area === area
                        ? "border-primary bg-primary/10"
                        : "border-border bg-background hover:border-primary/50"
                    }`}
                  >
                    <input
                      type="radio"
                      name="area"
                      value={area}
                      required
                      checked={form.area === area}
                      onChange={handleChange}
                      className="accent-primary w-4 h-4 cursor-pointer"
                    />
                    <span className={`text-contrast ${form.area === area ? "font-semibold" : ""}`}>{area}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label htmlFor="mensaje" className="block text-contrast font-medium mb-1.5">
                Mensaje
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows={4}
                required
                value={form.mensaje}
                onChange={handleChange}
                className="w-full border border-border rounded-md px-4 py-2.5 bg-background text-contrast outline-none focus:border-primary transition-colors resize-y"
                placeholder="Escribe tu mensaje..."
              />
            </div>

            <button
              type="submit"
              disabled={sending}
              className="mt-auto bg-primary text-accent px-8 py-3.5 rounded font-semibold cursor-pointer transition-all duration-200 hover:bg-secondary hover:text-primary text-base disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {sending ? "Enviando..." : "Enviar mensaje"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contactanos;
