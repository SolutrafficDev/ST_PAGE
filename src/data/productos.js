import gifEjemplo from "../assets/a.gif";
import serviciop from "../assets/serviciop.png";
import carrusel1 from "../assets/carrusel1.jpg";
import carrusel2 from "../assets/carrusel2.jpg";
import carrusel3 from "../assets/carrusel3.jpg";
import carrusel4 from "../assets/carrusel4.jpg";
import {
  FaBolt, FaWifi, FaMicrochip, FaNetworkWired, FaShieldAlt, FaCertificate,
  FaTachometerAlt, FaSatelliteDish, FaSun, FaThermometerHalf,
  FaMobileAlt, FaServer, FaCodeBranch, FaLock, FaCloud, FaSyncAlt,
  FaCamera, FaBullseye, FaCar, FaTools, FaCalendarCheck,
} from "react-icons/fa";

const productos = [
  {
    id: "semaforo-inteligente",
    titulo: "Semáforo Inteligente",
    descripcionCorta: "Sistema de control semafórico adaptativo que optimiza los flujos en tiempo real.",
    descripcionLarga:
      "Equipo con sensores IoT y algoritmos de inteligencia artificial que ajustan los tiempos de verde/rojo según la demanda vehicular detectada. Reduce la congestión hasta un 30 % y disminuye las emisiones contaminantes al evitar paradas innecesarias.",
    gif: gifEjemplo,
    imagen: serviciop,
    caracteristicas: [
      { img: carrusel1, texto: "Algoritmos de IA que aprenden patrones de tráfico y se adaptan automáticamente." },
      { img: carrusel2, texto: "Sensores IoT integrados para detección en tiempo real de vehículos y peatones." },
      { img: carrusel3, texto: "Plataforma de monitoreo centralizado con dashboards y alertas inteligentes." },
      { img: carrusel4, texto: "Reducción comprobada de hasta un 30 % en tiempos de congestión vehicular." },
    ],
    especificaciones: [
      { icon: FaBolt, label: "Alimentación", value: "110-220 VAC con respaldo de batería por 4 horas." },
      { icon: FaWifi, label: "Conectividad", value: "4G/LTE, WiFi y Ethernet redundante." },
      { icon: FaMicrochip, label: "Procesador", value: "ARM Cortex-A72 con 4 GB RAM y 32 GB almacenamiento." },
      { icon: FaNetworkWired, label: "Protocolos", value: "NTCIP 1202, NTCIP 1203 y API REST personalizable." },
      { icon: FaShieldAlt, label: "Gabinete", value: "NEMA 4X, IP66, resistencia a temperatura de -20°C a 60°C." },
      { icon: FaCertificate, label: "Garantía", value: "3 años con soporte técnico 24/7." },
    ],
  },
  {
    id: "radar-velocidad",
    titulo: "Radar de Velocidad",
    descripcionCorta: "Dispositivo de detección y registro de excesos de velocidad con conectividad cloud.",
    descripcionLarga:
      "Radar bidireccional con cámara de alta definición capaz de leer placas y enviar infracciones en tiempo real a la central de monitoreo. Incluye panel solar integrado para operación autónoma y resistente a condiciones climáticas extremas.",
    gif: gifEjemplo,
    imagen: serviciop,
    caracteristicas: [
      { img: carrusel1, texto: "Cámara HD con visión nocturna y reconocimiento óptico de caracteres (OCR)." },
      { img: carrusel2, texto: "Panel solar integrado para operación 100 % autónoma sin conexión eléctrica." },
      { img: carrusel3, texto: "Transmisión en tiempo real a central de monitoreo con alertas de infracción." },
      { img: carrusel4, texto: "Carcasa resistente a condiciones climáticas extremas y actos vandálicos." },
    ],
    especificaciones: [
      { icon: FaTachometerAlt, label: "Rango de medición", value: "10 km/h a 250 km/h con precisión de ±1 km/h." },
      { icon: FaSatelliteDish, label: "Tecnología", value: "Radar bidireccional Doppler + cámara de 8 MP." },
      { icon: FaSun, label: "Panel solar", value: "100W, batería de litio 60 Ah para 7 días de autonomía." },
      { icon: FaWifi, label: "Conectividad", value: "4G/LTE, almacenamiento local de 128 GB." },
      { icon: FaShieldAlt, label: "Carcasa", value: "Aluminio IP67, resistencia a impactos IK10." },
      { icon: FaThermometerHalf, label: "Temperatura", value: "-30°C a 70°C, humedad 0-100 %." },
      { icon: FaCertificate, label: "Garantía", value: "2 años con mantenimiento preventivo semestral." },
    ],
  },
  {
    id: "app-movilidad",
    titulo: "App de Movilidad",
    descripcionCorta: "Aplicación ciudadana con información de tráfico, rutas óptimas y reportes en vivo.",
    descripcionLarga:
      "App multiplataforma que muestra el estado del tráfico en tiempo real, calcula rutas eficientes, alerta sobre incidentes viales y permite a los usuarios reportar problemas (baches, semáforos dañados, accidentes) directamente a las autoridades.",
    gif: gifEjemplo,
    imagen: serviciop,
    caracteristicas: [
      { img: carrusel1, texto: "Mapa interactivo con tráfico en tiempo real y alertas de incidentes viales." },
      { img: carrusel2, texto: "Calculador de rutas óptimas considerando tráfico, peajes y preferencias del usuario." },
      { img: carrusel3, texto: "Sistema de reportes ciudadanos con georreferenciación y seguimiento en vivo." },
      { img: carrusel4, texto: "Notificaciones push personalizadas sobre eventos de movilidad en la ciudad." },
    ],
    especificaciones: [
      { icon: FaMobileAlt, label: "Plataformas", value: "iOS 15+ y Android 10+ con una sola base de código." },
      { icon: FaMicrochip, label: "Tecnología", value: "React Native con mapas nativos (Google Maps / Apple Maps)." },
      { icon: FaServer, label: "Backend", value: "Node.js en AWS con autoescalado para 1M+ usuarios concurrentes." },
      { icon: FaCodeBranch, label: "APIs", value: "REST y GraphQL, documentación OpenAPI 3.0." },
      { icon: FaLock, label: "Seguridad", value: "Autenticación OAuth 2.0, datos cifrados en tránsito y reposo." },
      { icon: FaCloud, label: "SLA", value: "99.9 % de disponibilidad con soporte técnico prioritario." },
      { icon: FaSyncAlt, label: "Actualizaciones", value: "Releases mensuales con nuevas funcionalidades." },
    ],
  },
  {
    id: "contador-vehicular",
    titulo: "Contador Vehicular IoT",
    descripcionCorta: "Sensor de conteo con transmisión inalámbrica para aforos precisos 24/7.",
    descripcionLarga:
      "Dispositivo compacto basado en visión artificial que clasifica vehículos (autos, buses, camiones, bicicletas) y envía los datos a la nube en tiempo real. Ideal para estudios de aforo sin intervención humana y con alta precisión.",
    gif: gifEjemplo,
    imagen: serviciop,
    caracteristicas: [
      { img: carrusel1, texto: "Visión artificial con clasificación de vehículos (autos, buses, camiones, bicicletas)." },
      { img: carrusel2, texto: "Transmisión inalámbrica a la nube con almacenamiento y respaldo local." },
      { img: carrusel3, texto: "Instalación compacta y no intrusiva sin corte de vía ni obras civiles." },
      { img: carrusel4, texto: "Dashboard en línea con datos históricos, gráficos y exportación a Excel." },
    ],
    especificaciones: [
      { icon: FaCamera, label: "Tecnología", value: "Visión artificial con cámara estéreo y procesamiento onboard." },
      { icon: FaBullseye, label: "Precisión", value: "98 % en clasificación y conteo vehicular." },
      { icon: FaCar, label: "Clasificación", value: "Automóviles, buses, camiones, motocicletas y bicicletas." },
      { icon: FaWifi, label: "Conectividad", value: "4G/LTE con almacenamiento local de respaldo de 7 días." },
      { icon: FaBolt, label: "Alimentación", value: "Batería recargable con panel solar, autonomía de 10 días." },
      { icon: FaTools, label: "Instalación", value: "Montaje en poste existente en menos de 30 minutos." },
      { icon: FaCalendarCheck, label: "Garantía", value: "2 años con soporte remoto y actualizaciones de firmware." },
    ],
  },
];

export default productos;
