import gifEjemplo from "../assets/a.gif";
import serviciop from "../assets/serviciop.png";
import carrusel1 from "../assets/carrusel1.jpg";
import carrusel2 from "../assets/carrusel2.jpg";
import carrusel3 from "../assets/carrusel3.jpg";
import carrusel4 from "../assets/carrusel4.jpg";
import {
  FaMicrochip, FaBullseye, FaGlobeAmericas, FaFileAlt, FaClock,
  FaHardHat, FaBook, FaShieldAlt, FaWrench, FaCertificate,
  FaLeaf, FaChartLine, FaRulerCombined, FaUsers,
  FaParking, FaCode, FaChartBar, FaHeadset,
  FaClipboardCheck, FaRoad, FaExclamationTriangle,
  FaBus, FaLaptopCode,
} from "react-icons/fa";

const servicios = [
  {
    id: "estudios-trafico",
    titulo: "Estudios de Tráfico",
    descripcionCorta: "Análisis y modelación de flujos vehiculares para optimizar la movilidad urbana.",
    descripcionLarga:
      "Realizamos estudios detallados de aforos vehiculares, peatones y ciclistas mediante tecnologías avanzadas de conteo y modelación microscópica. Entregamos informes ejecutivos con recomendaciones accionables para mejorar la circulación y reducir congestionamientos.",
    gif: gifEjemplo,
    imagen: serviciop,
    caracteristicas: [
      { img: carrusel1, texto: "Conteo automatizado con sensores IoT de última generación para datos precisos 24/7." },
      { img: carrusel2, texto: "Modelación microscópica de tráfico con software especializado para simular escenarios." },
      { img: carrusel3, texto: "Informes ejecutivos con recomendaciones accionables y priorización de intervenciones." },
      { img: carrusel4, texto: "Monitoreo en tiempo real y dashboards interactivos para la toma de decisiones." },
    ],
    especificaciones: [
      { icon: FaMicrochip, label: "Tecnología", value: "Sensores IoT, cámaras de video análisis y radares de conteo." },
      { icon: FaBullseye, label: "Precisión", value: "±2% en aforos vehiculares y peatonales." },
      { icon: FaGlobeAmericas, label: "Cobertura", value: "Intersecciones, corredores viales y zonas peatonales." },
      { icon: FaFileAlt, label: "Reportes", value: "Formato PDF/Excel con gráficos, tablas y análisis estadístico." },
      { icon: FaClock, label: "Plazo de entrega", value: "15 días hábiles para estudios estándar." },
    ],
  },
  {
    id: "senializacion-vial",
    titulo: "Señalización Vial",
    descripcionCorta: "Diseño e implementación de señalización vertical, horizontal y semaforización.",
    descripcionLarga:
      "Diseñamos y supervisamos la instalación de señales verticales, marcas viales y sistemas semafóricos inteligentes. Cumplimos con la normativa vigente y aplicamos criterios de ingeniería de tránsito para garantizar la seguridad de todos los usuarios de la vía.",
    gif: gifEjemplo,
    imagen: serviciop,
    caracteristicas: [
      { img: carrusel1, texto: "Señalización vertical reflectiva de alta durabilidad con normativa MOPT vigente." },
      { img: carrusel2, texto: "Marcas viales en termoplástico con microesferas reflectantes para máxima visibilidad nocturna." },
      { img: carrusel3, texto: "Sistemas semafóricos inteligentes con control adaptativo y comunicación centralizada." },
      { img: carrusel4, texto: "Auditorías de seguridad vial y planes de señalización temporales para obras." },
    ],
    especificaciones: [
      { icon: FaHardHat, label: "Material", value: "Acero galvanizado, aluminio y termoplástico reflectivo." },
      { icon: FaBook, label: "Normativa", value: "MOPT, Manual de Señalización Vial y estándares internacionales." },
      { icon: FaShieldAlt, label: "Garantía", value: "5 años en señales verticales, 2 años en marcas viales." },
      { icon: FaWrench, label: "Mantenimiento", value: "Programa preventivo trimestral con reposición inmediata." },
      { icon: FaCertificate, label: "Certificaciones", value: "ISO 9001 en procesos de instalación y control de calidad." },
    ],
  },
  {
    id: "movilidad-sostenible",
    titulo: "Movilidad Sostenible",
    descripcionCorta: "Soluciones de transporte limpio, ciclovías y planes de movilidad activa.",
    descripcionLarga:
      "Promovemos la transición hacia modos de transporte sostenibles mediante el diseño de redes de ciclovías, zonas peatonales y programas de movilidad compartida. Evaluamos el impacto ambiental y social de cada intervención.",
    gif: gifEjemplo,
    imagen: serviciop,
    caracteristicas: [
      { img: carrusel1, texto: "Diseño de redes de ciclovías integradas con el sistema de transporte público existente." },
      { img: carrusel2, texto: "Zonas peatonales temporales y permanentes con mobiliario urbano sostenible." },
      { img: carrusel3, texto: "Programas de bicicletas compartidas con estaciones inteligentes y app de usuario." },
      { img: carrusel4, texto: "Evaluación de huella de carbono y beneficios ambientales de cada intervención." },
    ],
    especificaciones: [
      { icon: FaLeaf, label: "Estándar", value: "LEED for Cities, TOD Standard y guías de movilidad activa." },
      { icon: FaChartLine, label: "Indicadores", value: "Reducción de CO2, aumento de viajes activos, satisfacción ciudadana." },
      { icon: FaRulerCombined, label: "Alcance", value: "Estudios de factibilidad, diseño conceptual y detalle, supervisión de obra." },
      { icon: FaUsers, label: "Participación", value: "Talleres ciudadanos, encuestas y mesas de trabajo colaborativas." },
      { icon: FaClock, label: "Plazo", value: "3 meses para estudios de prefactibilidad y diseño conceptual." },
    ],
  },
  {
    id: "gestion-estacionamiento",
    titulo: "Gestión de Estacionamiento",
    descripcionCorta: "Auditorías y sistemas inteligentes para la administración de estacionamientos.",
    descripcionLarga:
      "Optimizamos la capacidad de estacionamiento mediante estudios de demanda, tarifas dinámicas y sistemas de guiado. Implementamos soluciones tecnológicas para maximizar la rotación y mejorar la experiencia del usuario.",
    gif: gifEjemplo,
    imagen: serviciop,
    caracteristicas: [
      { img: carrusel1, texto: "Sistema de guiado con sensores de ocupación y señalización LED en tiempo real." },
      { img: carrusel2, texto: "Tarifas dinámicas basadas en demanda que optimizan la rotación y los ingresos." },
      { img: carrusel3, texto: "App de pago y reserva con integración a plataformas de movilidad." },
      { img: carrusel4, texto: "Analítica de datos con reportes de ocupación, ingresos y comportamiento de usuarios." },
    ],
    especificaciones: [
      { icon: FaMicrochip, label: "Tecnología", value: "Sensores ultrasónicos, cámaras LPR y plataforma cloud." },
      { icon: FaParking, label: "Cobertura", value: "Desde 50 hasta 5000 espacios por instalación." },
      { icon: FaCode, label: "Integración", value: "API abierta para conectar con sistemas de pago y movilidad." },
      { icon: FaChartBar, label: "Reportes", value: "Dashboard en tiempo real con métricas de ocupación, ingresos y rotación." },
      { icon: FaHeadset, label: "Soporte", value: "Mantenimiento remoto y presencial con SLA de 4 horas." },
    ],
  },
  {
    id: "seguridad-vial",
    titulo: "Seguridad Vial",
    descripcionCorta: "Auditorías, inspecciones y planes de seguridad para reducir siniestros de tránsito.",
    descripcionLarga:
      "Identificamos puntos críticos de accidentalidad y proponemos contramedidas efectivas. Realizamos auditorías viales, inspecciones técnicas y campañas de concientización para reducir la siniestralidad en zonas urbanas e interurbanas.",
    gif: gifEjemplo,
    imagen: serviciop,
    caracteristicas: [
      { img: carrusel1, texto: "Auditorías de seguridad vial en fase de diseño, construcción y operación." },
      { img: carrusel2, texto: "Identificación de puntos críticos con análisis histórico de accidentalidad." },
      { img: carrusel3, texto: "Campañas de concientización y educación vial para todos los actores viales." },
      { img: carrusel4, texto: "Propuestas de contramedidas con priorización basada en costo-beneficio." },
    ],
    especificaciones: [
      { icon: FaClipboardCheck, label: "Metodología", value: "Auditorías según norma ISO 39001 y guías PIARC." },
      { icon: FaRoad, label: "Alcance", value: "Vías urbanas, rurales, intersecciones y tramos de alta siniestralidad." },
      { icon: FaExclamationTriangle, label: "Indicadores", value: "Tasa de siniestros, severidad, exposición y factor de riesgo." },
      { icon: FaFileAlt, label: "Productos", value: "Informe técnico con ranking de intervenciones y plan de acción." },
      { icon: FaClock, label: "Plazo", value: "20 días hábiles para auditorías de hasta 50 km de vía." },
    ],
  },
  {
    id: "transporte-publico",
    titulo: "Transporte Público",
    descripcionCorta: "Diseño y optimización de rutas, frecuencias y paradas de transporte colectivo.",
    descripcionLarga:
      "Analizamos la demanda actual y futura de transporte público para rediseñar rutas, ajustar frecuencias y ubicar paradas estratégicas. Aplicamos modelos de optimización que reducen tiempos de espera y mejoran la cobertura del servicio.",
    gif: gifEjemplo,
    imagen: serviciop,
    caracteristicas: [
      { img: carrusel1, texto: "Modelación de demanda con encuestas origen-destino y datos de validación electrónica." },
      { img: carrusel2, texto: "Optimización de rutas y frecuencias mediante algoritmos de balance de carga." },
      { img: carrusel3, texto: "Diseño de paradas y terminales con criterios de accesibilidad universal." },
      { img: carrusel4, texto: "Integración multimodal con bicicletas, peatones y otros modos de transporte." },
    ],
    especificaciones: [
      { icon: FaLaptopCode, label: "Herramientas", value: "PTV Visum, EMME, modelos de transporte de última generación." },
      { icon: FaBus, label: "Cobertura", value: "Redes de 10 a 500 rutas y flotas de hasta 2000 vehículos." },
      { icon: FaChartLine, label: "Indicadores", value: "Tiempo de espera, velocidad comercial, cobertura y demanda atendida." },
      { icon: FaFileAlt, label: "Productos", value: "Plan maestro de transporte, estudio de factibilidad y diseño operacional." },
      { icon: FaClock, label: "Plazo", value: "4 meses para estudios completos de red de transporte público." },
    ],
  },
];

export default servicios;
