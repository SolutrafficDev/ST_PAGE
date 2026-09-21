import { FaFemale, FaLaptopCode } from "react-icons/fa";
import SectionTitle from "../components/SectionTitle";
import Reveal from "../components/Reveal";
import { BodyText, SecondaryText, TertiaryText } from "../components/Typography";
import imgPrincipal from "../assets/compromiso/principal.jpeg";
import imgPicture from "../assets/compromiso/Picture.png";
import imgPicture1 from "../assets/compromiso/Picture1.png";
import imgPicture3 from "../assets/compromiso/Picture3.png";

const Highlight = ({ children }) => (
  <strong className="font-bold text-secondary">{children}</strong>
);

const items = [
  {
    image: imgPicture,
    title: "Acceso a bienes y servicios",
    text: "Promovemos iniciativas que contribuyan a mejorar las condiciones y oportunidades de las comunidades.",
  },
  {
    image: imgPicture1,
    title: "Incidencia política",
    text: "Buscamos aportar a la construcción de iniciativas y espacios que favorezcan el desarrollo social y la inclusión.",
  },
  {
    image: imgPicture3,
    title: "Relacionamiento social e institucional",
    text: "Construimos vínculos y alianzas con diferentes actores para impulsar soluciones sostenibles y generar mayor impacto.",
  },
];

const CompromisoSocial = () => {
  return (
    <section id="compromiso" className="section bg-primary pb-16 md:pb-24 lg:pb-28">
      <SectionTitle className="mt-2" stripeColor="var(--secondary)">Compromiso Social</SectionTitle>

      <div className="max-w-7xl mx-auto mt-6 px-4 sm:px-6 lg:px-8">
        <Reveal delay={100}>
          <img
            src={imgPrincipal}
            alt="Compromiso social"
            className="w-full h-56 md:h-80 object-cover rounded-2xl shadow-md"
          />
        </Reveal>

        <Reveal delay={200} className="mt-10">
          <div className="bg-white/90 rounded-2xl p-6 sm:p-8 md:p-10 shadow-md border border-secondary/10 max-w-5xl mx-auto">
            <SecondaryText
              text="Nuestro Compromiso con la Comunidad"
              color="text-secondary"
              className="uppercase tracking-wide"
            />
            <BodyText
              text={
                <>
                  Creemos que desde el sector privado es posible{" "}
                  <Highlight>generar oportunidades, fomentar la inclusión</Highlight> y contribuir
                  de manera activa al bienestar de las personas y comunidades que enfrentan mayores
                  condiciones de vulnerabilidad. Por eso, asumimos nuestro compromiso social como
                  una responsabilidad que va más allá de nuestros proyectos y actividades
                  empresariales.
                </>
              }
              color="text-contrast"
              className="block mt-4 text-lg leading-[1.6]"
            />
            <BodyText
              text={
                <>
                  En alianza con ASOMEVID, trabajamos para generar oportunidades que contribuyan al{" "}
                  <Highlight>desarrollo integral de las familias</Highlight> y al fortalecimiento de
                  sus capacidades.{" "}
                  Esta labor se articula alrededor de tres pilares fundamentales.
                </>
              }
              color="text-contrast"
              className="block mt-4 text-lg leading-[1.6]"
            />
          </div>
        </Reveal>

        <Reveal delay={100} className="mt-10">
          <div className="relative max-w-[1100px] mx-auto">
            <div className="hidden md:block absolute top-8 left-1/2 -translate-x-1/2 w-[calc(100%-4rem)] border-t-2 border-dashed border-secondary/40" />
            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
              {items.map((item) => (
                <div
                  key={item.title}
                  className="relative flex flex-col items-center text-center"
                >
                  <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-md border border-secondary/20">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-9 h-9 object-contain"
                    />
                  </div>
                  <TertiaryText
                    text={item.title}
                    weight="font-bold"
                    color="text-secondary"
                    className="mt-4"
                  />
                  <BodyText
                    text={item.text}
                    color="text-secondary"
                    className="block mt-2 w-full max-w-[280px] mx-auto leading-[1.6]"
                  />
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={200} className="mt-10">
          <div className="max-w-6xl mx-auto bg-white/90 rounded-2xl shadow-md border border-secondary/10 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-secondary/10">
              <div className="p-6 sm:p-8 flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 rounded-full bg-primary text-secondary flex items-center justify-center">
                  <FaFemale className="text-2xl" />
                </div>
                <div>
                  <TertiaryText
                    text="Madres Cabeza de Familia"
                    weight="font-bold"
                    color="text-secondary"
                  />
                  <BodyText
                    text="Uno de nuestros principales propósitos es apoyar a las madres cabeza de familia, brindándoles oportunidades de trabajo cuando participamos en proyectos de nuestra empresa para que puedan desarrollar una actividad productiva e ingresos para sus hogares."
                    color="text-contrast"
                    className="block mt-2 leading-[1.6]"
                  />
                </div>
              </div>
              <div className="p-6 sm:p-8 flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 rounded-full bg-primary text-secondary flex items-center justify-center">
                  <FaLaptopCode className="text-2xl" />
                </div>
                <div>
                  <TertiaryText
                    text="Formación para sus Hijos"
                    weight="font-bold"
                    color="text-secondary"
                  />
                  <BodyText
                    text="Mientras ellas trabajan, sus hijos cuentan con un espacio adecuado para su formación y acompañamiento, con enfoque integral y énfasis en tecnologías, desarrollo de habilidades y nuevas oportunidades que potencien su crecimiento personal y profesional."
                    color="text-contrast"
                    className="block mt-2 leading-[1.6]"
                  />
                </div>
              </div>
            </div>
            <div className="bg-secondary px-6 sm:px-10 py-10 sm:py-12 text-center">
              <p className="max-w-[760px] mx-auto text-lg md:text-xl font-medium text-contrast-light leading-[1.6]">
                Estamos convencidos de que generar empleo y fortalecer las capacidades de las nuevas
                generaciones transforma familias y construye comunidades con mayores oportunidades.
              </p>
              <p className="mt-6 max-w-[760px] mx-auto text-lg md:text-xl font-semibold italic text-primary leading-[1.6]">
                "Porque cuando una familia crece con oportunidades, crece también toda la comunidad
                que la rodea."
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default CompromisoSocial;