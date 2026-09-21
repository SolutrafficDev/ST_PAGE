import gifEjemplo from "../../assets/products/7/1.gif";
import serviciop from "../../assets/products/7/main.jpeg";
import carrusel1 from "../../assets/products/7/1.png";
import carrusel2 from "../../assets/products/7/2.png";
import carrusel3 from "../../assets/products/7/3.png";
import carrusel4 from "../../assets/products/7/4.png";

const producto = {
  id: "sim-sistema-integral-monitoreo",
  titulo: "SIM — Sistema Integral de Monitoreo · Plataforma de programación y gestión de controladores de tráfico",
  subtitulo: "Gestión y monitoreo de tráfico · Programación de planes · ITS",
  refManual: "ST-FT-SIM-001",
  descripcionCorta:
    "Aplicación de escritorio para programación, supervisión y gestión de controladores de tráfico con monitoreo en tiempo real.",
  descripcionLarga:
    "Aplicación de escritorio desarrollada por Solutraffic para optimizar la programación, supervisión y gestión de los controladores de tráfico. Mediante una interfaz intuitiva permite conectarse directamente al controlador, monitorear su estado en tiempo real y crear, editar y cargar planes de tráfico, tanto en operación local como coordinada. Está orientada a operadores de campo y de sala de control, facilitando un manejo preciso de los dispositivos conectados sin depender de infraestructura permanente.",
  gif: gifEjemplo,
  imagen: serviciop,
  galeria: [carrusel1, carrusel2, carrusel3, carrusel4],
  caracteristicas: [
    "Monitoreo en tiempo real del estado del controlador: fecha/hora, conexión a central, estado del cruce y plan activo.",
    "Creación y edición de planes semafóricos con tiempos de verde/amarillo/rojo y línea de tiempo del ciclo.",
    "Configuración de verdes amigos, grupos vehiculares y peatonales, y horarios por franja y día de la semana.",
    "Conexión inalámbrica WiFi al controlador con validación de configuración antes de cargar y programación remota.",
  ],
  fichaTecnica: [
    {
      titulo: "Descripción General",
      filas: [
        { label: "Producto", value: "SIM — Sistema Integral de Monitoreo" },
        { label: "Tipo", value: "Software" },
        { label: "Desarrollado por", value: "Solutraffic Ingeniería S.A.S." },
        { label: "Origen", value: "Cali, Colombia" },
        { label: "Documento", value: "ST-FT-SIM-001 v1.0 — Junio 2026" },
        { label: "Categoría", value: "Gestión y monitoreo de tráfico · ITS" },
      ],
    },
    {
      titulo: "Funciones Principales",
      filas: [
        { label: "Monitoreo en tiempo real", value: "Visualización del estado del controlador: fecha/hora de la tarjeta, conexión a central, estado del cruce y horario del plan activo." },
        { label: "Programación de planes", value: "Creación y edición de planes semafóricos, tiempos de verde/amarillo/rojo y línea de tiempo del ciclo." },
        { label: "Gestión de grupos", value: "Definición de grupos vehiculares y peatonales, con color de destello y modo protección." },
        { label: "Verdes amigos", value: "Configuración de verdes compatibles para evitar que el sistema de seguridad los detecte como conflictivos." },
        { label: "Horarios (scheduler)", value: "Asignación de planes por franja horaria y días de la semana." },
        { label: "Validación", value: "Verificación de la configuración antes de cargarla, con alertas de error." },
        { label: "Carga al controlador", value: "Programación remota del controlador y reinicio para aplicar los cambios." },
      ],
    },
    {
      titulo: "Métodos de Programación",
      filas: [
        { label: "Controlador", value: "Conexión directa al controlador para visualizar y modificar su configuración en tiempo real." },
        { label: "Archivo", value: "Carga de una programación previamente guardada en formato .json para su revisión y edición." },
        { label: "Desde cero", value: "Asistente guiado de cuatro pasos: parámetros del equipo, parámetros del cruce, grupos y estructuras." },
      ],
    },
    {
      titulo: "Modos de Operación del Controlador",
      filas: [
        { label: "Autosincronismo", value: "Coordinación de olas verdes entre varios controladores sincronizados para optimizar el flujo vehicular." },
        { label: "Modo Normal", value: "Operación independiente del controlador, sin coordinación." },
        { label: "Modo Actuado", value: "Ajuste de tiempos en función del tráfico detectado por sensores físicos o virtuales en tiempo real." },
        { label: "Tipo de conexión", value: "Todo rojo (verificación en rojo) o Plan de conexión (verificación en intermitencia)." },
        { label: "Frecuencia de destello", value: "Configurable según los requisitos del controlador." },
      ],
    },
    {
      titulo: "Conectividad y Requisitos",
      filas: [
        { label: "Tipo de conexión", value: "Red inalámbrica (WiFi); el controlador se conecta automáticamente a la red configurada." },
        { label: "Red WiFi", value: "SSID: ST= · Contraseña: S0lu_123 (creada desde un PC o dispositivo móvil)." },
        { label: "Identificación de IP", value: "Mediante software de escaneo de red (recomendado: Advanced IP Scanner)." },
        { label: "Acceso a la aplicación", value: "Credenciales por defecto: usuario admin / contraseña xxxx." },
        { label: "IP de central", value: "Opcional; solo se define cuando el controlador se integra a una central de tráfico (UTCS)." },
        { label: "Formato de archivo", value: "Programaciones almacenadas en archivos .json." },
        { label: "Plataforma", value: "Aplicación de escritorio para PC con sistema operativo Windows." },
      ],
    },
    {
      titulo: "Estructura de la Aplicación",
      filas: [
        { label: "Monitoreo", value: "Estado del controlador y línea de tiempo del plan en vivo; opciones de destello, encender, apagar y reiniciar." },
        { label: "Explorador / Componentes", value: "Visualización y edición de grupos, parámetros del cruce y estructuras." },
        { label: "Planes", value: "Edición de tiempos, ciclo, retención y horarios de funcionamiento." },
        { label: "Reportes", value: "Consulta de información y eventos de operación del controlador." },
        { label: "Plano", value: "Asociación de una imagen del plano de la intersección." },
        { label: "Soporte", value: "Acceso a la información de soporte técnico." },
      ],
    },
  ],
  destacadas: [
    "Monitoreo en tiempo real del estado del controlador.",
    "Creación y edición de planes semafóricos con validación.",
    "Configuración de verdes amigos y horarios por franja.",
    "Tres métodos de programación: directo, archivo o desde cero.",
    "Soporta autosincronismo para olas verdes coordinadas.",
    "Conexión WiFi y programación remota del controlador.",
  ],
  normativa: "N/A (aplicación de software)",
};

export default producto;
