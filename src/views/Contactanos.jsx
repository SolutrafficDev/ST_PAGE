import { SecondaryText, BodyText } from "../components/Typography";

const Contactanos = () => {
  return (
    <section id="contacto" className="section px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SecondaryText text="Contáctanos" />
        <BodyText text="Email: contacto@empresa.com" />
      </div>
    </section>
  );
};

export default Contactanos;
