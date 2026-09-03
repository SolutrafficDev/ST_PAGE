import serviciop from "../../assets/services/7/title.png";
import imgSmartCard from "../../assets/services/7/card.png";
import carrusel1 from "../../assets/services/7/1.png";
import carrusel2 from "../../assets/services/7/2.png";
import carrusel3 from "../../assets/services/7/3.png";
import carrusel4 from "../../assets/services/7/4.png";
import { FaWifi, FaCamera, FaLeaf, FaBolt } from "react-icons/fa";

const producto = {
  id: "smart-city",
  titulo: "Smart City",
  descripcionCorta: "Soluciones inteligentes para ciudades conectadas y eficientes.",
  descripcionLarga:
    "Básicamente es una ciudad que piensa y actúa de manera autónoma. Hoy en día existen muchos mitos y tabúes sobre qué es una ciudad inteligente y cómo debe funcionar, por eso queremos romper paradigmas y aclarar lo que significa este término. Lo primero es saber cómo se crea la inteligencia artificial.",
  gif: imgSmartCard,
  imagen: serviciop,
  imagenLateral: carrusel1,
  seccionesAplic: [
    {
      titulo: "Llevamos los datos a la acción",
      img: carrusel2,
      parrafos: [
        "Una vez que obtenemos los diferentes datos, es cuando podemos derivar diferentes funciones en la ciudad o si queremos llamarlas unidades de negocio.",
      ],
    },
    {
      titulo: "Red de alumbrado público",
      img: carrusel3,
      parrafos: [
        "Esta red existente en todas las ciudades, es la principal fuente de adquisición de datos en una ciudad inteligente; dado que las luminarias se encuentran en un lugar estratégico, el uso de diferentes tecnologías adheridas a las luminarias Smart, puede dar lugar a varios servicios o unidades de negocio para ofrecer al ciudadano.",
      ],
    },
    {
      titulo: "Red de semáforos",
      img: carrusel4,
      parrafos: [
        "Así mismo esta red intenta controlar el tráfico, pero ¿por qué utilizarla solo para controlar el tráfico, cuando también puedes conocer cómo va a ser el tráfico de la ciudad, o controlarlo, por seguridad, para la transmisión de datos y por supuesto para adquisición de datos.",
      ],
    },
  ],
  caracteristicas: [
    { icon: FaWifi, label: "Comunicaciones inalámbricas", texto: "Transmisión de datos por red Wi-Fi." },
    { icon: FaCamera, label: "Seguridad", texto: "Instalación de cámaras de vigilancia o multiusos." },
    { icon: FaLeaf, label: "Calidad y medio ambiente", texto: "Sensores de temperatura, humedad y calidad del aire, para indicar el entorno." },
    { icon: FaBolt, label: "Ahorros de energía", texto: "Optimización del consumo energético de la ciudad." },
  ],
};

export default producto;