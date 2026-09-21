import gifEjemplo from "../../assets/products/4/1.gif";
import serviciop from "../../assets/products/6/main.png";
import carrusel1 from "../../assets/products/6/1.jpeg";
import carrusel2 from "../../assets/products/6/2.jpeg";

const producto = {
  id: "unidad-analitica-vial-fija",
  titulo: "Unidad de Analítica Vial Fija A180 — Sistema fijo de captura, procesamiento y transmisión de datos de tránsito",
  subtitulo: "Analítica vial con IA · Procesamiento local · Conectividad satelital",
  refManual: "ST-FT-UAV-001",
  descripcionCorta:
    "Sistema fijo con IA y visión computacional para captura, procesamiento local y transmisión de datos de tránsito, con conectividad Starlink.",
  descripcionLarga:
    "Solución tecnológica de instalación permanente sobre postes de infraestructura vial, diseñada para la captura, el procesamiento local y la transmisión de información de tránsito mediante inteligencia artificial y visión computacional. Integra una cámara IP de analítica, una plataforma de procesamiento NVIDIA Jetson, comunicaciones satelitales Starlink y un gabinete plástico para intemperie. Permite el monitoreo de tráfico, el conteo y la clasificación vehicular, la generación de estadísticas de movilidad y la compartición de conectividad con controladores semafóricos u otros equipos autorizados de la intersección.",
  gif: gifEjemplo,
  imagen: serviciop,
  galeria: [carrusel1, carrusel2],
  caracteristicas: [
    "Procesamiento local en tiempo real (Edge Computing) con NVIDIA Jetson para conteo, clasificación vehicular y detección de eventos.",
    "Cámara IP de analítica con captura de video en tiempo real, orientación y ángulo configurables según el proyecto.",
    "Antena satelital Starlink integrada para transmisión de datos y acceso remoto, sin dependencia de redes celulares.",
    "Comparte conectividad Starlink con controladores semafóricos y otros equipos autorizados de la intersección.",
  ],
  fichaTecnica: [
    {
      titulo: "Descripción General",
      filas: [
        { label: "Equipo", value: "Unidad de Analítica Vial Fija" },
        { label: "Referencia", value: "A180" },
        { label: "Fabricante", value: "Solutraffic S.A.S." },
        { label: "Origen", value: "Cali, Colombia" },
        { label: "Documento", value: "ST-FT-UAV-001 v1.0 — Junio 2026" },
        { label: "Categoría", value: "Sistema fijo de analítica vial" },
      ],
    },
    {
      titulo: "Cámara de Analítica",
      filas: [
        { label: "Tipo", value: "Cámara IP de analítica para monitoreo vial." },
        { label: "Funciones", value: "Captura de video en tiempo real, monitoreo, conteo y clasificación vehicular." },
        { label: "Montaje", value: "Sobre poste, en posición que garantice visualización clara y amplia del área de interés." },
        { label: "Ajuste", value: "Orientación y ángulo de inclinación configurables según los requerimientos del proyecto." },
      ],
    },
    {
      titulo: "Procesamiento y Analítica (IA)",
      filas: [
        { label: "Unidad de cómputo", value: "Plataforma embebida NVIDIA Jetson optimizada para IA y análisis de video en tiempo real." },
        { label: "Capacidades", value: "Procesamiento de video, conteo y clasificación vehicular, detección de eventos y generación de estadísticas." },
        { label: "Datos", value: "Almacenamiento temporal de información en el equipo y envío a la plataforma de monitoreo." },
      ],
    },
    {
      titulo: "Comunicaciones y Conectividad",
      filas: [
        { label: "Enlace de datos", value: "Antena satelital Starlink instalada en la parte superior del gabinete." },
        { label: "Red local", value: "Switch Ethernet industrial para la interconexión de los dispositivos del sistema." },
        { label: "Funciones remotas", value: "Transmisión a la plataforma de monitoreo, acceso remoto de soporte y actualización de software." },
        { label: "Compartición de internet", value: "Comparte la conectividad Starlink con controladores semafóricos u otros equipos autorizados de la intersección." },
      ],
    },
    {
      titulo: "Alimentación Eléctrica",
      filas: [
        { label: "Tensión de operación", value: "120 VAC, proveniente de la infraestructura eléctrica existente." },
        { label: "Componentes", value: "Fuentes de alimentación reguladas, protecciones eléctricas y distribución interna de energía." },
        { label: "Puesta a tierra", value: "Sistema de puesta a tierra integrado para protección de los equipos." },
      ],
    },
    {
      titulo: "Gabinete e Instalación",
      filas: [
        { label: "Gabinete", value: "Plástico para intemperie, protección contra lluvia, polvo, humedad y radiación solar." },
        { label: "Equipos alojados", value: "Procesador NVIDIA Jetson, switch Ethernet, fuentes de alimentación, protecciones y equipos de comunicaciones." },
        { label: "Fijación", value: "Sobre poste mediante abrazaderas y soportes mecánicos adecuados." },
        { label: "Soporte de instalación", value: "Poste metálico o de concreto con integridad estructural verificada." },
        { label: "Cableado", value: "En canalización con protección mecánica, materiales resistentes a UV y cables identificados." },
      ],
    },
    {
      titulo: "Operación, Mantenimiento y Seguridad",
      filas: [
        { label: "Régimen de operación", value: "Continuo y autónomo, 24 horas al día / 7 días a la semana." },
        { label: "Mantenimiento preventivo", value: "Inspección mensual (visual), trimestral (limpieza de cámara y cableado) y semestral (revisión integral)." },
        { label: "Riesgo principal", value: "Riesgo eléctrico y trabajo en alturas durante instalación y mantenimiento." },
        { label: "Condición de seguridad", value: "Desenergizar y verificar ausencia de tensión antes de intervenir; no operar en tormentas eléctricas." },
        { label: "Operación normal", value: "Gabinete cerrado en todo momento durante el funcionamiento." },
      ],
    },
  ],
  destacadas: [
    "Procesamiento Edge Computing con NVIDIA Jetson para IA en tiempo real.",
    "Cámara IP de analítica con orientación y ángulo configurables.",
    "Conectividad satelital Starlink sin dependencia de redes celulares.",
    "Comparte internet con controladores semafóricos de la intersección.",
    "Gabinete plástico para intemperie con protección UV.",
    "Operación continua y autónoma 24/7.",
  ],
  normativa: "RETIE",
};

export default producto;
