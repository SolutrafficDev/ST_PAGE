import { useNavigate } from "react-router-dom";
import { BodyText, TertiaryText } from "./Typography";

const ProductCard = ({ producto, index }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/productos/${producto.id}`)}
      className="group bg-foreground rounded-md shadow-sm overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-lg animate-fade-up"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="relative overflow-hidden">
        <img
          src={producto.gif}
          alt={producto.titulo}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
      </div>
      <div className="p-5">
        <TertiaryText
          text={producto.titulo}
          weight="font-semibold"
          color="text-contrast"
        />
        <BodyText
          text={producto.descripcionCorta}
          color="text-contrast-soft"
          className="mt-2 line-clamp-2"
        />
        <span className="inline-block mt-4 text-primary font-semibold text-sm transition-all duration-300 group-hover:translate-x-1">
          Ver más →
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
