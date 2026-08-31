import { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
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
    }, 6000);
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
    <section id="productos" className="section section-compact bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-h1-mobile md:text-h1 font-bold tracking-tight text-contrast-light mt-2">
          Productos
        </h1>
      </div>

      <div className="relative mt-5">
        <div
          className="relative overflow-hidden cursor-pointer"
          onClick={() => navigate(`/productos/${producto.id}`)}
        >
          <img
            src={producto.gif}
            alt={producto.titulo}
            className="w-full h-[24rem] sm:h-[26rem] lg:h-[30rem] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-black/20" />
          <div className="absolute top-0 left-0 p-4 sm:p-8">
            <div className="w-full max-w-[600px] bg-white rounded-2xl shadow-2xl p-6 sm:p-8">
              <h3 className="text-h4-mobile md:text-h4 font-bold text-contrast tracking-tight line-clamp-2">
                {producto.titulo}
              </h3>
              <p className="text-body-sm-mobile md:text-body-sm text-contrast-muted mt-3 leading-relaxed line-clamp-2">
                {producto.descripcionCorta}
              </p>
              <button
                onClick={() => navigate(`/productos/${producto.id}`)}
                className="mt-6 inline-flex items-center gap-2 bg-primary text-accent px-4 py-2 rounded text-sm font-semibold cursor-pointer transition-all duration-200 hover:bg-secondary hover:text-primary"
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

      <div className="mx-auto max-w-7xl flex justify-center gap-2 mt-4 px-4 sm:px-6 lg:px-8">
        {productos.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
              i === current ? "bg-primary scale-125" : "bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Productos;