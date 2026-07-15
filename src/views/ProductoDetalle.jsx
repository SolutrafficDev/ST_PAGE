import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import productos from "../data/productos";
import { PrimaryText, SecondaryText, BodyText, TertiaryText } from "../components/Typography";
import Carrusel from "../components/Carrusel";

const FilaTabla = ({ label, value }) => (
  <div className="flex border-b border-gray-200 px-5 py-4">
    <span className="w-1/3 font-semibold text-contrast text-body-sm-mobile md:text-body-sm flex-shrink-0">{label}</span>
    <span className="w-2/3 text-contrast-soft text-body-sm-mobile md:text-body-sm">{value}</span>
  </div>
);

const ProductoDetalle = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const producto = productos.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      <div className="bg-accent pt-20">
        <img
          src={producto.imagen}
          alt={producto.titulo}
          className="w-full object-cover block"
        />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        <div className="text-center">
          <PrimaryText text={producto.titulo} color="text-secondary" />
        </div>

        <BodyText
          text={producto.descripcionLarga}
          className="text-lg leading-relaxed block"
        />

        <section>
          <SecondaryText
            text="Características Especiales"
            color="text-secondary"
            className="mb-6"
          />
          <Carrusel slides={producto.caracteristicas} />
        </section>

        {producto.fichaTecnica ? (
          <div className="space-y-12">
            
            <SecondaryText text="Ficha Técnica" color="text-secondary" />

            {producto.fichaTecnica.map((seccion, i) => (
              <section key={i}>
                <TertiaryText text={seccion.titulo} weight="font-semibold" color="text-secondary" />
                <div className="mt-4 bg-white rounded-md shadow-sm border border-gray-100 divide-y divide-gray-100">
                  {seccion.filas.map((fila, j) => (
                    <FilaTabla key={j} label={fila.label} value={fila.value} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        ) : (
          <section>
            <SecondaryText
              text="Especificaciones Técnicas"
              color="text-secondary"
              className="mb-6"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {producto.especificaciones.map((spec, i) => {
                const Icon = spec.icon;
                return (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-5 rounded-xl border border-gray-200 bg-white shadow-sm"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="text-primary text-lg" />
                    </div>
                    <div>
                      <p className="font-semibold text-contrast text-body-md-mobile md:text-body-md">
                        {spec.label}
                      </p>
                      <p className="text-contrast-soft text-body-sm-mobile md:text-body-sm mt-0.5">
                        {spec.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        <div className="pt-4 text-center">
          <button
            onClick={() => navigate("/#productos")}
            className="inline-flex items-center gap-2 bg-primary text-accent px-6 py-3 rounded font-semibold cursor-pointer transition-all duration-200 hover:bg-secondary hover:text-primary"
          >
            ← Volver a productos
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductoDetalle;
