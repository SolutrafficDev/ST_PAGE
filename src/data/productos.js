import gifEjemplo from "../assets/a.gif";

const productos = [
  {
    id: "semaforo-inteligente",
    titulo: "Semáforo Inteligente",
    descripcionCorta: "Sistema de control semafórico adaptativo que optimiza los flujos en tiempo real.",
    descripcionLarga:
      "Equipo con sensores IoT y algoritmos de inteligencia artificial que ajustan los tiempos de verde/rojo según la demanda vehicular detectada. Reduce la congestión hasta un 30 % y disminuye las emisiones contaminantes al evitar paradas innecesarias.",
    gif: gifEjemplo,
  },
  {
    id: "radar-velocidad",
    titulo: "Radar de Velocidad",
    descripcionCorta: "Dispositivo de detección y registro de excesos de velocidad con conectividad cloud.",
    descripcionLarga:
      "Radar bidireccional con cámara de alta definición capaz de leer placas y enviar infracciones en tiempo real a la central de monitoreo. Incluye panel solar integrado para operación autónoma y resistente a condiciones climáticas extremas.",
    gif: gifEjemplo,
  },
  {
    id: "app-movilidad",
    titulo: "App de Movilidad",
    descripcionCorta: "Aplicación ciudadana con información de tráfico, rutas óptimas y reportes en vivo.",
    descripcionLarga:
      "App multiplataforma que muestra el estado del tráfico en tiempo real, calcula rutas eficientes, alerta sobre incidentes viales y permite a los usuarios reportar problemas (baches, semáforos dañados, accidentes) directamente a las autoridades.",
    gif: gifEjemplo,
  },
  {
    id: "contador-vehicular",
    titulo: "Contador Vehicular IoT",
    descripcionCorta: "Sensor de conteo con transmisión inalámbrica para aforos precisos 24/7.",
    descripcionLarga:
      "Dispositivo compacto basado en visión artificial que clasifica vehículos (autos, buses, camiones, bicicletas) y envía los datos a la nube en tiempo real. Ideal para estudios de aforo sin intervención humana y con alta precisión.",
    gif: gifEjemplo,
  },
];

export default productos;
