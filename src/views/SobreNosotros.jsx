import { useEffect, useState } from "react";
import { BodyText } from "../components/Typography";
import {
  FaLaptopCode,
  FaTrafficLight,
  FaRoute,
  FaChevronUp,
  FaChevronDown,
  FaImage,
  FaTimes,
} from "react-icons/fa";
import Reveal from "../components/Reveal";
import Municipios from "../components/Municipios";
import { timelineMedia } from "../data/timelineMedia";
import imgQuienesSomos from "../assets/about/quienesomos.jpeg";
import imgTalento from "../assets/about/nuestrotalento.jpeg";
import imgCompromiso from "../assets/about/compromiso.jpeg";
import imgCalidad from "../assets/about/calidad.jpeg";

const SmallLabel = ({ text, light }) => (
  <span
    className={`inline-block uppercase tracking-[0.20em] text-sm font-semibold ${
      light ? "text-primary" : "text-secondary"
    }`}
  >
    {text}
  </span>
);

const BigTitle = ({ text, light }) => (
  <h2
    className={`text-h2-mobile md:text-h2 font-bold tracking-tight mt-3 ${
      light ? "text-contrast-light" : "text-contrast"
    }`}
  >
    {text}
  </h2>
);

const Inner = ({ children }) => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
);

// Hitos de la compañía (orden cronológico descendente: lo más reciente primero)
// Cada hito puede llevar una imagen/GIF con la clave `img`.
const hitos = [
  { year: "2026", date: "Mayo 26", title: "Controladores Solares Tauramena" },
  { year: "2026", date: "Marzo 15", title: "Remodelación Laboratorio y Producción" },
  {
    year: "2026",
    date: "Febrero 8",
    title: "Pruebas del Vehículo de Analítica en el Estadio del Deportivo Cali",
  },
  { year: "2025", date: "Noviembre 26", title: "Producción Santa Marta" },
  { year: "2025", date: "Julio 17", title: "Producción Girardot" },
  { year: "2024", date: "Diciembre 26", title: "Entrega Body Cams Candelaria" },
  { year: "2024", date: "Diciembre 18", title: "Mantenimiento y Programación Jamundí" },
  {
    year: "2019",
    date: "Octubre 24",
    title: "Ensamble y Funcionamiento Prototipo M-Tix",
  },
  { year: "2019", date: "Octubre 3", title: "Capacitación Palmira" },
  { year: "2019", date: "Julio 22", title: "Prototipo M-Tix" },
  { year: "2019", date: "Marzo 12", title: "Controlador Cova Inalámbrico" },
  { year: "2019", date: "Febrero 28", title: "Entrega Central Palmira" },
  { year: "2018", date: "Diciembre 21", title: "Solutraffic Humana" },
  { year: "2018", date: "Junio 21", title: "Inicio Construcción Central Palmira" },
  { year: "2018", date: "Junio 19", title: "Mundial Solutraffic" },
  { year: "2018", date: "Mayo 30", title: "Capacitación Personal" },
  { year: "2018", date: "Mayo 4", title: "Laboratorio y Producción" },
  { year: "2018", date: "Marzo 20", title: "Recepción y Show Room Solutraffic" },
  { year: "2015", date: "", title: "Equipo Cova" },
];

const MediaViewer = ({ hito, media }) => {
  const items = [
    ...(media?.imagenes ?? []).map((src) => ({ type: "img", src })),
    ...(media?.videos ?? []).map((src) => ({ type: "video", src })),
  ];
  const [pos, setPos] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  const imageIndexes = items.reduce(
    (acc, item, i) => (item.type === "img" ? [...acc, i] : acc),
    []
  );
  const imgPos = imageIndexes.indexOf(pos);

  const goImage = (delta) => {
    if (imageIndexes.length === 0) return;
    const next = (imgPos + delta + imageIndexes.length) % imageIndexes.length;
    setPos(imageIndexes[next]);
  };

  useEffect(() => {
    if (!lightbox) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") setLightbox(false);
      if (e.key === "ArrowLeft") goImage(-1);
      if (e.key === "ArrowRight") goImage(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lightbox, pos]);

  if (items.length === 0) {
    return (
      <div className="w-full md:w-72 lg:w-96 h-44 md:h-full shrink-0 rounded-xl border-2 border-dashed border-border bg-yellow-soft/50 flex flex-col items-center justify-center gap-2 text-contrast-muted">
        <FaImage className="text-2xl" />
        <span className="text-body-sm-mobile md:text-body-sm text-center px-4">
          Espacio para imagen / GIF del hito
        </span>
      </div>
    );
  }

  const current = items[pos];
  const goTo = (i) => setPos(((i % items.length) + items.length) % items.length);

  return (
    <>
      <div className="relative w-full md:w-72 lg:w-96 h-44 md:h-full shrink-0 rounded-xl overflow-hidden bg-contrast/5 group">
        {current.type === "video" ? (
          <video
            key={current.src}
            src={current.src}
            className="w-full h-full object-cover"
            controls
            playsInline
            preload="metadata"
          />
        ) : (
          <button
            type="button"
            onClick={() => setLightbox(true)}
            className="w-full h-full cursor-zoom-in"
            aria-label={`Ampliar imagen de ${hito.title}`}
          >
            <img
              src={current.src}
              alt={hito.title}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </button>
        )}

        {items.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => goTo(pos - 1)}
              aria-label="Medio anterior"
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/45 text-white hidden group-hover:md:flex items-center justify-center hover:bg-black/70 transition-colors cursor-pointer"
            >
              <FaChevronUp className="-rotate-90" />
            </button>
            <button
              type="button"
              onClick={() => goTo(pos + 1)}
              aria-label="Medio siguiente"
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/45 text-white hidden group-hover:md:flex items-center justify-center hover:bg-black/70 transition-colors cursor-pointer"
            >
              <FaChevronDown className="-rotate-90" />
            </button>
            <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded-full bg-black/55 text-white text-[11px] tabular-nums">
              {pos + 1} / {items.length}
            </span>
          </>
        )}
      </div>

      {/* Visor ampliado */}
      {lightbox && current.type === "img" && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setLightbox(false)}
        >
          <img
            src={current.src}
            alt={hito.title}
            className="max-w-full max-h-full object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Cerrar */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox(false);
            }}
            aria-label="Cerrar"
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/15 text-white flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer"
          >
            <FaTimes />
          </button>

          {imageIndexes.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  goImage(-1);
                }}
                aria-label="Imagen anterior"
                className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/15 text-white flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer"
              >
                <FaChevronUp className="-rotate-90" />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  goImage(1);
                }}
                aria-label="Imagen siguiente"
                className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/15 text-white flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer"
              >
                <FaChevronDown className="-rotate-90" />
              </button>
              <span className="absolute bottom-5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-white/15 text-white text-body-sm tabular-nums">
                {imgPos + 1} / {imageIndexes.length}
              </span>
            </>
          )}
        </div>
      )}
    </>
  );
};

const Timeline = () => {
  const total = hitos.length;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return undefined;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % total);
    }, 4500);
    return () => clearInterval(timer);
  }, [paused, total]);

  const goTo = (i) => setIndex(((i % total) + total) % total);

  return (
    <div
      className="mt-12 flex items-stretch gap-4 sm:gap-8 max-w-6xl mx-auto"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Riel vertical con puntos de navegación (oculto en móvil) */}
      <div className="relative hidden md:flex flex-col items-center justify-between py-1">
        <span className="absolute top-0 bottom-0 w-px bg-border" aria-hidden="true" />
        {hitos.map((hito, i) => (
          <button
            key={`${hito.year}-${hito.date}-${i}`}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Ir al hito ${hito.title}`}
            aria-current={i === index}
            className={`relative z-10 w-2.5 h-2.5 rounded-full border-2 transition-all duration-300 cursor-pointer ${
              i === index
                ? "bg-primary border-primary scale-150"
                : "bg-background border-border hover:border-primary"
            }`}
          />
        ))}
      </div>

      {/* Visor del carrusel */}
      <div className="relative flex-1 h-[24rem] sm:h-[22rem] overflow-hidden">
        <div
          className="flex flex-col transition-transform duration-700 ease-out"
          style={{
            height: `${total * 100}%`,
            transform: `translateY(-${(index * 100) / total}%)`,
          }}
        >
          {hitos.map((hito, i) => {
            const firstOfYear = i === 0 || hitos[i - 1].year !== hito.year;
            return (
              <div
                key={`${hito.year}-${hito.date}-${i}`}
                style={{ height: `${100 / total}%` }}
                className="flex items-center pr-1"
              >
                <div className="w-full flex flex-col md:flex-row items-center gap-5 md:gap-10 md:h-full">
                  {/* Información del hito */}
                  <div className="flex-1 min-w-0">
                    <span className="inline-flex items-center gap-3">
                      <span className="text-primary font-bold text-h3-mobile md:text-h3 tracking-wide">
                        {hito.year}
                      </span>
                      {firstOfYear && (
                        <span className="uppercase tracking-[0.20em] text-body-sm-mobile md:text-body-sm font-semibold text-contrast-muted">
                          Hito del año
                        </span>
                      )}
                    </span>
                    {hito.date && (
                      <p className="mt-1 text-contrast-soft text-body-sm-mobile md:text-body-sm font-semibold uppercase tracking-wide">
                        {hito.date}
                      </p>
                    )}
                    <h3 className="mt-2 text-contrast font-bold text-h4 leading-snug">
                      {hito.title}
                    </h3>
                    {hito.text && (
                      <p className="mt-3 text-contrast-soft text-body-md-mobile md:text-body-md leading-relaxed">
                        {hito.text}
                      </p>
                    )}
                  </div>

                  {/* Galería de imágenes / videos del hito */}
                  <MediaViewer
                    key={`${hito.year}-${hito.date}-${i}`}
                    hito={hito}
                    media={timelineMedia[i]}
                  />
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Controles arriba / abajo */}
      <div className="flex flex-col items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => goTo(index - 1)}
          aria-label="Hito anterior"
          className="w-10 h-10 rounded-full border border-border bg-background text-contrast flex items-center justify-center transition-colors hover:bg-primary hover:border-primary cursor-pointer"
        >
          <FaChevronUp />
        </button>
        <span className="md:hidden text-body-sm-mobile font-semibold text-contrast-muted tabular-nums">
          {index + 1} / {total}
        </span>
        <button
          type="button"
          onClick={() => goTo(index + 1)}
          aria-label="Hito siguiente"
          className="w-10 h-10 rounded-full border border-border bg-background text-contrast flex items-center justify-center transition-colors hover:bg-primary hover:border-primary cursor-pointer"
        >
          <FaChevronDown />
        </button>
      </div>
    </div>
  );
};

const SobreNosotros = () => {
  return (
    <section id="sobre">
      {/* Sección: Trayectoria (imagen izq, fondo blanco a todo el ancho der) */}
      <div className="lg:flex lg:items-stretch">
        <Reveal direction="right" className="lg:w-2/5 relative">
          <img
            src={imgQuienesSomos}
            alt="Trayectoria e intersecciones viales"
            className="w-full h-72 lg:absolute lg:inset-0 lg:h-full lg:w-full object-cover object-top"
          />
        </Reveal>
        <div className="bg-background lg:w-3/5">
          <Inner>
            <div className="py-8 sm:py-10">
              <Reveal delay={100}>
                <SmallLabel text="¿Quiénes Somos?" />
                <BigTitle text="Trayectoria y Equipo de Especialistas" />
              </Reveal>
              <div className="mt-6 space-y-5">
                <Reveal delay={200}>
                  <BodyText
                    text="Solutraffic S.A.S es una compañía Colombiana dedicada a la ingeniería de la movilidad urbana, con veinticinco años de experiencia en el mercado de productos, componentes y soluciones integrales para la gestión de esta en las ciudades."
                    color="text-contrast-soft"
                    className="block leading-relaxed"
                  />
                </Reveal>
                <Reveal delay={300}>
                  <BodyText
                    text="Nuestros recursos y esfuerzos se han orientado hacia el diseño, fabricación, suministro de productos y mantenimiento de sistemas tecnológicos de tráfico, que cuentan con las normas que garantizan la absoluta confiabilidad de nuestra empresa como aliado."
                    color="text-contrast-soft"
                    className="block leading-relaxed"
                  />
                </Reveal>
                <Reveal delay={400}>
                  <BodyText
                    text="Lo anterior soportado por un programa de investigación y desarrollo que asegura que todo el portafolio de soluciones tecnológicas esté a la vanguardia. Así su municipio o empresa logrará la optimización del presupuesto y la eficiencia en la aplicación de las soluciones para cada una de sus necesidades."
                    color="text-contrast-soft"
                    className="block leading-relaxed"
                  />
                </Reveal>
                <Reveal delay={500}>
                  <p className="text-contrast text-body-md-mobile md:text-body-md font-semibold leading-relaxed">
                    En la actualidad son cientos de intersecciones viales intervenidas e
                    implementadas exitosamente por Solutraffic.
                  </p>
                </Reveal>
              </div>
            </div>
          </Inner>
        </div>
      </div>

      {/* Sección: Nuestro Talento (fondo azul a todo el ancho izq, imagen der) */}
      <div className="lg:flex lg:flex-row-reverse lg:items-stretch">
        <Reveal direction="left" className="lg:w-2/5 relative">
          <img
            src={imgTalento}
            alt="Nuestro talento"
            className="w-full h-72 lg:absolute lg:inset-0 lg:h-full lg:w-full object-cover object-top"
          />
        </Reveal>
        <div className="bg-secondary lg:w-3/5">
          <Inner>
            <div className="py-8 sm:py-10">
              <Reveal delay={100}>
                <SmallLabel text="Nuestro Talento" light />
                <BigTitle text="Equipo de Especialistas a tu Servicio" light />
              </Reveal>
              <div className="mt-6 space-y-5">
                <Reveal delay={200}>
                  <BodyText
                    text="Un experimentado equipo de ingenieros y técnicos especialistas están a su servicio brindando un conocimiento excepcional en productos y soluciones para la gestión de la movilidad."
                    color="text-contrast-light"
                    className="block leading-relaxed"
                  />
                </Reveal>
                <Reveal delay={300}>
                  <BodyText
                    text="Nuestros ingenieros de hardware y software trabajan en estrecha colaboración con las autoridades de tránsito de los municipios y los comités de normas para diseñar y crear soluciones innovadoras y fiables para la gestión de la movilidad y la correspondiente mejora en la calidad de vida de los ciudadanos."
                    color="text-contrast-light"
                    className="block leading-relaxed"
                  />
                </Reveal>
                <Reveal delay={400}>
                  <BodyText
                    text="Un programa de investigación coherente garantiza que nuestros productos incorporen la última tecnología apropiada que permita satisfacer y superar las expectativas de nuestros clientes."
                    color="text-contrast-light"
                    className="block leading-relaxed"
                  />
                </Reveal>
                <Reveal delay={500}>
                  <div className="grid gap-4 pt-2">
                    {[
                      { icon: FaLaptopCode, text: "Software de control y gestión de tráfico vehicular y peatonal." },
                      { icon: FaTrafficLight, text: "Sistemas de semaforización y estudios de flujos vehiculares y peatonales." },
                      { icon: FaRoute, text: "Modelación de intersecciones y sistemas de señalización vial." },
                    ].map((item) => (
                      <div
                        key={item.text}
                        className="flex items-start gap-4 p-4 rounded-xl bg-white shadow-sm"
                      >
                        <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center flex-shrink-0">
                          <item.icon className="text-primary text-lg" />
                        </div>
                        <p className="text-contrast text-body-md-mobile md:text-body-md leading-relaxed">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </Reveal>
              </div>
            </div>
          </Inner>
        </div>
      </div>

      {/* Sección: Compromiso (imagen izq, fondo blanco a todo el ancho der) */}
      <div className="lg:flex lg:items-stretch">
        <Reveal direction="right" className="lg:w-2/5 relative">
          <img
            src={imgCompromiso}
            alt="Compromiso en planta y línea de semáforos"
            className="w-full h-72 lg:absolute lg:inset-0 lg:h-full lg:w-full object-cover object-top"
          />
        </Reveal>
        <div className="bg-background lg:w-3/5">
          <Inner>
            <div className="py-8 sm:py-10">
              <Reveal delay={100}>
                <SmallLabel text="Política de Calidad" />
                <BigTitle text="Compromiso Seguro y Sostenible" />
              </Reveal>
              <div className="mt-6 space-y-5">
                <Reveal delay={200}>
                  <BodyText
                    text="Estamos comprometidos con la calidad, seguridad e innovación en nuestras aplicaciones y servicios para la movilidad, manteniendo siempre un trato personalizado con el cliente e involucrándolo plenamente en los proyectos que realizan."
                    color="text-contrast-soft"
                    className="block leading-relaxed"
                  />
                </Reveal>
                <Reveal delay={300}>
                  <BodyText
                    text="Proporcionamos siempre un servicio integral para lograr la satisfacción de nuestros clientes de la industria privada y del sector oficial."
                    color="text-contrast-soft"
                    className="block leading-relaxed"
                  />
                </Reveal>
                <Reveal delay={400}>
                  <BodyText
                    text="Con el SG, seguridad, salud en el trabajo para nuestros colaboradores, proveedores y contratistas, aseguramos las condiciones para un trabajo seguro y confiable, previniendo accidentes de trabajo y enfermedades laborales."
                    color="text-contrast-soft"
                    className="block leading-relaxed"
                  />
                </Reveal>
                <Reveal delay={500}>
                  <BodyText
                    text="A través de la identificación de los peligros y prevención de riesgos, planes de contingencia asociados con las actividades y aportes significativos al ambiente, optimizamos los recursos renovables y no renovables, previniendo la contaminación."
                    color="text-contrast-soft"
                    className="block leading-relaxed"
                  />
                </Reveal>
                <Reveal delay={600}>
                  <BodyText
                    text="Cumplimos con la legislación colombiana vigente aplicable y la mejora continua en el desempeño de los programas de calidad, Seguridad, Salud en el trabajo y ambiente, para fortalecer el desarrollo de competencias además de la calidad de vida de los trabajadores."
                    color="text-contrast-soft"
                    className="block leading-relaxed"
                  />
                </Reveal>
              </div>
            </div>
          </Inner>
        </div>
      </div>

      {/* Sección: Calidad y municipios (imagen der, fondo amarillo a todo el ancho izq) */}
      <div className="lg:flex lg:flex-row-reverse lg:items-stretch">
        <Reveal direction="left" className="lg:w-2/5 relative">
          <img
            src={imgCalidad}
            alt="Calidad y control de tráfico"
            className="w-full h-72 lg:absolute lg:inset-0 lg:h-full lg:w-full object-cover object-top"
          />
        </Reveal>
        <div className="bg-primary lg:w-3/5">
          <Inner>
            <div className="py-8 sm:py-10">
              <Reveal delay={100}>
                <SmallLabel text="Certificaciones y Brochure" />
                <BigTitle text="Calidad y Recursos Normados" />
              </Reveal>
              <div className="mt-6 space-y-5">
                <Reveal delay={200}>
                  <BodyText
                    text="Todos nuestros productos y sistemas cuentan con las normas que garantizan la absoluta confiabilidad de nuestra empresa como aliado. Nuestros procesos de diseño y mantenimiento cumplen con estrictas normas de calidad, asegurando la eficiencia en la aplicación de las soluciones para cada una de sus necesidades."
                    className="block leading-relaxed"
                  />
                </Reveal>
                <Reveal delay={400}>
                  <p className="text-contrast text-body-md-mobile md:text-body-md font-semibold leading-relaxed">
                    Municipios donde hemos trabajado:
                  </p>
                </Reveal>
                <Reveal delay={500}>
                  <Municipios />
                </Reveal>
              </div>
            </div>
          </Inner>
        </div>
      </div>

      {/* Sección: Línea de tiempo */}
      <div className="bg-background">
        <Inner>
          <div className="py-12 sm:py-16">
            <Reveal delay={100} className="text-center">
              <SmallLabel text="Nuestra Trayectoria" />
              <BigTitle text="Línea de Tiempo" />
            </Reveal>
            <Reveal delay={200}>
              <Timeline />
            </Reveal>
          </div>
        </Inner>
      </div>
    </section>
  );
};

export default SobreNosotros;
