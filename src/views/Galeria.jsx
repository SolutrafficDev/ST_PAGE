import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaImages } from "react-icons/fa";

const sortImages = (images) =>
  Object.entries(images)
    .sort(([pathA], [pathB]) => pathA.localeCompare(pathB))
    .map(([, src]) => src);

const palmiraImages = sortImages(
  import.meta.glob("../assets/Palmira/*.{jpg,jpeg,png}", { eager: true, import: "default" })
);
const caliImages = sortImages(
  import.meta.glob("../assets/Cali/*.{jpg,jpeg,png}", { eager: true, import: "default" })
);
const equipoImages = sortImages(
  import.meta.glob("../assets/Equipo_Solutraffic/*.{jpg,jpeg,png}", { eager: true, import: "default" })
);

const categories = [
  "Todos",
  "Palmira",
  "Candelaria",
  "Cali",
  "Dosquebradas",
  "Instalaciones",
  "Equipo Solutraffic",
];

const createItems = (category, images) =>
  images.map((src, index) => ({
    category,
    title: `${category} · Imagen ${index + 1}`,
    src,
  }));

const galleryItems = [
  ...createItems("Palmira", palmiraImages),
  ...createItems("Cali", caliImages),
  ...createItems("Equipo Solutraffic", equipoImages),
];

const Galeria = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const visibleItems =
    activeCategory === "Todos"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <main className="min-h-screen bg-background pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/#politica-calidad"
          className="inline-flex items-center gap-2 text-secondary text-sm font-semibold transition-colors hover:text-primary"
        >
          <FaArrowLeft />
          Volver a Política de Calidad
        </Link>

        <div className="mt-10 text-center">
          <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/15 text-primary">
            <FaImages className="text-2xl" />
          </div>
          <h1 className="text-h1-mobile md:text-h1 font-bold tracking-tight text-secondary">
            Galería
          </h1>
        </div>

        <div
          className="mt-8 flex flex-wrap justify-center gap-3"
          role="tablist"
          aria-label="Categorías de la galería"
        >
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={activeCategory === category}
              onClick={() => setActiveCategory(category)}
              className={`cursor-pointer rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200 ${
                activeCategory === category
                  ? "bg-secondary text-primary shadow-md"
                  : "border border-secondary/20 bg-white text-secondary hover:border-secondary hover:bg-blue-soft"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-6 no-scrollbar">
          {visibleItems.map((item) => (
            <article
              key={`${item.category}-${item.src}`}
              className="w-[82vw] max-w-[360px] shrink-0 snap-start overflow-hidden rounded-2xl border border-secondary/10 bg-white shadow-lg sm:w-[380px]"
            >
              <div className="aspect-[4/3] overflow-hidden bg-blue-soft">
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-5">
                <span className="inline-block rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold text-secondary">
                  {item.category}
                </span>
              </div>
            </article>
          ))}
        </div>

        {visibleItems.length === 0 && (
          <p className="py-16 text-center text-contrast-soft">
            No hay imágenes disponibles para esta categoría.
          </p>
        )}
      </div>
    </main>
  );
};

export default Galeria;
