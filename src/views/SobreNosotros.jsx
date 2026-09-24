import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
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
  {
    year: "2026",
    date: "Mayo 26",
    title: "Controladores Solares Tauramena",
    text: "Implementamos controladores semafóricos alimentados con energía solar en Tauramena, una solución autónoma para zonas donde la red eléctrica es limitada.",
  },
  {
    year: "2026",
    date: "Marzo 15",
    title: "Remodelación Laboratorio y Producción",
    text: "Ampliamos y modernizamos nuestro laboratorio y área de producción para responder a la creciente demanda de soluciones de movilidad.",
  },
  {
    year: "2026",
    date: "Febrero 8",
    title: "Pruebas del Vehículo de Analítica en el Estadio del Deportivo Cali",
    text: "Validamos en operación real la captura de video, la transmisión satelital y la clasificación vehicular de nuestro vehículo de analítica vial.",
  },
  {
    year: "2025",
    date: "Noviembre 26",
    title: "Producción Santa Marta",
    text: "Desarrollamos y despachamos producción de equipos de semaforización destinada a Santa Marta, fortaleciendo nuestra presencia en la costa Caribe.",
  },
  {
    year: "2025",
    date: "Julio 17",
    title: "Producción Girardot",
    text: "Atendimos una nueva producción de equipos para Girardot, ratificando la capacidad de nuestro laboratorio para proyectos en todo el país.",
  },
  {
    year: "2024",
    date: "Diciembre 26",
    title: "Entrega Body Cams Candelaria",
    text: "Entregamos cámaras corporales (body cams) para apoyar el registro y la gestión de la movilidad en campo.",
  },
  {
    year: "2024",
    date: "Diciembre 18",
    title: "Mantenimiento y Programación Jamundí",
    text: "Prestamos servicios de mantenimiento y programación de controladores semafóricos, garantizando la continuidad de las intersecciones.",
  },
  {
    year: "2019",
    date: "Octubre 24",
    title: "Ensamble y Funcionamiento Prototipo M-Tix",
    text: "Completamos el ensamble y las pruebas de funcionamiento del prototipo M-Tix, un paso clave en el desarrollo de nuestra tecnología propia.",
  },
  {
    year: "2019",
    date: "Octubre 3",
    title: "Capacitación Palmira",
    text: "Capacitamos al personal de tránsito de Palmira en el uso de los sistemas de control y gestión de tráfico, con acompañamiento en el centro de control.",
  },
  {
    year: "2019",
    date: "Julio 22",
    title: "Prototipo M-Tix",
    text: "Avanzamos en el desarrollo del prototipo M-Tix, el controlador semafórico que marcaría el inicio de nuestra línea de productos propios.",
  },
  {
    year: "2019",
    date: "Marzo 12",
    title: "Controlador Cova Inalámbrico",
    text: "Implementamos un controlador con comunicación inalámbrica, una solución práctica para gestionar intersecciones sin depender de cableado dedicado.",
  },
  {
    year: "2019",
    date: "Febrero 28",
    title: "Entrega Central Palmira",
    text: "Entregamos y dejamos en operación el Centro de Control de Tráfico de Palmira, con tableros de monitoreo y sistemas de gestión en línea.",
  },
  {
    year: "2018",
    date: "Diciembre 21",
    title: "Solutraffic Humana",
    text: "Con nuestro programa Solutraffic Humana acompañamos a más de 210 niños en su primera comunión en Dosquebradas (Pereira), aportando los trajes y elementos para su celebración.",
  },
  {
    year: "2018",
    date: "Junio 21",
    title: "Inicio Construcción Central Palmira",
    text: "Iniciamos la construcción y adecuación del Centro de Control de Tráfico de Palmira, el espacio que albergaría la operación y el monitoreo de la ciudad.",
  },
  {
    year: "2018",
    date: "Junio 19",
    title: "Mundial Solutraffic",
    text: "Durante el Mundial de Rusia 2018 reunimos al equipo para apoyar a la Selección Colombia, una jornada que unió a colaboradores de todas las áreas.",
  },
  {
    year: "2018",
    date: "Mayo 30",
    title: "Capacitación Personal",
    text: "Realizamos jornadas de capacitación al personal en los sistemas, procesos y equipos de Solutraffic, fortaleciendo las competencias del equipo.",
  },
  {
    year: "2018",
    date: "Mayo 4",
    title: "Laboratorio y Producción",
    text: "Pusimos en marcha nuestro laboratorio y área de producción, donde diseñamos y ensamblamos los equipos de semaforización de la compañía.",
  },
  {
    year: "2018",
    date: "Marzo 20",
    title: "Recepción y Show Room Solutraffic",
    text: "Inauguramos la recepción y el show room de Solutraffic, un espacio para recibir a nuestros clientes y exhibir las soluciones de movilidad.",
  },
  {
    year: "2015",
    date: "",
    title: "Equipo Cova",
    text: "Los inicios de Solutraffic: el equipo Cova, uno de los primeros grupos de trabajo de la compañía.",
  },
];

const MediaViewer = ({ hito, media, active }) => {
  const items = [
    ...(media?.imagenes ?? []).map((src) => ({ type: "img", src })),
    ...(media?.videos ?? []).map((src) => ({ type: "video", src })),
  ];
  const [pos, setPos] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const [hovered, setHovered] = useState(false);
  const videoRef = useRef(null);

  const imageIndexes = items.reduce(
    (acc, item, i) => (item.type === "img" ? [...acc, i] : acc),
    []
  );
  const imgPos = imageIndexes.indexOf(pos);
  const current = items[pos] ?? null;
  const currentType = current?.type;

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

  // Avance automático de la galería: solo imágenes, solo cuando el hito está
  // visible y el usuario no está interactuando con el visor.
  useEffect(() => {
    if (!active || lightbox || hovered || items.length <= 1 || currentType !== "img") {
      return undefined;
    }
    const timer = setTimeout(() => {
      setPos((p) => (p + 1) % items.length);
    }, 2500);
    return () => clearTimeout(timer);
  }, [active, lightbox, hovered, currentType, pos, items.length]);

  // El video suena/reproduce solo cuando su hito está activo; al salir se pausa.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (active) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [active, currentType, pos]);

  if (items.length === 0) {
    return (
      <div className="w-full md:w-80 lg:w-[26rem] h-56 md:h-full shrink-0 rounded-xl border-2 border-dashed border-border bg-yellow-soft/50 flex flex-col items-center justify-center gap-2 text-contrast-muted">
        <FaImage className="text-2xl" />
        <span className="text-body-sm-mobile md:text-body-sm text-center px-4">
          Espacio para imagen / GIF del hito
        </span>
      </div>
    );
  }

  const goTo = (i) => setPos(((i % items.length) + items.length) % items.length);

  return (
    <>
      <div
        className="relative w-full md:w-80 lg:w-[26rem] h-56 md:h-full shrink-0 rounded-xl overflow-hidden bg-contrast/5 group"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {current.type === "video" ? (
          <video
            key={current.src}
            ref={videoRef}
            src={current.src}
            className="w-full h-full object-cover"
            controls
            playsInline
            autoPlay={active}
            muted
            loop
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

  const currentMedia = timelineMedia[index] ?? {};
  const imageCount = currentMedia.imagenes?.length ?? 0;
  const hasVideo = (currentMedia.videos?.length ?? 0) > 0;
  // Tiempo que cada hito permanece visible: da espacio a todas sus imágenes
  // (que rotan solas) y, si tiene, al video.
  const dwell = Math.max(5000, imageCount * 3800 + (hasVideo ? 9000 : 0) + 1000);

  useEffect(() => {
    if (paused) return undefined;
    const timer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % total);
    }, dwell);
    return () => clearTimeout(timer);
  }, [paused, total, dwell, index]);

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
      <div className="relative flex-1 h-[30rem] sm:h-[24rem] overflow-hidden">
        <div
          className="flex flex-col transition-transform duration-700 ease-out"
          style={{
            height: `${total * 100}%`,
            transform: `translateY(-${(index * 100) / total}%)`,
          }}
        >
          {hitos.map((hito, i) => {
            return (
              <div
                key={`${hito.year}-${hito.date}-${i}`}
                style={{ height: `${100 / total}%` }}
                className="flex items-center pr-1"
              >
                <div className="w-full flex flex-col md:flex-row items-center gap-5 md:gap-10 md:h-full">
                  {/* Información del hito */}
                  <div className="flex-1 min-w-0">
                    <span className="text-primary font-bold text-h3-mobile md:text-h3 tracking-wide">
                      {hito.year}
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
                    active={i === index}
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

const NuestroTalento = () => (
  <div id="talento" className="lg:flex lg:flex-row-reverse lg:items-stretch">
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
              <div className="space-y-3 pt-2">
                {[
                  { icon: FaLaptopCode, text: "Software de control y gestión de tráfico vehicular y peatonal." },
                  { icon: FaTrafficLight, text: "Sistemas de semaforización y estudios de flujos vehiculares y peatonales." },
                  { icon: FaRoute, text: "Modelación de intersecciones y sistemas de señalización vial." },
                ].map((item) => (
                  <div key={item.text} className="flex items-start gap-3">
                    <item.icon className="mt-0.5 shrink-0 text-primary text-xl" />
                    <p className="text-primary text-body-md-mobile md:text-body-md font-semibold leading-relaxed">
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
);

const QuienesSomos = () => (
  <div id="quienes-somos" className="lg:flex lg:items-stretch">
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
);

const LineaTiempo = () => (
  <div id="linea-tiempo" className="bg-background">
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
);

const PoliticaCertificaciones = () => {
  const textos = [
    "Estamos comprometidos con la calidad, seguridad e innovación en nuestras aplicaciones y servicios para la movilidad, manteniendo siempre un trato personalizado con el cliente e involucrándolo plenamente en los proyectos que realizan.",
    "Proporcionamos siempre un servicio integral para lograr la satisfacción de nuestros clientes de la industria privada y del sector oficial.",
    "Todos nuestros productos y sistemas cuentan con las normas que garantizan la absoluta confiabilidad de nuestra empresa como aliado. Nuestros procesos de diseño y mantenimiento cumplen con estrictas normas de calidad, asegurando la eficiencia en la aplicación de las soluciones para cada una de sus necesidades.",
  ];

  return (
    <div id="politica-calidad" className="bg-primary">
      <div className="lg:flex lg:items-stretch">
        <Reveal direction="right" className="lg:w-2/5 relative">
          <img
            src={imgCompromiso}
            alt="Política de calidad y compromiso sostenible"
            className="w-full h-72 lg:absolute lg:inset-0 lg:h-full lg:w-full object-cover object-top"
          />
        </Reveal>
        <div className="lg:w-3/5">
          <Inner>
            <div className="py-8 sm:py-10 lg:py-12">
              <Reveal delay={100}>
                <SmallLabel text="Política de Calidad" />
                <BigTitle text="Compromiso Seguro y Sostenible de Calidad" />
              </Reveal>
              <div className="mt-6 flex justify-center lg:justify-start">
                <Link
                  to="/galeria"
                  className="inline-flex items-center gap-2 rounded bg-secondary px-6 py-3 font-semibold text-primary transition-all duration-200 hover:bg-accent hover:text-primary"
                >
                  Ver Galería
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5h16v14H4zM8 15l3-3 2 2 3-4 4 5" />
                  </svg>
                </Link>
              </div>
              <div className="mt-6 space-y-5">
                {textos.map((text, index) => (
                  <Reveal key={text} delay={200 + index * 100}>
                    <BodyText
                      text={text}
                      color="text-contrast-soft"
                      className="block leading-relaxed"
                    />
                  </Reveal>
                ))}
                <Reveal delay={500}>
                  <p className="text-contrast text-body-md-mobile md:text-body-md font-semibold leading-relaxed">
                    Municipios donde hemos trabajado:
                  </p>
                </Reveal>
                <Reveal delay={600}>
                  <Municipios />
                </Reveal>
              </div>
            </div>
          </Inner>
        </div>
      </div>
    </div>
  );
};

const Brochure = () => (
  <section id="brochure" className="bg-background py-12 sm:py-16">
    <Inner>
      <Reveal delay={100} className="max-w-2xl mx-auto text-center">
        <div className="mt-7 flex justify-center">
          <a
            href="https://solutraffic.co/wp-content/uploads/2020/11/Brochure_solutraffic.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-w-[260px] sm:min-w-[300px] max-w-full items-center justify-center gap-2 whitespace-nowrap rounded bg-primary px-6 py-3 font-semibold text-accent transition-all duration-200 hover:bg-secondary hover:text-primary"
          >
            <span className="whitespace-nowrap">Descargar brochure</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v12m0 0 5-5m-5 5-5-5M5 20h14" />
            </svg>
          </a>
        </div>
      </Reveal>
    </Inner>
  </section>
);

const SobreNosotros = () => (
  <section id="sobre">
    <NuestroTalento />
    <QuienesSomos />
    <LineaTiempo />
    <PoliticaCertificaciones />
    <Brochure />
  </section>
);

export default SobreNosotros;
