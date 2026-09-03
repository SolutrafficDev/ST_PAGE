import serviciop from "../../assets/services/5/title.png";
import imgAplicCard from "../../assets/services/5/card.png";
import carrusel1 from "../../assets/services/5/1.png";
import carrusel2 from "../../assets/services/5/2.png";
import carrusel3 from "../../assets/services/5/3.png";
import carrusel4 from "../../assets/services/5/4.png";
import carrusel5 from "../../assets/services/5/5.png";
import carrusel6 from "../../assets/services/5/6.png";

const producto = {
  id: "aplicativos-especiales",
  titulo: "Aplicativos Especiales",
  descripcionCorta: "Desarrollo de aplicaciones y soluciones tecnológicas a la medida.",
  descripcionLarga:
    "En Aplicativos Especiales desarrollamos soluciones tecnológicas a la medida para la gestión de la movilidad: aplicaciones móviles, plataformas web, sistemas de pago y reserva, y herramientas de analítica de datos que integran toda la operación en una sola plataforma.",
  gif: imgAplicCard,
  imagen: serviciop,
  seccionesAplic: [
    {
      titulo: "Alimentación con Energía Solar",
      img: carrusel1,
      parrafos: [
        "Suministramos una fuente de energía eléctrica confiable y amigable con el medio ambiente, basada en la energía solar, generando un impacto positivo al medio ambiente y un ahorro económico significativo a mediano y largo plazo. Nuestro sistema está diseñado para aportar energía a elementos de control de movilidad y señalización de manera independiente o a un sistema completo. Nuestros diseños responden a conceptos arquitectónicos y urbanísticos, permitiéndoles incorporarse en el amoblamiento y embellecimiento de la ciudad.",
      ],
    },
    {
      titulo: "Video Detección",
      img: carrusel2,
      parrafos: [
        "Solución basada en video analítica en domo PTZ que permiten entre otras lecturas de placas en tiempo real, conteo de vehículos, identificación de infractores, control de velocidad, lo cual permite a la administración incrementar su nivel de gestión, gracias a la plataforma de reportes en tiempo real.",
      ],
    },
    {
      titulo: "Panel Flecha para Desviación",
      img: carrusel3,
      parrafos: [
        "El panel flecha para desviación de Solutraffic son dispositivos temporales empleados en el control del tráfico, alerta de cierre de carriles y/o guianza de tráfico en zonas de obra. Con fácil y rápido manejo de forma manual e inalámbrica, con posibilidad de administración del dispositivo desde la red de una manera remota. Con múltiples opciones de montaje.",
      ],
    },
    {
      titulo: "Gestión de Inventarios",
      img: carrusel4,
      parrafos: [
        "Procesa información del inventario municipal de semaforización, a través de un mapa interactivo de la ciudad, que permite el registro de todos los eventos relacionados con cada ítem, facilitando un mayor control de la gestión. Nuestro sistema permite una gestión proactiva que resulta en grandes ahorros y una disminución en los beneficios perdidos de sus activos, ya que está cien por ciento basado en web y utiliza tecnologías de última generación, facilitando su uso, incluso en dispositivos móviles.",
      ],
    },
    {
      titulo: "Gestión PQR",
      img: carrusel5,
      parrafos: [
        "El sistema de gestión de Peticiones, Quejas y Reclamos (PQR) permite llevar registro, hacer seguimiento y contar con la trazabilidad de todas las solicitudes que la Secretaría de Movilidad reciba. Estas se pueden tipificar de acuerdo a las necesidades de la entidad. El sistema es totalmente flexible en cuanto al proceso y la forma de ingresar la información. Además permite el manejo de alarmas, detección de cuellos de botella, manejo de archivos adjuntos y de indicadores de gestión requeridos para emprender procesos de certificación de calidad o mejoramiento continuo, permitiendo hacer gestión proactiva, incrementando la eficiencia y disminuyendo los tiempos de respuesta.",
      ],
    },
    {
      titulo: "Sistema de Inventario de Semaforización y Mobiliario Urbano",
      img: carrusel6,
      parrafos: [
        "El sistema de gestión de inventarios de semaforización y mobiliario urbano permite de manera interactiva en el mapa de la ciudad, recolectar información de todos los equipos, registrar todos los eventos relacionados, hacer consultas y realizar un adecuado control. Dentro de la información recolectada están las coordenadas geográficas, fotografías, ficha técnica, fechas de vencimiento de garantías, soporte, contratos y fechas de mantenimiento. El sistema emplea correo electrónico para hacer notificaciones y lanzar alertas. Adicionalmente permite la generación de tickets de soporte para reporte de daños, mantenimientos o eventos en general y es adaptable a las necesidades puntuales. El sistema promueve una gestión proactiva basada en información estructurada, lo que redunda en mayor eficiencia, menores tiempos de respuesta, ahorros y disminución del lucro cesante de sus activos.",
      ],
    },
  ],
};

export default producto;