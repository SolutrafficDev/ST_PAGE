import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import servicios from "../data/servicios";
import { PrimaryText, SecondaryText, BodyText } from "../components/Typography";
import Carrusel from "../components/Carrusel";

const ServicioDetalle = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const servicio = servicios.find((s) => s.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!servicio) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 px-4">
        <SecondaryText text="Servicio no encontrado" />
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
          src={servicio.imagen}
          alt={servicio.titulo}
          className="w-full object-cover block"
        />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        <div className="text-center">
          <PrimaryText text={servicio.titulo} color="text-secondary" />
        </div>

        {servicio.imagenLateral ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <BodyText
                text={servicio.descripcionLarga}
                className="text-lg leading-relaxed block"
              />
              {servicio.descripcionAdicional && (
                <BodyText
                  text={servicio.descripcionAdicional}
                  className="text-lg leading-relaxed block"
                />
              )}
            </div>
            <div className="rounded-2xl overflow-hidden shadow-sm">
              <img
                src={servicio.imagenLateral}
                alt={servicio.titulo}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        ) : (
          <>
            <BodyText
              text={servicio.descripcionLarga}
              className="text-lg leading-relaxed block"
            />
            {servicio.descripcionAdicional && (
              <BodyText
                text={servicio.descripcionAdicional}
                className="text-lg leading-relaxed block"
              />
            )}
          </>
        )}

        {servicio.sistemaMonitoreo && (
          <div className="bg-secondary rounded-2xl p-8 sm:p-10">
            <p className="font-semibold text-primary text-body-md-mobile md:text-body-md mb-3">
              Sistema de monitoreo
            </p>
            <BodyText
              text={servicio.sistemaMonitoreo}
              color="text-contrast-light"
              className="leading-relaxed block"
            />
          </div>
        )}

        {servicio.capacitaciones && (
          <section>
            <SecondaryText
              text={servicio.capacitaciones.titulo}
              color="text-secondary"
              className="mb-6"
            />
            <div className="p-8 rounded-2xl bg-secondary">
              <BodyText
                text={servicio.capacitaciones.descripcion}
                color="text-contrast-light"
                className="leading-relaxed block"
              />
            </div>
          </section>
        )}

        {servicio.campanas && (
          <section>
            <SecondaryText
              text={servicio.campanas.titulo}
              color="text-secondary"
              className="mb-6"
            />
            <div className="space-y-4">
              {servicio.campanas.parrafos.map((p, i) => (
                <BodyText
                  key={i}
                  text={p}
                  className="leading-relaxed block"
                />
              ))}
            </div>
          </section>
        )}

        {servicio.seccionesAplic?.length > 0 && (
          <section>
            <div className="space-y-8">
              {servicio.seccionesAplic.map((sec, i) => {
                const azul = i % 2 === 0;
                return (
                  <div
                    key={i}
                    className={`flex flex-col lg:flex-row gap-0 rounded-2xl overflow-hidden shadow-sm ${
                      azul ? "bg-secondary" : "bg-primary"
                    } ${i % 2 === 0 ? "" : "lg:flex-row-reverse"}`}
                  >
                    <div className="lg:w-2/5 lg:flex-shrink-0">
                      <img
                        src={sec.img}
                        alt={sec.titulo}
                        className="w-full h-56 lg:h-full object-cover"
                      />
                    </div>
                    <div className="p-6 sm:p-10 flex-1">
                      <p
                        className={`font-semibold text-body-md-mobile md:text-body-md uppercase tracking-wide ${
                          azul ? "text-primary" : "text-secondary"
                        }`}
                      >
                        {sec.titulo}
                      </p>
                      <div className="mt-4 space-y-4">
                        {sec.parrafos.map((p, j) => (
                          <BodyText
                            key={j}
                            text={p}
                            color={azul ? "text-contrast-light" : "text-contrast"}
                            className="leading-relaxed block"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {servicio.serviciosRelacionados?.length > 0 && (
          <section>
            <SecondaryText
              text="Servicios Relacionados"
              color="text-secondary"
              className="mb-6"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {servicio.serviciosRelacionados.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-5 rounded-xl border border-gray-200 bg-white shadow-sm"
                >
                  <div className="sm:w-24 sm:flex-shrink-0">
                    <img
                      src={item.img ?? item.imagen}
                      alt={item.texto}
                      className="w-full h-16 object-cover rounded-lg"
                    />
                  </div>
                  <p className="text-contrast text-body-md-mobile md:text-body-md leading-relaxed">
                    {item.texto}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {servicio.bloques?.length > 0 && (
          <section>
            <SecondaryText
              text={servicio.bloquesTitulo ?? "Estudios y Seguridad"}
              color="text-secondary"
              className="mb-6"
            />
            <div className="space-y-8">
              {servicio.bloques.map((bloque, i) => (
                <div
                  key={i}
                  className="flex flex-col lg:flex-row gap-8 rounded-2xl overflow-hidden shadow-sm border border-gray-200 bg-white"
                >
                  <div className="lg:w-1/3 lg:flex-shrink-0">
                    <img
                      src={bloque.img}
                      alt={bloque.titulo}
                      className="w-full h-56 lg:h-full object-cover"
                    />
                  </div>
                  <div className="p-6 sm:p-8 flex-1">
                    <p className="font-semibold text-secondary text-body-md-mobile md:text-body-md uppercase tracking-wide">
                      {bloque.titulo}
                    </p>
                    {bloque.subtitulo && (
                      <p className="font-semibold text-contrast mt-1">
                        {bloque.subtitulo}
                      </p>
                    )}
                    <p className="text-contrast-soft text-body-md-mobile md:text-body-md leading-relaxed mt-4">
                      {bloque.descripcion}
                    </p>
                    {bloque.items?.length > 0 && (
                      <ul className="mt-4 space-y-2">
                        {bloque.items.map((item, j) => (
                          <li
                            key={j}
                            className="flex items-start gap-3 text-contrast text-body-md-mobile md:text-body-md leading-relaxed"
                          >
                            <span className="mt-2 inline-block w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {servicio.subservicios && (
          <section>
            <SecondaryText
              text="Subservicios"
              color="text-secondary"
              className="mb-6"
            />
            <div className="space-y-6">
              {servicio.subservicios.map((sub, i) => (
                <div
                  key={i}
                  className="flex flex-col sm:flex-row gap-6 p-6 rounded-xl border border-gray-200 bg-white shadow-sm"
                >
                  {sub.img && (
                    <div className="sm:w-64 sm:flex-shrink-0">
                      <img
                        src={sub.img}
                        alt={sub.titulo}
                        className="w-full h-44 sm:h-full object-cover rounded-lg"
                      />
                    </div>
                  )}
                  <div>
                    <p className="font-semibold text-contrast text-body-md-mobile md:text-body-md mb-2">
                      {sub.titulo}
                    </p>
                    <p className="text-contrast-soft text-body-md-mobile md:text-body-md leading-relaxed">
                      {sub.texto}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {servicio.caracteristicas?.length > 0 && (
          <section>
            <SecondaryText
              text="Características"
              color="text-secondary"
              className="mb-6"
            />
            {servicio.caracteristicas[0]?.img ? (
              <Carrusel slides={servicio.caracteristicas} />
            ) : servicio.caracteristicas[0]?.icon ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {servicio.caracteristicas.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={i}
                      className="flex flex-col items-center gap-3 p-6 rounded-2xl border border-gray-200 bg-white shadow-sm text-center"
                    >
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                        <Icon className="text-primary text-2xl" />
                      </div>
                      <div>
                        <p className="font-semibold text-contrast text-body-md-mobile md:text-body-md">
                          {item.label}
                        </p>
                        <p className="text-contrast-soft text-body-sm-mobile md:text-body-sm mt-1 leading-relaxed">
                          {item.texto}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {servicio.caracteristicas.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-5 rounded-xl border border-gray-200 bg-white shadow-sm"
                  >
                    <div className="w-6 h-6 mt-0.5 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-contrast text-body-md-mobile md:text-body-md leading-relaxed">
                      {item.texto}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </section>
        )}

        {servicio.especificaciones?.length > 0 && (
          <section>
            <SecondaryText
              text="Especificaciones Técnicas"
              color="text-secondary"
              className="mb-6"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {servicio.especificaciones.map((spec, i) => {
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
            onClick={() => navigate("/#servicios")}
            className="inline-flex items-center gap-2 bg-primary text-accent px-6 py-3 rounded font-semibold cursor-pointer transition-all duration-200 hover:bg-secondary hover:text-primary"
          >
            ← Volver a servicios
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicioDetalle;
