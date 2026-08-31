import { useNavigate } from "react-router-dom";
import { BodyText, TertiaryText } from "./Typography";

const ServiceCard = ({ servicio, index }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/servicios/${servicio.id}`)}
      className={`group h-full flex flex-col cursor-pointer transition-all duration-300 animate-fade-up bg-white rounded-2xl shadow-xl hover:shadow-2xl`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="relative overflow-hidden flex-shrink-0">
        <img
          src={servicio.gif}
          alt={servicio.titulo}
          className="w-full h-80 sm:h-72 lg:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/15" />
      </div>
      <div className="bg-white p-6 sm:p-8 flex flex-col flex-1">
        <TertiaryText
          text={servicio.titulo}
          weight="font-semibold"
          color="text-contrast"
        />
        <BodyText
          text={servicio.descripcionCorta}
          color="text-contrast-soft"
          className="mt-3 text-lg leading-relaxed flex-1"
        />
        <button
          onClick={() => navigate(`/servicios/${servicio.id}`)}
          className="mt-6 inline-flex items-center gap-2 bg-primary text-accent px-6 py-3 rounded font-semibold cursor-pointer transition-all duration-200 hover:bg-secondary hover:text-primary self-start"
        >
          Ver más →
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
