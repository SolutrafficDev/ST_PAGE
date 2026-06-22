import { SecondaryText } from "../components/Typography";
import ServiceCard from "../components/ServiceCard";
import servicios from "../data/servicios";

const Servicios = () => {
  return (
    <section id="servicios" className="section px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SecondaryText text="Servicios" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {servicios.map((servicio, index) => (
            <ServiceCard key={servicio.id} servicio={servicio} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Servicios;
