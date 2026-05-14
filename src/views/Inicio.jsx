import gifExample from "../assets/inicio.gif";
import { logos } from "../assets/logos";

const Inicio = () => {
  return (
    <section id="inicio" className="pt-0 border-t-2 border-accent">
      <div className="relative w-full mx-auto overflow-hidden flex justify-center items-center min-h-screen">
        <img
          src={gifExample}
          alt="Traffic simulation"
          className="w-full h-full object-cover object-center block"
        />
        <div className="absolute inset-0 bg-black/70 z-[1]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[2] flex flex-col items-center gap-5 px-4">
          <img
            src={logos.lightGrayFullt}
            alt="SolutrafficCra"
            className="w-[180px] sm:w-[240px] md:w-[320px] lg:w-[400px] h-auto"
          />
          <span className="text-primary text-[24px] md:text-[18px] text-center font-semibold">
            SOLUCIONES PARA LA MOVILIDAD
          </span>
          <button className="bg-primary text-accent border-none px-6 py-3 rounded font-semibold cursor-pointer transition-all duration-200 hover:bg-secondary hover:text-primary text-base">
            Contáctanos
          </button>
        </div>
      </div>
    </section>
  );
};

export default Inicio;
