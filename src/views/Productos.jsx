import { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
import productos from "../data/productos";

const Productos = () => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();
  const producto = productos[current];
  const timerRef = useRef(null);
  const total = productos.length;

  const startTimer = useCallback(() => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c === total - 1 ? 0 : c + 1));
    }, 6000);
  }, [total]);

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, [startTimer]);

  const prev = () => {
    setCurrent((c) => (c === 0 ? total - 1 : c - 1));
    startTimer();
  };

  const next = () => {
    setCurrent((c) => (c === total - 1 ? 0 : c + 1));
    startTimer();
  };

  const goTo = (i) => {
    setCurrent(i);
    startTimer();
  };

  const num = `0${current + 1}`.slice(-2);
  const numTotal = `0${total}`.slice(-2);

  return (
    <section id="productos" className="section section-compact">
      <SectionTitle className="mt-2">Productos</SectionTitle>

      <div className="relative mt-6 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-secondary shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative flex flex-col justify-center p-6 sm:p-10 lg:p-12">
              <button
                onClick={prev}
                aria-label="Producto anterior"
                className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-primary text-accent rounded-full w-11 h-11 flex items-center justify-center shadow-md cursor-pointer transition-all duration-200 hover:bg-secondary hover:text-primary hover:scale-110"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <div className="pl-10 md:pl-14">
                <p className="text-xs font-semibold tracking-widest uppercase text-primary">
                  {num} / {numTotal}
                </p>
                <h3 className="mt-4 text-h4-mobile md:text-h4 font-bold text-contrast-light tracking-tight line-clamp-3">
                  {producto.titulo}
                </h3>
                <p className="mt-4 text-blue-soft leading-relaxed line-clamp-3">
                  {producto.descripcionCorta}
                </p>
                <button
                  onClick={() => navigate(`/productos/${producto.id}`)}
                  className="mt-8 self-start inline-flex items-center gap-2 bg-primary text-accent px-5 py-2.5 rounded text-sm font-semibold cursor-pointer transition-all duration-200 hover:bg-secondary hover:text-primary"
                >
                  Ver producto
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            <div
              className="relative aspect-[4/3] md:aspect-auto md:min-h-[22rem] cursor-pointer"
              onClick={() => navigate(`/productos/${producto.id}`)}
            >
              <img
                src={producto.gif}
                alt={producto.titulo}
                className="absolute inset-0 w-full h-full object-cover object-center"
              />

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  next();
                }}
                aria-label="Producto siguiente"
                className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-primary text-accent rounded-full w-11 h-11 flex items-center justify-center shadow-md cursor-pointer transition-all duration-200 hover:bg-secondary hover:text-primary hover:scale-110"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-3 mx-auto flex justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-xs h-1 rounded-full bg-black/10 overflow-hidden">
          <div
            className="h-full bg-primary transition-all duration-500"
            style={{ width: `${((current + 1) / total) * 100}%` }}
          />
        </div>
      </div>

      <div className="mt-4 mx-auto flex justify-center gap-2.5 px-4 sm:px-6 lg:px-8 overflow-x-auto no-scrollbar">
        {productos.map((p, i) => (
          <button
            key={p.id}
            onClick={() => goTo(i)}
            className={`relative w-14 h-10 sm:w-16 sm:h-11 rounded-md overflow-hidden cursor-pointer ring-2 transition-all duration-200 shrink-0 ${
              i === current
                ? "ring-primary scale-105 opacity-100"
                : "ring-transparent opacity-50 hover:opacity-80"
            }`}
            aria-label={p.titulo}
          >
            <img src={p.gif} alt={p.titulo} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </section>
  );
};

export default Productos;
