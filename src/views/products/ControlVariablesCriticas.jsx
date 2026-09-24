import card from "../../assets/products/10/card.png";
import main from "../../assets/products/10/main.png";
import instalacion from "../../assets/products/10/1.png";

const producto = {
  id: "control-de-variables-criticas",
  titulo: "Control de Variables Críticas ST-MVC-100",
  subtitulo: "Supervisión y reinicio remoto de controladores semafóricos",
  refManual: "ST-FT-MVC-001",
  descripcionCorta:
    "Sistema para supervisar hasta tres controladores M-TIX, monitorear variables eléctricas y térmicas y reiniciarlos remotamente desde la central.",
  descripcionLarga:
    "El ST-MVC-100 le permite saber desde el centro de gestión qué está pasando dentro de cada gabinete semafórico: si los controladores tienen energía, si sus fuentes internas trabajan en rango y si la temperatura es segura. Cuando un controlador se bloquea, se reinicia en forma remota, sin enviar una cuadrilla a la intersección. Un solo equipo supervisa hasta tres controladores M-TIX y se instala en el mismo rack del gabinete, ocupando una unidad (1U).",
  gif: card,
  imagen: main,
  galeria: [instalacion],
  caracteristicasTitulo: "Beneficios",
  caracteristicas: [
    "Visibilidad real del gabinete: la central deja de ver solo “responde / no responde” y pasa a ver el estado eléctrico y térmico de cada controlador.",
    "Menos visitas a campo: un controlador bloqueado se recupera desde la central en minutos.",
    "Mantenimiento predictivo: la caída gradual de una fuente o el aumento de temperatura se detectan antes de que el controlador falle.",
    "Control del consumo de energía: el registro de consumo por controlador permite verificar la carga de cada intersección.",
    "Diagnóstico local inmediato: el técnico en sitio consulta el estado del equipo en sus pantallas, sin herramientas adicionales.",
  ],
  fichaTecnica: [
    {
      titulo: "Descripción general",
      filas: [
        { label: "Empresa", value: "SOLUTRAFFIC S.A.S." },
        { label: "Producto", value: "Sistema de Variables Críticas" },
        { label: "Código de producto", value: "ST-MVC-100" },
        { label: "Función", value: "Supervisión y reinicio remoto de controladores semafóricos" },
        { label: "Capacidad", value: "Hasta 3 módulos M-TIX por equipo" },
      ],
    },
    {
      titulo: "Funciones",
      filas: [
        {
          label: "Monitoreo de energía",
          value: "Tensión, corriente, potencia, energía, frecuencia y factor de potencia de la acometida y de la línea de cada controlador.",
        },
        {
          label: "Monitoreo de tensiones internas",
          value: "Tensiones de alimentación de cada módulo M-TIX.",
        },
        {
          label: "Monitoreo térmico",
          value: "Temperatura interna de cada M-TIX; temperatura y humedad del gabinete.",
        },
        {
          label: "Reinicio remoto",
          value: "Corte y restablecimiento de la alimentación de los controladores por orden de la central.",
        },
        { label: "Alarma local", value: "Salida para sirena en el gabinete." },
        {
          label: "Visualización local",
          value: "Dos pantallas y un pulsador para consultar el estado y silenciar la alarma.",
        },
        {
          label: "Autodiagnóstico",
          value: "Supervisión de la alimentación del propio equipo.",
        },
      ],
    },
    {
      titulo: "Variables medidas",
      filas: [
        { label: "Tensión AC", value: "80 a 260 V AC · Precisión: ± 0,5 % · 4 puntos" },
        { label: "Corriente AC", value: "0 a 100 A · Precisión: ± 0,5 % · 4 puntos" },
        { label: "Potencia activa", value: "0 a 23 kW · Precisión: ± 0,5 % · 4 puntos" },
        { label: "Frecuencia", value: "45 a 65 Hz · Precisión: 0,1 Hz · 4 puntos" },
        { label: "Factor de potencia", value: "0,00 a 1,00 · Precisión: 0,01 · 4 puntos" },
        { label: "Energía acumulada", value: "0 a 9.999,99 kWh · Precisión: ± 0,5 % · 4 puntos" },
        { label: "Temperatura del controlador", value: "−55 a 125 °C · Precisión: ± 0,5 °C · 3 puntos" },
        { label: "Temperatura del gabinete", value: "−40 a 125 °C · Precisión: ± 0,2 °C · 1 punto" },
        { label: "Humedad del gabinete", value: "0 a 100 % HR · Precisión: ± 2 % HR · 1 punto" },
      ],
    },
    {
      titulo: "Variables medidas — nota",
      filas: [
        {
          label: "Puntos de energía",
          value: "Los 4 puntos de energía corresponden a la línea de cada controlador y a la acometida general. Las precisiones son valores típicos de los elementos de medición.",
        },
      ],
    },
    {
      titulo: "Especificaciones técnicas — generales",
      filas: [
        { label: "Módulos supervisados", value: "Hasta 3 módulos M-TIX por equipo." },
        { label: "Compatibilidad", value: "Controladores M-TIX con conector de supervisión." },
      ],
    },
    {
      titulo: "Especificaciones técnicas — alimentación",
      filas: [
        { label: "Tensión de entrada", value: "120 V AC, 60 Hz." },
        { label: "Consumo", value: "< 2,5 W." },
        {
          label: "Protecciones",
          value: "Fusible de entrada, supresión de sobretensiones y protección de entradas de señal.",
        },
      ],
    },
    {
      titulo: "Especificaciones técnicas — comunicación",
      filas: [
        { label: "Interfaz de red", value: "Ethernet 10/100 Mbps, conector RJ45." },
        { label: "Plataforma", value: "Tablero de estado Solutraffic." },
        { label: "Protocolo", value: "Por definir." },
        { label: "Intervalo de reporte", value: "Por definir." },
      ],
    },
    {
      titulo: "Especificaciones técnicas — salidas e interfaz local",
      filas: [
        {
          label: "Reinicio remoto",
          value: "1 salida de relé; reinicia los 3 controladores en simultáneo.",
        },
        { label: "Alarma", value: "Salida para sirena de 12 o 24 V DC." },
        { label: "Pantallas", value: "2 pantallas de 0,96”, 128 × 64 píxeles." },
        { label: "Pulsador", value: "Cambio de pantalla y silencio de alarma." },
        { label: "Indicadores", value: "LED de encendido y LED de estado." },
      ],
    },
    {
      titulo: "Especificaciones técnicas — mecánica y ambiente",
      filas: [
        { label: "Formato", value: "1U para rack de 19”." },
        { label: "Peso", value: "Por definir." },
        { label: "Temperatura de operación", value: "Por definir." },
        { label: "Humedad de operación", value: "Por definir." },
        { label: "Grado de protección", value: "Por definir." },
        { label: "Puesta a tierra", value: "Terminal de tierra de protección en el chasis." },
      ],
    },
    {
      titulo: "Esquema de instalación",
      filas: [
        {
          label: "Descripción",
          value: "La acometida del gabinete entra al ST-MVC-100 y de ahí alimenta a cada controlador. Cada controlador envía su información de diagnóstico al equipo, que la reporta al centro de gestión por la red Ethernet.",
        },
      ],
    },
    {
      titulo: "Contenido del producto",
      filas: [
        { label: "Equipo principal", value: "1 equipo ST-MVC-100 en chasis 1U." },
        { label: "Sensor", value: "1 sensor de temperatura y humedad para el gabinete, con cable." },
        { label: "Cables", value: "Cables de conexión a los controladores." },
        { label: "Documentación", value: "Manual de instalación y operación." },
      ],
    },
    {
      titulo: "Garantía y soporte",
      filas: [
        { label: "Garantía", value: "Por definir." },
        {
          label: "Soporte técnico",
          value: "Soporte técnico y puesta en marcha a cargo de Solutraffic S.A.S.",
        },
      ],
    },
  ],
  destacadas: [
    "Supervisión de hasta 3 controladores M-TIX desde la central.",
    "Reinicio remoto de controladores bloqueados sin cuadrilla en campo.",
    "Monitoreo eléctrico, térmico y de humedad del gabinete.",
    "Diagnóstico local mediante dos pantallas y un pulsador.",
    "Montaje en rack de 19 pulgadas, formato 1U.",
  ],
  normativa: "Por definir",
};

export default producto;
