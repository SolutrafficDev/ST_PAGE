import gifEjemplo from "../../assets/a.gif";
import serviciop from "../../assets/serviciop.png";
import carrusel1 from "../../assets/carrusel1.jpg";
import carrusel2 from "../../assets/carrusel2.jpg";
import carrusel3 from "../../assets/carrusel3.jpg";
import carrusel4 from "../../assets/carrusel4.jpg";

const producto = {
  id: "controlador-semafonico-mtix-8g",
  titulo: "Controlador Semafórico M-TIX-8G — Controlador de 8 grupos para gestión de intersecciones urbanas",
  subtitulo: "Control de tránsito · 8 grupos semafóricos · Arquitectura modular · ITS",
  refManual: "ST-FT-MTX8G-001",
  descripcionCorta:
    "Controlador electrónico de alta confiabilidad para la gestión de intersecciones urbanas con hasta 8 grupos semafóricos independientes.",
  descripcionLarga:
    "Controlador electrónico de alta confiabilidad para la gestión de intersecciones urbanas mediante el control de hasta ocho (8) grupos semafóricos independientes y configurables. Su arquitectura modular y escalable cubre desde intersecciones de cuatro accesos hasta escenarios complejos con giros exclusivos, pasos peatonales y ciclovías. Incorpora procesamiento embebido con microprocesadores redundantes, memoria no volátil para la conservación de planes y parámetros, y mecanismos de seguridad funcional con recuperación automática que restablecen la operación tras eventos de falla, conforme a la normativa colombiana vigente.",
  gif: gifEjemplo,
  imagen: serviciop,
  caracteristicas: [
    { img: carrusel1, texto: "8 grupos semafóricos independientes configurables por software, con 24 salidas AC y hasta 99 planes almacenables." },
    { img: carrusel2, texto: "CPU ARM Cortex-A7 con RTOS y microprocesadores redundantes para operación crítica con recuperación automática." },
    { img: carrusel3, texto: "Múltiples comunicaciones: RS-232, RS-485, Ethernet RJ-45, 4G/LTE opcional y GPS opcional." },
    { img: carrusel4, texto: "Monitor de conflictos independiente con paso a destello amarillo o rojo de emergencia ante estados incompatibles." },
  ],
  fichaTecnica: [
    {
      titulo: "Descripción General",
      filas: [
        { label: "Equipo", value: "Controlador Semafórico M-TIX-8G" },
        { label: "Referencia", value: "M-TIX-8G" },
        { label: "Fabricante", value: "Solutraffic S.A.S." },
        { label: "Origen", value: "Cali, Colombia" },
        { label: "Documento", value: "ST-FT-MTX8G-001 v1.0 — Junio 2026" },
        { label: "Categoría", value: "Control de tránsito · ITS" },
      ],
    },
    {
      titulo: "Características Eléctricas y de Operación",
      filas: [
        { label: "Grupos semafóricos", value: "8 grupos independientes configurables por software." },
        { label: "Tensión de alimentación", value: "120 VAC ±15 %, 60 Hz." },
        { label: "Consumo máximo", value: "< 200 W con todos los grupos activos." },
        { label: "Salida por grupo", value: "120 VAC, 3 A máx. por fase (rojo / amarillo / verde)." },
        { label: "Salidas de potencia", value: "24 salidas AC (3 por grupo × 8 grupos)." },
        { label: "Entradas de detección", value: "8 entradas para detectores vehiculares o peatonales." },
        { label: "Tipo de señal soportada", value: "Módulos LED." },
        { label: "Memoria de planes", value: "Hasta 99 planes semafóricos almacenables (2 a 16 fases por ciclo)." },
      ],
    },
    {
      titulo: "Arquitectura y Módulos Funcionales",
      filas: [
        { label: "CPU principal", value: "Procesador ARM Cortex-A7 con sistema operativo en tiempo real (RTOS) y microprocesadores redundantes." },
        { label: "Gestión de control", value: "Lógica de planes, fases y tiempos; memoria no volátil para conservación ante cortes de energía." },
        { label: "Módulo de salidas", value: "24 salidas de potencia AC y 8 entradas de detectores." },
        { label: "Monitor de conflictos", value: "Vigilancia independiente de estados incompatibles, con paso a destello amarillo o rojo de emergencia." },
        { label: "Módulo de alimentación", value: "Fuente conmutada con protección contra sobretensiones (salidas internas 24 V, 5 V y 3.3 V)." },
        { label: "Modos de operación", value: "Local (auto), control remoto, actuado, amarillo intermitente, todo rojo intermitente y apagado." },
      ],
    },
    {
      titulo: "Comunicaciones",
      filas: [
        { label: "RS-232", value: "Conector DB-9 macho — configuración local con laptop." },
        { label: "RS-485 (2 hilos)", value: "Bornera de 2 pines — red de controladores en cadena." },
        { label: "Ethernet RJ-45", value: "Cat-6 blindado — conexión a UTCS vía LAN o fibra óptica." },
        { label: "4G/LTE (opcional)", value: "Antena externa SMA — enlace inalámbrico con centro de control remoto." },
        { label: "GPS (opcional)", value: "Conector MCX — sincronización de tiempo en intersecciones críticas." },
      ],
    },
    {
      titulo: "Protecciones Eléctricas",
      filas: [
        { label: "Protección principal AC", value: "Termomagnético bipolar de 25 A en la entrada del controlador." },
        { label: "Entrada AC M-TIX", value: "Termomagnético de 16 A." },
        { label: "Fuente (24 VDC)", value: "Termomagnético de 6 A." },
        { label: "Salidas G1…G8", value: "Fusibles de vidrio de 2 A (20 mm)." },
        { label: "Protección interna M-TIX", value: "Fusible de vidrio de 10 A (20 mm)." },
        { label: "Sobretensiones", value: "DPS tipo II según red." },
        { label: "Puesta a tierra", value: "Conductor de cobre a varilla copperweld; resistencia ≤ 5 Ω (RETIE)." },
      ],
    },
    {
      titulo: "Características Físicas y Ambientales",
      filas: [
        { label: "Dimensiones del gabinete", value: "600 × 400 × 250 mm (ancho × alto × profundidad)." },
        { label: "Peso aproximado", value: "25 – 35 kg según configuración." },
        { label: "Grado de protección", value: "IP 54 mínimo (IP 65 recomendado para zona costera)." },
        { label: "Temperatura de operación", value: "0 °C a 65 °C." },
        { label: "Humedad relativa", value: "0 % a 95 % sin condensación." },
        { label: "Montaje", value: "Sobre poste (altura 2.5 – 3.5 m) o base de concreto con pernos de anclaje M12." },
        { label: "Vida útil de señales LED", value: "Aproximadamente 100 000 horas." },
      ],
    },
    {
      titulo: "Normatividad Aplicable",
      filas: [
        { label: "Señalización vial", value: "Manual de Señalización Vial 2025, Cap. 4 — MinTransporte Colombia." },
        { label: "NTC 4808", value: "Dispositivos de control de tránsito." },
        { label: "Decreto 431 de 2017", value: "Especificaciones técnicas de semáforos." },
        { label: "IEC 60529", value: "Grados de protección IP para gabinetes eléctricos." },
        { label: "RETIE", value: "Reglamento Técnico de Instalaciones Eléctricas (Colombia)." },
        { label: "IEEE 802.3", value: "Estándar de comunicación Ethernet (opcional)." },
      ],
    },
  ],
  destacadas: [
    "8 grupos semafóricos independientes configurables por software.",
    "CPU ARM Cortex-A7 con RTOS y microprocesadores redundantes.",
    "Monitor de conflictos independiente con recuperación automática.",
    "Comunicaciones RS-232, RS-485, Ethernet y 4G/LTE opcional.",
    "Hasta 99 planes almacenables (2 a 16 fases por ciclo).",
    "Gabinete IP 54 con montaje en poste o base de concreto.",
  ],
  normativa: "Manual Señalización Vial 2025 · NTC 4808 · Decreto 431/2017 · IEC 60529 · RETIE · IEEE 802.3",
};

export default producto;
