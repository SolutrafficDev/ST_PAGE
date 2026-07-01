import { useState } from "react";

const Carrusel = ({ slides }) => {
  const [current, setCurrent] = useState(0);

  if (!slides || slides.length === 0) return null;

  const prev = () => setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1));

  return (
    <div className="relative w-full overflow-hidden rounded-2xl bg-white shadow-lg">
      <div className="relative h-[400px] md:h-[500px]">
        <img
          src={slides[current].img}
          alt={`Slide ${current + 1}`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
          <p className="text-white text-body-md-mobile md:text-body-md leading-relaxed max-w-3xl">
            {slides[current].texto}
          </p>
        </div>
      </div>

      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-secondary rounded-full w-10 h-10 flex items-center justify-center shadow-md cursor-pointer transition-all duration-200 hover:scale-110"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-secondary rounded-full w-10 h-10 flex items-center justify-center shadow-md cursor-pointer transition-all duration-200 hover:scale-110"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="absolute bottom-4 right-4 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
              i === current ? "bg-primary scale-125" : "bg-white/60 hover:bg-white/90"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carrusel;
