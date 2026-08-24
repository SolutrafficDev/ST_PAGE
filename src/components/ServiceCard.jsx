import { useNavigate } from "react-router-dom";
import { BodyText, TertiaryText } from "./Typography";

const ServiceCard = ({ servicio, index }) => {
  const navigate = useNavigate();
  const tint = "bg-foreground";

  return (
    <div
      onClick={() => navigate(`/servicios/${servicio.id}`)}
      className={`group ${tint} rounded-md shadow-sm overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-lg animate-fade-up`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="relative overflow-hidden">
        <img
          src={servicio.gif}
          alt={servicio.titulo}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
      </div>
      <div className="p-5">
        <TertiaryText
          text={servicio.titulo}
          weight="font-semibold"
          color="text-contrast"
        />
        <BodyText
          text={servicio.descripcionCorta}
          color="text-contrast-soft"
          className="mt-2 line-clamp-2"
        />
        <button
          onClick={() => navigate(`/servicios/${servicio.id}`)}
          className="mt-4 inline-flex items-center gap-2 bg-primary text-accent px-5 py-2.5 rounded font-semibold cursor-pointer transition-all duration-200 hover:bg-secondary hover:text-primary"
        >
          Ver más →
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
