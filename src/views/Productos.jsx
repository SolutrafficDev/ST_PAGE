import { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { SecondaryText, BodyText, TertiaryText } from "../components/Typography";
import productos from "../data/productos";

const Productos = () => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();
  const producto = productos[current];
  const timerRef = useRef(null);

  const startTimer = useCallback(() => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c === productos.length - 1 ? 0 : c + 1));
    }, 3000);
  }, []);

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, [startTimer]);

  const goTo = (i) => {
    setCurrent(i);
    startTimer();
  };

  const prev = () => {
    setCurrent((c) => (c === 0 ? productos.length - 1 : c - 1));
    startTimer();
  };

  const next = () => {
    setCurrent((c) => (c === productos.length - 1 ? 0 : c + 1));
    startTimer();
  };

  return (
    <section id="productos" className="section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SecondaryText text="Productos" color="text-contrast" />
      </div>

      <div className="relative mt-8">
        <div
          className="relative overflow-hidden cursor-pointer"
          onClick={() => navigate(`/productos/${producto.id}`)}
        >
          <img
            src={producto.gif}
            alt={producto.titulo}
            className="w-full h-[26rem] sm:h-[30rem] lg:h-[34rem] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
            <div className="max-w-7xl mx-auto w-full">
              <TertiaryText
                text={producto.titulo}
                weight="font-semibold"
                color="text-contrast-light"
              />
              <BodyText
                text={producto.descripcionCorta}
                color="text-contrast-light/90"
                className="mt-3 max-w-2xl"
              />
              <button
                onClick={() => navigate(`/productos/${producto.id}`)}
                className="mt-6 inline-flex items-center gap-2 bg-primary text-accent px-6 py-3 rounded font-semibold cursor-pointer transition-all duration-200 hover:bg-secondary hover:text-primary"
              >
                Ver más →
              </button>
            </div>
          </div>
        </div>

        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-secondary rounded-full w-10 h-10 flex items-center justify-center shadow-md cursor-pointer transition-all duration-200 hover:scale-110"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-secondary rounded-full w-10 h-10 flex items-center justify-center shadow-md cursor-pointer transition-all duration-200 hover:scale-110"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <div className="mx-auto max-w-7xl flex justify-center gap-2 mt-6 px-4 sm:px-6 lg:px-8">
        {productos.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
              i === current ? "bg-primary scale-125" : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Productos;