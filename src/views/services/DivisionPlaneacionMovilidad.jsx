import serviciop from "../../assets/services/3/title.png";
import imgPlaneacionCard from "../../assets/services/3/card.png";
import imgBloque1 from "../../assets/services/3/1.png";
import imgBloque2 from "../../assets/services/3/2.png";
import imgBloque3 from "../../assets/services/3/3.png";
import {
  FaRoad,
  FaWifi,
  FaVideo,
  FaClock,
  FaTrafficLight,
  FaCogs,
  FaChartLine,
  FaChartBar,
} from "react-icons/fa";

const producto = {
  id: "division-planeacion-movilidad",
  titulo: "División de Planeación en Movilidad",
  descripcionCorta: "Estudios de movilidad, ingeniería de tránsito y planes de manejo de tráfico.",
  descripcionLarga:
    "Solutraffic cuenta con equipos, software especializado, ingenieros y expertos en movilidad que ponen a su disposición experiencia y dedicación para el diseño y desarrollo de estudios de movilidad.",
  gif: imgPlaneacionCard,
  imagen: serviciop,
  serviciosRelacionados: [
    { icon: FaRoad, texto: "Implementación de par vial para mejora de la movilidad, planes de manejo de tráfico y optimización de rutas de transporte público." },
    { icon: FaWifi, texto: "Proyectos de comunicaciones y sincronismo." },
    { icon: FaVideo, texto: "Proyectos de CCTV." },
    { icon: FaClock, texto: "Estudios de programaciones." },
    { icon: FaTrafficLight, texto: "Estudios de Justificación de semáforos." },
    { icon: FaCogs, texto: "Estudios sintonía fina de semáforos." },
    { icon: FaChartLine, texto: "Mediciones continuas y periódicas de flujo vehicular y peatonal." },
    { icon: FaChartBar, texto: "Mediciones de parámetros de tráfico." },
  ],
  bloques: [
    {
      titulo: "Ingeniería de Tránsito",
      descripcion:
        "La Ingeniería de Tránsito consiste en estructurar planes adecuados, prácticos y bien meditados para mejorar la seguridad y la movilidad de los flujos vehiculares, sobre todo en áreas críticas, donde la interacción con otras disciplinas es fundamental. Brindamos un completo compendio de estudios en cada una de las fases de su proyecto (pre factibilidad, factibilidad, implementación y operación):",
      items: [
        "Volúmenes de tránsito en tramos viales.",
        "Volúmenes de tránsito en intersecciones.",
        "Estudio de Peatones (cuantificación de volúmenes, velocidad de caminata, conflictos con vehículos, seguridad y continuidad de elementos).",
        "Estudio de Bicicarriles.",
        "Estudios de Velocidad.",
        "Tiempos de recorrido.",
        "Ocupación vehicular.",
        "Tiempo de detención en intersecciones.",
      ],
      img: imgBloque1,
    },
    {
      titulo: "Seguridad Vial",
      subtitulo: "Auditoría Vial",
      descripcion:
        "Es un reconocimiento en detalle del desempeño en cuanto a la seguridad vial de un proyecto, tramo o sección vial en cualquier etapa de su ciclo vital (pre-construcción, construcción o post-construcción).",
      items: [
        "La ASV y/o Auditorías Viales (rural) debe ser realizada por un equipo auditor con experiencia.",
        "El objetivo de una Auditoría Vial es determinar y reportar condiciones potenciales de riesgo a la seguridad vial en un proyecto para todos los tipos de usuario.",
        "También identificar y recomendar las oportunidades de implementar acciones para mejorar la seguridad vial.",
      ],
      img: imgBloque2,
    },
    {
      titulo: "Transporte y Movilidad",
      descripcion:
        "Planes Estratégicos de Seguridad Vial: Brindamos el respaldo profesional en cada uno de los Pilares, desarrollamos de manera completa los planes de acción definidos y damos garantía de cumplimiento a nuestros procesos.",
      items: [
        "Proyectos de Seguridad Vial: son un instrumento de intervención urbana y rural que deben ser ejecutados como proyectos sociales, de desarrollo, ambientales y de productividad a fin de garantizar la movilidad de todos los usuarios y el acceso a las facilidades que se ofrecen.",
        "Los proyectos ejecutados por nuestra empresa dan garantía de cumplir con el objetivo de generar un impacto positivo en las condiciones de vida de los habitantes, las condiciones de movilidad y condiciones ambientales.",
      ],
      img: imgBloque3,
    },
  ],
};

export default producto;