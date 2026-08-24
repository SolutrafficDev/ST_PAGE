import { SecondaryText } from "../components/Typography";
import ServiceCard from "../components/ServiceCard";
import servicios from "../data/servicios";

const Servicios = () => {
  return (
    <section id="servicios" className="section section-blue px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
         <div className="text-left">
            <h1 className="text-h1-mobile md:text-h1 font-bold tracking-tight text-contrast-light mt-3">
              Servicios
            </h1>
          </div>
        <div className="mt-8">
          <div className="flex gap-8 overflow-x-auto pb-4 snap-x snap-mandatory no-scrollbar items-stretch">
            {servicios.map((servicio, index) => (
              <div
                key={servicio.id}
                className="snap-start shrink-0 w-[85vw] sm:w-[70vw] lg:w-[55vw]"
              >
                <ServiceCard servicio={servicio} index={index} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Servicios;
