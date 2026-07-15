import { SecondaryText, BodyText } from "../components/Typography";
import { logos } from "../assets/logos";

const ProgressBar = ({ label, percent }) => (
  <div className="w-full">
    <div className="flex justify-between mb-1">
      <BodyText text={label} weight="font-semibold" />
      <BodyText text={`${percent}%`} weight="font-semibold" />
    </div>
    <div className="w-full bg-foreground rounded-full h-4 overflow-hidden">
      <div
        className="bg-primary h-full rounded-full transition-all duration-700"
        style={{ width: `${percent}%` }}
      />
    </div>
  </div>
);

const SobreNosotros = () => {
  return (
    <section id="sobre" className="section px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
        <div className="flex-1 space-y-16 text-left">
        
          {/* ¿Quienes Somos? */}
          <div>
            <div className="animate-fade-up"><SecondaryText text="¿Quienes Somos?" /></div>
            <div className="mt-6 space-y-4">
              <BodyText text="Solutraffic S.A.S es una compañía Colombiana dedicada a la ingeniería de la movilidad urbana, con veinticinco años de experiencia en el mercado de productos, componentes y soluciones integrales para la gestión de esta en las ciudades." />
              <BodyText text="Nuestros recursos y esfuerzos se han orientado hacia el diseño, fabricación, suministro de productos y mantenimiento de sistemas tecnológicos de tráfico, que cuentan con las normas que garantizan la absoluta confiabilidad de nuestra empresa como aliado." />
              <BodyText text="Lo anterior soportado por un programa de investigación y desarrollo que asegura que todo el portafolio de soluciones tecnológicas esté a la vanguardia. Así su municipio o empresa logrará la optimización del presupuesto y la eficiencia en la aplicación de las soluciones para cada una de sus necesidades." />
              <BodyText text="En la actualidad son cientos de intersecciones viales intervenidas e implementadas exitosamente por Solutraffic." />
            </div>
          </div>

          {/* Nuestro talento */}
          <div>
            <div className="animate-fade-up"><SecondaryText text="Nuestro talento" /></div>
            <div className="mt-6 space-y-4">
              <BodyText text="Un experimentado equipo de ingenieros y técnicos especialistas están a su servicio brindando un conocimiento excepcional en productos y soluciones para la gestión de la movilidad como software de control y gestión de tráfico vehicular y peatonal, sistemas de semaforización, estudios de flujos vehiculares y peatonales, modelación de intersecciones, sistemas de señalización vial. Nuestros ingenieros de hardware y software trabajan en estrecha colaboración con las autoridades de tránsito de los municipios y los comités de normas para diseñar y crear soluciones innovadoras y fiables para la gestión de la movilidad y la correspondiente mejora en la calidad de vida de los ciudadanos. Un programa de investigación coherente garantiza que nuestros productos incorporen la última tecnología apropiada que permita satisfacer y superar las expectativas de nuestros clientes." />
            </div>
          </div>

          {/* Nuestras Certificaciones */}
          <div>
            <div className="animate-fade-up"><SecondaryText text="Nuestras Certificaciones" /></div>
            <div className="mt-6">
              <BodyText text="Nuestros recursos y esfuerzos se han orientado hacia el diseño, fabricación, suministro de productos y mantenimiento de sistemas tecnológicos de tráfico, que cuentan con las normas que garantizan la absoluta confiabilidad de nuestra empresa como aliado." />
            </div>
          </div>

          {/* Descarga nuestro Brochure */}
          <div className="bg-foreground p-8 rounded-md shadow-sm">
            <SecondaryText text="Descarga nuestro Brochure" />
            <div className="mt-4">
              <a
                href="#"
                className="text-primary underline hover:text-secondary transition-colors text-body-md-mobile md:text-body-md font-semibold"
              >
                Click Aqui para ver PDF
              </a>
            </div>
          </div>

          {/* Política de Calidad */}
          <div>
            <div className="animate-fade-up"><SecondaryText text="Política de Calidad" /></div>
            <div className="mt-6">
              <BodyText text="Estamos comprometidos: Con la calidad, seguridad e innovación en nuestras aplicaciones y servicios para la movilidad, manteniendo siempre un trato personalizado con el cliente e involucrándolo plenamente en los proyectos que realizan, proporcionando siempre un servicio integral para lograr la satisfacción de nuestros clientes de la industria privada y del sector oficial Con el SG seguridad, salud en el trabajo para nuestros colaboradores, proveedores, contratistas, asegurando las condiciones para un trabajo seguro, confiable previniendo accidentes de trabajo y enfermedades laborales, a través de la identificación de los peligros y prevención de riesgos, planes de contingencia asociados con las actividades y aportes significativos al ambiente, optimización de los recursos renovables y no renovables, previniendo la contaminación, cumpliendo con la legislación colombiana vigente aplicable y la mejora continua en el desempeño de los programas de calidad, Seguridad, Salud en el trabajo y ambiente, para fortalecer el desarrollo de competencias además de la calidad de vida de los trabajadores." />
            </div>
          </div>
        </div>

        <div className="flex-shrink-0 lg:sticky lg:top-8 lg:self-start">
          <img src={logos.whiteSm} alt="Solutraffic" className="w-48 h-auto mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default SobreNosotros;
