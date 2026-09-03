import imgSigma from "../../assets/services/1/title.png";
import imgSigmaIntro from "../../assets/services/1/intro.png";
import imgSigmaCard from "../../assets/services/1/card.png";

const producto = {
  id: "division-sigma",
  titulo: "División Sigma",
  descripcionCorta: "Central de gestión de tráfico y monitoreo de dispositivos en tiempo real.",
  descripcionLarga:
    "La central es una suite de software de gestión prevista para ser ubicada en el centro de operaciones de una ciudad o departamento, o ser implementada de manera portátil a través de la web, permitiendo monitorear cientos de dispositivos de control de tráfico desde una ubicación central.",
  descripcionAdicional:
    "Múltiples módulos para visualización de mapas, vistas tabulares, estadísticas, vistas interactivas de las cámaras, así como la muestra de datos de tráfico y los módulos de tiempo.",
  productosCentrales: [
    { label: "Equipos de semaforización", texto: "Sistema de monitoreo." },
  ],
  sistemaMonitoreo:
    "La gestión de tráfico urbano se convierte en un gran desafío para las secretarías de movilidad de los municipios. Un uso más eficiente de la capacidad de las vías, flujos de tráfico armonizados, prelación a los medios de transporte público y el enfoque en la seguridad de los peatones, su calidad de vida y productividad de la urbe, son las prioridades sobre las que se basan las implementaciones de gestión de tráfico de Solutraffic.",
  gif: imgSigmaCard,
  imagen: imgSigma,
  imagenLateral: imgSigmaIntro,
  caracteristicas: [
    { texto: "Compatible con toda la línea de productos de semáforos, señalética y controladores de Solutraffic y otros proveedores." },
    { texto: "El diseño modular permite fáciles y rápidas actualizaciones de estado en tiempo real." },
    { texto: "Supervisa las condiciones y dispositivos de tráfico de todo el sistema." },
    { texto: "Operación de corredores viales (paros y alargamientos de ciclos, cambio de planes y tiempos)." },
    { texto: "Detección inmediata de fallas en la red (semáforos, cámaras, señalética)." },
    { texto: "Módulo de priorización que permite el paso del transporte público y otros vehículos como ambulancias y bomberos." },
    { texto: "Características de informes personalizados y exportación a través de las herramientas de Microsoft Office™." },
    { texto: "Completo sistema de ayuda y documentación de usuario disponible." },
  ],
};

export default producto;