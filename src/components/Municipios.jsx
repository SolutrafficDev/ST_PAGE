import { useState, useEffect, useRef } from "react";

const ciudades = [
  { nombre: "Bucaramanga", pais: "Colombia" },
  { nombre: "Cali", pais: "Colombia" },
  { nombre: "Candelaria", pais: "Colombia" },
  { nombre: "Dosquebradas", pais: "Colombia" },
  { nombre: "Garzón", pais: "Colombia" },
  { nombre: "Girardot", pais: "Colombia" },
  { nombre: "Jamundí", pais: "Colombia" },
  { nombre: "Medellín", pais: "Colombia" },
  { nombre: "Palmira", pais: "Colombia" },
  { nombre: "Pereira", pais: "Colombia" },
  { nombre: "Puerto Asís", pais: "Colombia" },
  { nombre: "Quibdó", pais: "Colombia" },
  { nombre: "Santa Marta", pais: "Colombia" },
  { nombre: "Tauramena", pais: "Colombia" },
  { nombre: "Tuluá", pais: "Colombia" },
  { nombre: "Tumaco", pais: "Colombia" },
  { nombre: "Tunja", pais: "Colombia" },
];

const perPage = 4;
const pages = Math.ceil(ciudades.length / perPage);

const fontSizeFor = (nombre) => {
  const len = nombre.length;
  if (len <= 8) return "text-2xl";
  if (len <= 11) return "text-xl";
  if (len <= 14) return "text-lg";
  return "text-base";
};

const CityCard = ({ ciudad }) => (
  <div className="relative bg-secondary p-3 pt-6 pb-2 flex flex-col items-center justify-center min-h-[5rem] rounded-xl">
    <div className="absolute top-1.5 left-1.5 w-3 h-3 border-t-2 border-l-2 border-white rounded-tl-lg" />
    <div className="absolute bottom-1.5 right-1.5 w-3 h-3 border-b-2 border-r-2 border-white rounded-br-lg" />
    <span
      className={`${fontSizeFor(ciudad.nombre)} font-bold text-white text-center uppercase leading-tight tracking-wide`}
    >
      {ciudad.nombre}
    </span>
    <span className="self-end text-xs font-light text-white/80 mt-0.5 pr-1">
      {ciudad.pais}
    </span>
  </div>
);

const Municipios = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const timerRef = useRef(null);

  const goTo = (i) => {
    setFade(false);
    setTimeout(() => {
      setIndex(i % pages);
      setFade(true);
    }, 350);
  };

  const scheduleNext = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setIndex((prev) => {
        setFade(false);
        setTimeout(() => setFade(true), 350);
        return (prev + 1) % pages;
      });
    }, 3000);
  };

  useEffect(() => {
    scheduleNext();
    return () => clearInterval(timerRef.current);
  }, []);

  const select = (i) => {
    goTo(i);
    scheduleNext();
  };

  const visible = ciudades.slice(index * perPage, index * perPage + perPage);

  return (
    <div className="mt-6">
      <div
        className={`grid grid-cols-2 sm:grid-cols-4 gap-3 transition-opacity duration-350 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      >
        {visible.map((c) => (
          <CityCard key={c.nombre} ciudad={c} />
        ))}
      </div>

      <div className="mt-5 flex justify-center items-center gap-2">
        {Array.from({ length: pages }).map((_, i) => (
          <button
            key={i}
            onClick={() => select(i)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
              i === index ? "bg-secondary scale-125" : "bg-secondary/30 hover:bg-secondary/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Municipios;