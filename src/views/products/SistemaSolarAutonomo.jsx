import gifEjemplo from "../../assets/a.gif";
import serviciop from "../../assets/serviciop.png";
import carrusel1 from "../../assets/carrusel1.jpg";
import carrusel2 from "../../assets/carrusel2.jpg";
import carrusel3 from "../../assets/carrusel3.jpg";
import carrusel4 from "../../assets/carrusel4.jpg";
import {
  FaBolt, FaWifi, FaShieldAlt,
  FaSolarPanel, FaBatteryFull, FaRuler,
} from "react-icons/fa";

const producto = {
  id: "sistema-solar-autonomo",
  titulo: "Sistema Solar Autónomo para Equipos ITS",
  subtitulo: "Señalización vial · Sistemas semafóricos · Sistemas ITS",
  refManual: "ST-MAN-SOL-001 v1.0",
  descripcionCorta: "Sistema fotovoltaico autónomo de 12 VDC para alimentación de controladores semafóricos M-TIX y equipos ITS.",
  descripcionLarga:
    "Sistema fotovoltaico autónomo de 12 VDC diseñado para la alimentación de controladores semafóricos M-TIX y equipos ITS, equipado con estructura para dos módulos solares montada sobre poste. Incorpora tecnología de carga MPPT de alta eficiencia, banco de baterías para almacenamiento de energía y operación continua bajo diversas condiciones climáticas y ambientales presentes en el territorio colombiano, incluyendo zonas de alta radiación solar, ambientes húmedos, lluvias intensas, variaciones de temperatura y condiciones costeras.",
  gif: gifEjemplo,
  imagen: serviciop,
  caracteristicas: [
    { img: carrusel1, texto: "Seguimiento MPPT de alta eficiencia (>98%) con detección automática de batería y carga adaptativa." },
    { img: carrusel2, texto: "Aplicable a todas las regiones de Colombia, incluyendo zonas costeras y de alta radiación solar." },
    { img: carrusel3, texto: "Monitoreo y configuración por conexión inalámbrica / VRM con autonomía nocturna y operación en días nublados." },
    { img: carrusel4, texto: "Mantenimiento sencillo con tornillería anticorrosión y estructura de aluminio anodizado 6005-T5." },
  ],
  especificaciones: [
    { icon: FaSolarPanel, label: "Estructura de soporte", value: "Aluminio anodizado 6005-T5, tornillería acero inoxidable A2-70/304, soporta viento hasta 60 m/s (216 km/h)." },
    { icon: FaBolt, label: "Controlador de carga", value: "Victron SmartSolar MPPT 100/50, 12 VDC, 50 A, Voc máx 100 V, eficiencia >98%." },
    { icon: FaBatteryFull, label: "Banco de baterías", value: "Configuración paralelo 12 V, tecnologías AGM/GEL/Litio LiFePO4, protección breaker DC." },
    { icon: FaRuler, label: "Orientación", value: "Cara al sur geográfico, inclinación 10° a 20°, sitio libre de sombras en horas de mayor radiación." },
    { icon: FaShieldAlt, label: "Alimentación M-TIX", value: "12 VDC directa del banco, breaker/fusible DC + SPD, puesta a tierra según RETIE." },
    { icon: FaWifi, label: "Monitoreo", value: "Remoto vía VRM (VE.Direct) con configuración por conexión inalámbrica." },
  ],
  fichaTecnica: [
    {
      titulo: "Estructura de soporte",
      filas: [
        { label: "Material", value: "Aluminio anodizado 6005-T5" },
        { label: "Tornillería", value: "Acero inoxidable A2-70 / 304" },
        { label: "Viento máx.", value: "Hasta 60 m/s (216 km/h)" },
        { label: "Módulos", value: "2 (máx. 2279 × 1150 mm)" },
        { label: "Marco de módulo", value: "Espesor 28 a 45 mm" },
        { label: "Diámetro de poste", value: "60 a 114 mm" },
      ],
    },
    {
      titulo: "Controlador de carga MPPT",
      filas: [
        { label: "Modelo", value: "Victron SmartSolar MPPT 100/50" },
        { label: "Tensión del sistema", value: "12 V DC" },
        { label: "Corriente de carga", value: "50 A" },
        { label: "Voc máx. PV", value: "100 V" },
        { label: "Isc máx. PV", value: "60 A" },
        { label: "Potencia FV útil", value: "~700 W a 12 V" },
        { label: "Eficiencia", value: "> 98 %" },
        { label: "Carga", value: "3 etapas + ecualización" },
        { label: "Comunicación", value: "Bluetooth / VE.Direct (VRM)" },
      ],
    },
    {
      titulo: "Banco de baterías",
      filas: [
        { label: "Configuración", value: "Paralelo, 12 V (capacidad suma en Ah)" },
        { label: "Tecnologías", value: "AGM / GEL / Litio LiFePO4" },
        { label: "Montaje", value: "Apiladas con separador entre unidades" },
        { label: "Protección", value: "Breaker DC dimensionado a Isc" },
      ],
    },
    {
      titulo: "Orientación e inclinación",
      filas: [
        { label: "Orientación", value: "Cara al sur geográfico (para instalaciones ubicadas en Colombia y el hemisferio norte cercano al ecuador)." },
        { label: "Inclinación", value: "Entre 10° y 20°, según la ubicación y condiciones de instalación." },
        { label: "Cobertura geográfica", value: "Aplicable a todas las regiones de Colombia." },
        { label: "Ubicación de montaje", value: "Sitio libre de sombras durante las horas de mayor radiación solar." },
      ],
    },
    {
      titulo: "Alimentación del equipo (M-TIX)",
      filas: [
        { label: "Tensión", value: "12 V DC directa del banco" },
        { label: "Protección", value: "Breaker/fusible DC dedicado + SPD" },
        { label: "Puesta a tierra", value: "Según RETIE" },
        { label: "Monitoreo", value: "Remoto vía VRM (VE.Direct)" },
      ],
    },
    {
      titulo: "Mantenimiento",
      filas: [
        { label: "Mensual", value: "Inspección visual y verificación del controlador" },
        { label: "Trimestral", value: "Limpieza, bornes y revisión de corrosión" },
        { label: "Semestral", value: "Tornillería, protecciones DC y tierra" },
        { label: "Anual", value: "Balance energético, capacidad y firmware" },
      ],
    },
  ],
  destacadas: [
    "Seguimiento MPPT de alta eficiencia (>98%).",
    "Detección automática de batería y carga adaptativa.",
    "Aplicable a todas las regiones de Colombia.",
    "Monitoreo y configuración por conexión inalámbrica / VRM.",
    "Autonomía nocturna y operación en días nublados.",
    "Mantenimiento sencillo y tornillería anticorrosión.",
  ],
  normativa: "RETIE · NTC 2050 · NSR-10 · Res. 4272/2021 (alturas).",
};

export default producto;
