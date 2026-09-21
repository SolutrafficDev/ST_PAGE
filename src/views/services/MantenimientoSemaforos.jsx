import serviciop from "../../assets/services/6/title.png";
import imgMttoCard from "../../assets/services/6/card.png";
import carrusel4 from "../../assets/services/6/1.png";
import { FaClock, FaUsers, FaBolt } from "react-icons/fa";

const producto = {
  id: "mantenimiento-semaforos",
  titulo: "Mantenimiento de Semáforos y Controladores",
  descripcionCorta: "Programas preventivos y correctivos para sistemas semafóricos.",
  descripcionLarga:
    "Solutraffic ofrece el servicio de mantenimiento 24 horas al día, los 365 días del año a todos los componentes del sistema. Nuestro servicio atiende todo tipo de daños y dificultades técnicas en controladores, unidades de comunicación, infraestructura, acometidas, entre otros, tanto a nuestros propios equipos como de terceros.",
  descripcionAdicional:
    "Contamos con un software único para inventario y control del amoblamiento de las intersecciones que existen en la ciudad, garantizando un buen plan de mantenimiento, solicitud de garantías, información estadística y visualización georeferenciada de cada componente.",
  gif: imgMttoCard,
  imagen: serviciop,
  imagenLateral: carrusel4,
  caracteristicas: [
    { icon: FaClock, label: "Servicio 24 horas", texto: "Mantenimiento los 365 días del año a todos los componentes del sistema." },
    { icon: FaUsers, label: "Personal Calificado", texto: "Equipo técnico especializado para atender todo tipo de daños y dificultades técnicas." },
    { icon: FaBolt, label: "Rapidez en la solución", texto: "Respuesta inmediata ante fallas en controladores, unidades de comunicación e infraestructura." },
  ],
};

export default producto;