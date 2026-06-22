import { useParams, useNavigate } from "react-router-dom";
import productos from "../data/productos";
import { PrimaryText, BodyText, SecondaryText } from "../components/Typography";

const ProductoDetalle = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const producto = productos.find((p) => p.id === id);

  if (!producto) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 px-4">
        <SecondaryText text="Producto no encontrado" />
        <button
          onClick={() => navigate("/")}
          className="bg-primary text-accent px-6 py-3 rounded font-semibold cursor-pointer transition-all duration-200 hover:bg-secondary hover:text-primary"
        >
          Volver al inicio
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="relative w-full h-[50vh] overflow-hidden">
        <img
          src={producto.gif}
          alt={producto.titulo}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <PrimaryText text={producto.titulo} color="text-white" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <BodyText
          text={producto.descripcionLarga}
          className="text-lg leading-relaxed"
        />

        <button
          onClick={() => navigate("/#productos")}
          className="mt-8 inline-flex items-center gap-2 bg-primary text-accent px-6 py-3 rounded font-semibold cursor-pointer transition-all duration-200 hover:bg-secondary hover:text-primary"
        >
          ← Volver a productos
        </button>
      </div>
    </div>
  );
};

export default ProductoDetalle;
