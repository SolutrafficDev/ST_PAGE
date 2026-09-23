import { useEffect, useState } from "react";
import { BodyText } from "../components/Typography";
import {
  FaLaptopCode,
  FaTrafficLight,
  FaRoute,
  FaChevronUp,
  FaChevronDown,
  FaImage,
} from "react-icons/fa";
import Reveal from "../components/Reveal";
import Municipios from "../components/Municipios";
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

// TODO: reemplazar por los hitos reales de la empresa cuando estén disponibles
const hitos = [
  {
    year: "2001",
    title: "Fundación de Solutraffic",
    text: "Inicio de operaciones dedicadas a la ingeniería de la movilidad urbana en Colombia.",
  },
  {
    year: "2006",
    title: "Primeras intersecciones intervenidas",
    text: "Implementación de los primeros sistemas de semaforización y control de tráfico.",
  },
  {
    year: "2012",
    title: "Fabricación propia",
    text: "Puesta en marcha de la línea de diseño y fabricación de componentes para tráfico.",
  },
  {
    year: "2018",
    title: "Expansión nacional",
    text: "Presencia en nuevas ciudades y municipios con soluciones integrales de movilidad.",
  },
  {
    year: "Hoy",
    title: "Innovación continua",
    text: "Programa de I+D para mantener el portafolio tecnológico a la vanguardia.",
  },
];

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
      {/* Riel vertical con puntos de navegación */}
      <div className="relative flex flex-col items-center justify-between py-1">
        <span className="absolute top-0 bottom-0 w-px bg-border" aria-hidden="true" />
        {hitos.map((hito, i) => (
          <button
            key={hito.year}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Ir al hito ${hito.year}`}
            aria-current={i === index}
            className={`relative z-10 w-3.5 h-3.5 rounded-full border-2 transition-all duration-300 cursor-pointer ${
              i === index
                ? "bg-primary border-primary scale-125"
                : "bg-background border-border hover:border-primary"
            }`}
          />
        ))}
      </div>

      {/* Visor del carrusel */}
      <div className="relative flex-1 h-[26rem] sm:h-[24rem] overflow-hidden">
        <div
          className="flex flex-col transition-transform duration-700 ease-out"
          style={{
            height: `${total * 100}%`,
            transform: `translateY(-${(index * 100) / total}%)`,
          }}
        >
          {hitos.map((hito) => (
            <div
              key={hito.year}
              style={{ height: `${100 / total}%` }}
              className="flex items-center pr-1"
            >
              <div className="w-full flex flex-col md:flex-row items-center gap-5 md:gap-10 md:h-full">
                {/* Información del hito */}
                <div className="flex-1 min-w-0">
                  <span className="text-primary font-bold text-h3-mobile md:text-h3 tracking-wide">
                    {hito.year}
                  </span>
                  <h3 className="mt-1 text-contrast font-bold text-h4 leading-snug">
                    {hito.title}
                  </h3>
                  <p className="mt-3 text-contrast-soft text-body-md-mobile md:text-body-md leading-relaxed">
                    {hito.text}
                  </p>
                </div>

                {/* Espacio para imagen / gif del hito */}
                <div className="w-full md:w-72 lg:w-96 h-44 md:h-full shrink-0 rounded-xl border-2 border-dashed border-border bg-yellow-soft/50 flex flex-col items-center justify-center gap-2 text-contrast-muted">
                  <FaImage className="text-2xl" />
                  <span className="text-body-sm-mobile md:text-body-sm text-center px-4">
                    Espacio para imagen / GIF del hito
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Difuminado superior e inferior */}
        <span
          className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-background to-transparent"
          aria-hidden="true"
        />
        <span
          className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-background to-transparent"
          aria-hidden="true"
        />
      </div>

      {/* Controles arriba / abajo */}
      <div className="flex flex-col justify-center gap-3">
        <button
          type="button"
          onClick={() => goTo(index - 1)}
          aria-label="Hito anterior"
          className="w-10 h-10 rounded-full border border-border bg-background text-contrast flex items-center justify-center transition-colors hover:bg-primary hover:border-primary cursor-pointer"
        >
          <FaChevronUp />
        </button>
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