import { useRef } from "react";
import ServiceCard from "../components/ServiceCard";
import servicios from "../data/servicios";

const Servicios = () => {
  const scrollRef = useRef(null);

  const scrollBy = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = Math.max(el.clientWidth / 3, 260);
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <section id="servicios" className="section bg-background section-flush-bottom">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left">
          <h1 className="text-h1-mobile md:text-h1 font-bold tracking-tight text-contrast mt-3">
            Servicios
          </h1>
        </div>
      </div>

      <div className="relative mt-8">
        <div
          ref={scrollRef}
          className="flex overflow-x-auto px-2 sm:px-4 pb-4 snap-x snap-mandatory no-scrollbar items-stretch"
        >
          {servicios.map((servicio, index) => (
            <div
              key={servicio.id}
              className="snap-start shrink-0 min-w-0 w-[85vw] sm:w-1/3 px-2 sm:px-3"
            >
              <ServiceCard servicio={servicio} index={index} />
            </div>
          ))}
        </div>

        <button
          onClick={() => scrollBy(-1)}
          aria-label="Anterior"
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-secondary hover:bg-accent text-primary rounded-full w-10 h-10 flex items-center justify-center shadow-md cursor-pointer transition-all duration-200 hover:scale-110 z-10"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={() => scrollBy(1)}
          aria-label="Siguiente"
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-secondary hover:bg-accent text-primary rounded-full w-10 h-10 flex items-center justify-center shadow-md cursor-pointer transition-all duration-200 hover:scale-110 z-10"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Servicios;