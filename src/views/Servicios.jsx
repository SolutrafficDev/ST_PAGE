import { SecondaryText, BodyText } from "../components/Typography";

const Servicios = () => {
  return (
    <section id="servicios" className="section px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SecondaryText text="Servicios" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <div className="bg-foreground p-6 rounded-md shadow-sm">
            <BodyText text="Servicio 1" />
          </div>
          <div className="bg-foreground p-6 rounded-md shadow-sm">
            <BodyText text="Servicio 2" />
          </div>
          <div className="bg-foreground p-6 rounded-md shadow-sm">
            <BodyText text="Servicio 3" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Servicios;
