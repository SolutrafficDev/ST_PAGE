import { SecondaryText, BodyText } from "../components/Typography";

const Productos = () => {
  return (
    <section id="productos" className="section px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SecondaryText text="Productos" />
        <BodyText text="Conoce nuestros productos destacados." />
      </div>
    </section>
  );
};

export default Productos;
