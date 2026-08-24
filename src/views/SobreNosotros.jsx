import { BodyText } from "../components/Typography";
import gifTrafico from "../assets/a.gif";
import imgIngeniero from "../assets/serviciop.png";
import imgFabrica from "../assets/carrusel1.jpg";

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

const SobreNosotros = () => {
  return (
    <section id="sobre" className="section px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Encabezado */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-left">
            <h1 className="text-h1-mobile md:text-h1 font-bold tracking-tight text-contrast mt-3">
              Sobre Nosotros
            </h1>
          </div>
        </div>

        {/* Sección: Trayectoria (imagen izquierda, panel azul derecha) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 rounded-2xl overflow-hidden shadow-sm">
          <div className="relative min-h-[320px]">
            <img
              src={gifTrafico}
              alt="Trayectoria e intersecciones viales"
              className="w-full h-full object-cover absolute inset-0"
            />
          </div>
          <div className="bg-secondary p-8 sm:p-12 animate-fade-up">
            <SmallLabel text="¿Quiénes Somos?" light />
            <BigTitle text="Trayectoria y Equipo de Especialistas" light />
            <div className="mt-6 space-y-6">
              <BodyText
                text="Solutraffic S.A.S es una compañía Colombiana dedicada a la ingeniería de la movilidad urbana, con veinticinco años de experiencia en el mercado de productos, componentes y soluciones integrales para la gestión de esta en las ciudades."
                color="text-contrast-light"
                className="block leading-relaxed"
              />
              <BodyText
                text="Nuestros recursos y esfuerzos se han orientado hacia el diseño, fabricación, suministro de productos y mantenimiento de sistemas tecnológicos de tráfico, que cuentan con las normas que garantizan la absoluta confiabilidad de nuestra empresa como aliado."
                color="text-contrast-light"
                className="block leading-relaxed"
              />
              <BodyText
                text="Lo anterior soportado por un programa de investigación y desarrollo que asegura que todo el portafolio de soluciones tecnológicas esté a la vanguardia. Así su municipio o empresa logrará la optimización del presupuesto y la eficiencia en la aplicación de las soluciones para cada una de sus necesidades."
                color="text-contrast-light"
                className="block leading-relaxed"
              />
              <p className="text-contrast-light text-body-md-mobile md:text-body-md font-semibold leading-relaxed">
                En la actualidad son cientos de intersecciones viales intervenidas e
                implementadas exitosamente por Solutraffic.
              </p>
            </div>
          </div>
        </div>

        {/* Sección: Nuestro Talento (panel azul izquierda, imagen derecha) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 rounded-2xl overflow-hidden shadow-sm">
          <div className="bg-primary p-8 sm:p-12 animate-fade-up order-2 lg:order-1">
            <SmallLabel text="Nuestro Talento" />
            <BigTitle text="Equipo de Especialistas a tu Servicio" />
            <div className="mt-6 space-y-6">
              <BodyText
                text="Un experimentado equipo de ingenieros y técnicos especialistas están a su servicio brindando un conocimiento excepcional en productos y soluciones para la gestión de la movilidad."
                className="block leading-relaxed"
              />
              <BodyText
                text="Nuestros ingenieros de hardware y software trabajan en estrecha colaboración con las autoridades de tránsito de los municipios y los comités de normas para diseñar y crear soluciones innovadoras y fiables para la gestión de la movilidad y la correspondiente mejora en la calidad de vida de los ciudadanos."
                className="block leading-relaxed"
              />
              <BodyText
                text="Un programa de investigación coherente garantiza que nuestros productos incorporen la última tecnología apropiada que permita satisfacer y superar las expectativas de nuestros clientes."
                className="block leading-relaxed"
              />
              <ul className="space-y-3 pt-2">
                {[
                  "Software de control y gestión de tráfico vehicular y peatonal.",
                  "Sistemas de semaforización y estudios de flujos vehiculares y peatonales.",
                  "Modelación de intersecciones y sistemas de señalización vial.",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-contrast text-body-md-mobile md:text-body-md leading-relaxed"
                  >
                    <span className="mt-2 inline-block w-2 h-2 rounded-full bg-secondary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="relative min-h-[320px] order-1 lg:order-2">
            <img
              src={imgIngeniero}
              alt="Nuestro talento"
              className="w-full h-full object-cover absolute inset-0"
            />
          </div>
        </div>

        {/* Sección 2: Calidad (imagen izquierda, panel azul derecha) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 rounded-2xl overflow-hidden shadow-sm">
          <div className="relative min-h-[320px]">
            <img
              src={imgIngeniero}
              alt="Calidad y control de tráfico"
              className="w-full h-full object-cover absolute inset-0"
            />
          </div>
          <div className="bg-secondary p-8 sm:p-12 animate-fade-up">
            <SmallLabel text="Certificaciones y Brochure" light />
            <BigTitle text="Calidad y Recursos Normados" light />
            <div className="mt-6 space-y-6">
              <BodyText
                text="Nuestros recursos y esfuerzos se han orientado hacia el diseño, fabricación, suministro de productos y mantenimiento de sistemas tecnológicos de tráfico."
                color="text-contrast-light"
                className="block leading-relaxed"
              />
              <BodyText
                text="Todos nuestros productos y sistemas cuentan con las normas que garantizan la absoluta confiabilidad de nuestra empresa como aliado."
                color="text-contrast-light"
                className="block leading-relaxed"
              />
              <BodyText
                text="Nuestros procesos de diseño y mantenimiento cumplen con estrictas normas de calidad, lo que asegura la confiabilidad de nuestra empresa como aliado y la eficiencia en la aplicación de las soluciones para cada una de sus necesidades."
                color="text-contrast-light"
                className="block leading-relaxed"
              />
            </div>
          </div>
        </div>

        {/* Sección 3: Compromiso (panel amarillo izquierda, imagen derecha) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 rounded-2xl overflow-hidden shadow-sm">
          <div className="bg-primary p-8 sm:p-12 animate-fade-up order-2 lg:order-1">
            <SmallLabel text="Política de Calidad" />
            <BigTitle text="Compromiso Seguro y Sostenible" />
            <div className="mt-6 space-y-6">
              <BodyText
                text="Estamos comprometidos con la calidad, seguridad e innovación en nuestras aplicaciones y servicios para la movilidad, manteniendo siempre un trato personalizado con el cliente e involucrándolo plenamente en los proyectos que realizan."
                className="block leading-relaxed"
              />
              <BodyText
                text="Proporcionamos siempre un servicio integral para lograr la satisfacción de nuestros clientes de la industria privada y del sector oficial."
                className="block leading-relaxed"
              />
              <BodyText
                text="Con el SG, seguridad, salud en el trabajo para nuestros colaboradores, proveedores y contratistas, aseguramos las condiciones para un trabajo seguro y confiable, previniendo accidentes de trabajo y enfermedades laborales."
                className="block leading-relaxed"
              />
              <BodyText
                text="A través de la identificación de los peligros y prevención de riesgos, planes de contingencia asociados con las actividades y aportes significativos al ambiente, optimizamos los recursos renovables y no renovables, previniendo la contaminación."
                className="block leading-relaxed"
              />
              <BodyText
                text="Cumplimos con la legislación colombiana vigente aplicable y la mejora continua en el desempeño de los programas de calidad, Seguridad, Salud en el trabajo y ambiente, para fortalecer el desarrollo de competencias además de la calidad de vida de los trabajadores."
                className="block leading-relaxed"
              />
            </div>
          </div>
          <div className="relative min-h-[320px] order-1 lg:order-2">
            <img
              src={imgFabrica}
              alt="Compromiso en planta y línea de semáforos"
              className="w-full h-full object-cover absolute inset-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreNosotros;
