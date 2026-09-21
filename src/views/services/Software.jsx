import serviciop from "../../assets/services/8/title.png";
import imgSoftCard from "../../assets/services/8/card.png";
import carrusel1 from "../../assets/services/8/1.png";
import carrusel2 from "../../assets/services/8/2.png";
import carrusel3 from "../../assets/services/8/3.png";

const producto = {
  id: "software",
  titulo: "Software",
  descripcionCorta: "Software de control y gestión de tráfico vehicular y peatonal.",
  descripcionLarga:
    "El software personalizado beneficiará enormemente a sus procesos comerciales únicos al resolver sus problemas específicos, satisfacer sus necesidades únicas y hacer que su flujo de trabajo sea más fluido, más fácil, más rápido y más eficiente.",
  gif: imgSoftCard,
  imagen: serviciop,
  imagenLateral: carrusel1,
  seccionesAplic: [
    {
      titulo: "Aplicaciones móviles",
      img: carrusel2,
      parrafos: [
        "Aplicaciones móviles nativas (en Kotlin, Swift) o híbridas (en Flutter, React Native) totalmente personalizadas para complementar su aplicación web o creadas como una solución separada con su propio back-end (.NET, Java, PHP, Node.js).",
      ],
    },
    {
      titulo: "Aplicaciones de BigData",
      img: carrusel3,
      parrafos: [
        "Herramientas personalizadas creadas específicamente para proporcionar la información más profunda sobre los componentes significativos de su negocio en función de los resultados del procesamiento de datos de gran volumen.",
        "- Control y optimización de procesos (por ejemplo, gestión de tráfico, gestión de stock, etc.)",
        "- Mantenimiento predictivo de equipos",
        "- Segmentación de clientes",
        "- Seguimiento y estado de la salud del paciente",
      ],
    },
  ],
  caracteristicas: [
    { texto: "Venta de derecho de uso temporal de códigos de software para: solución de códigos cifrados, algoritmos de aprendizaje automatizado, inteligencia artificial, la solución de procesos y ecuaciones matemáticas de orden N." },
    { texto: "Venta de servicios de desarrollo de software, de sistemas informáticos (planificación, el análisis, diseño, escritura del código, programación, pruebas)." },
    { texto: "Desarrollo, compra y venta de plataformas en la nube para análisis de problemas matemáticos de orden N, así como otras soluciones algorítmicas para uso procesamiento de iteraciones en red." },
    { texto: "Personalización de programas informáticos a clientes, software de contenido digital, configuración de aplicaciones existentes con otros sistemas de información, así como el desarrollo de otros productos intangibles según requerimiento del cliente." },
  ],
};

export default producto;