import gifEjemplo from "../../assets/a.gif";
import serviciop from "../../assets/serviciop.png";
import carrusel1 from "../../assets/carrusel1.jpg";
import carrusel2 from "../../assets/carrusel2.jpg";
import carrusel3 from "../../assets/carrusel3.jpg";
import carrusel4 from "../../assets/carrusel4.jpg";

const producto = {
  id: "trailer-analitica-vial",
  titulo: "Tráiler de Analítica Vial — Plataforma móvil autónoma de captura y procesamiento de datos de tránsito",
  subtitulo: "Estudios de movilidad · Edge Computing · Despliegue rápido en cualquier entorno",
  refManual: "ST-MAN-TAV-001",
  descripcionCorta:
    "Plataforma móvil autónoma con IA para captura, procesamiento local y transmisión remota de datos de tránsito vehicular y peatonal.",
  descripcionLarga:
    "Plataforma móvil autónoma diseñada para la captura masiva, el procesamiento local (Edge Computing) y la transmisión remota de datos de tránsito vehicular y peatonal mediante inteligencia artificial, sin dependencia de infraestructura eléctrica o de comunicaciones permanente. Integra un chasis remolcable de un eje, gabinetes herméticos de aluminio diamantado, mástil telescópico de 9 m, sistema óptico de tres cámaras y enlace satelital, lo que permite el despliegue rápido de estudios de movilidad en entornos urbanos, rurales o remotos.",
  gif: gifEjemplo,
  imagen: serviciop,
  caracteristicas: [
    { img: carrusel1, texto: "Procesamiento local en tiempo real (Edge Computing) con NVIDIA Jetson para detección, conteo y clasificación vehicular multiclase." },
    { img: carrusel2, texto: "Sistema de energía híbrido con inversor UPS de 1 kVA y banco de baterías de ciclo profundo para operación autónoma sin red eléctrica." },
    { img: carrusel3, texto: "Enlace satelital Starlink integrado para transmisión de datos desde cualquier punto urbano, rural o remoto sin depender de redes celulares." },
    { img: carrusel4, texto: "Mástil telescópico de 9 m con sistema óptico de tres cámaras IP (PTZ + bala) para cobertura panorámica sin puntos ciegos." },
  ],
  fichaTecnica: [
    {
      titulo: "Descripción General",
      filas: [
        { label: "Equipo", value: "Tráiler de Analítica Vial" },
        { label: "Referencia", value: "A-360" },
        { label: "Fabricante", value: "Solutraffic S.A.S." },
        { label: "Origen", value: "Cali, Colombia" },
        { label: "Documento", value: "ST-MAN-TAV-001 v1.0 — Junio 2026" },
        { label: "Categoría", value: "Plataforma móvil autónoma" },
      ],
    },
    {
      titulo: "Sistema de Energía",
      filas: [
        { label: "Inversor central", value: "Inversor híbrido Powest de 1 kVA con módulo de conmutación UPS automática." },
        { label: "Voltaje de entrada", value: "12 VDC nominal (banco de baterías de ciclo profundo en gabinete aislado)." },
        { label: "Alimentación de red", value: "120 VAC / 60 Hz mediante conector industrial hermético externo (VCP)." },
        { label: "Conmutación UPS", value: "Transferencia automática a batería en < 10 ms ante corte o fluctuación de red." },
        { label: "Modo autónomo", value: "Operación por banco de baterías con descarga profunda en puntos sin red eléctrica." },
        { label: "Umbral operativo", value: "Voltaje mínimo seguro en modo batería: > 11.8 VDC." },
      ],
    },
    {
      titulo: "Procesamiento y Analítica (IA)",
      filas: [
        { label: "Unidad de cómputo", value: "Sistema embebido industrial NVIDIA Jetson con soporte para Deep Learning." },
        { label: "Modo de operación", value: "Procesamiento local en tiempo real (Edge Computing) de múltiples flujos de video HD." },
        { label: "Capacidades de IA", value: "Detección, conteo y clasificación vehicular multiclase: motos, vehículos particulares, buses, camiones y peatones." },
        { label: "Datos generados", value: "Matrices origen-destino y metadatos estructurados, almacenados localmente de forma segura." },
      ],
    },
    {
      titulo: "Sistema de Captura Óptica",
      filas: [
        { label: "Configuración", value: "Tres (3) cámaras IP industriales de alta definición y sensibilidad dinámica." },
        { label: "Tipo", value: "Una (1) cámara domo PTZ + dos (2) cámaras fijas tipo bala." },
        { label: "Cobertura", value: "Panorámica entrelazada para eliminar puntos ciegos en calzadas de múltiples carriles." },
        { label: "Cableado", value: "Apantallado y protegido en conducto desde el cabezal del mástil hasta el gabinete de procesamiento." },
      ],
    },
    {
      titulo: "Sistema de Comunicaciones",
      filas: [
        { label: "Enlace de datos", value: "Terminal satelital Starlink de alta velocidad y baja latencia, integrado al equipo." },
        { label: "Independencia", value: "No depende de redes celulares; transmite desde cualquier punto urbano, rural o remoto." },
        { label: "Funciones", value: "Reportes estadísticos en tiempo real, alertas del sistema, telemetría de energía y acceso SSH/VPN seguro." },
      ],
    },
    {
      titulo: "Estructura, Mástil y Estabilización",
      filas: [
        { label: "Chasis", value: "Bastidor tubular metálico electrosoldado con tratamiento anticorrosivo." },
        { label: "Gabinetes", value: "Aluminio tipo diamantado, herméticos, con compuertas batientes y cerraduras de seguridad." },
        { label: "Mástil telescópico", value: "Mecánico de cuatro (4) cuerpos extensibles, accionado por malacate manual de engranajes de seguridad." },
        { label: "Altura de despliegue", value: "Hasta 9 metros desde la base del chasis hasta el cabezal óptico." },
        { label: "Abatimiento", value: "Base pivotante para paso de transporte (horizontal) a operación (vertical), fijada con perno pasador." },
        { label: "Estabilización", value: "Cuatro (4) gatos mecánicos niveladores de servicio pesado con base pivotante texturizada." },
        { label: "Configuración de transporte", value: "Remolque de un solo eje, enganche para bola estándar, rueda jockey, cadena de seguridad y luces reglamentarias." },
        { label: "Señalización", value: "Cintas retrorreflectivas de alta intensidad y baliza estroboscópica para visibilidad diurna y nocturna." },
      ],
    },
    {
      titulo: "Condiciones Operativas y Límites de Seguridad",
      filas: [
        { label: "Distancia a líneas energizadas", value: "Mínimo 10 m a redes aéreas de media o alta tensión durante elevación y operación." },
        { label: "Viento máximo", value: "No operar con mástil desplegado bajo vientos sostenidos > 50 km/h o vendavales." },
        { label: "Tormenta eléctrica", value: "Prohibido mantener el mástil desplegado durante tormentas eléctricas activas." },
        { label: "Pendiente del terreno", value: "Evitar instalación en pendientes > 5 % sin compensación de los gatos estabilizadores." },
        { label: "Puesta a tierra", value: "Conexión equipotencial a tierra obligatoria en instalaciones prolongadas con red de 120 VAC." },
        { label: "Disponibilidad objetivo", value: "Operatividad continua del 99.8 % bajo el plan de mantenimiento preventivo." },
      ],
    },
  ],
  destacadas: [
    "Procesamiento Edge Computing con NVIDIA Jetson para IA en tiempo real.",
    "Sistema de energía híbrido con UPS y banco de baterías para operación autónoma.",
    "Enlace satelital Starlink integrado, sin dependencia de redes celulares.",
    "Mástil telescópico de 9 m con tres cámaras IP para cobertura sin puntos ciegos.",
    "Despliegue rápido en entornos urbanos, rurales o remotos.",
    "Clasificación vehicular multiclase y matrices origen-destino.",
  ],
  normativa: "RETIE · Estándares de seguridad para operación con mástil y líneas energizadas · 99.8% disponibilidad objetivo",
};

export default producto;
