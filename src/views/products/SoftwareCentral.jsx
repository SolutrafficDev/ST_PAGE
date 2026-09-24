import main from "../../assets/products/11/main.png";
import inventario from "../../assets/products/11/1.png";
import planSemaforico from "../../assets/products/11/2.png";

const producto = {
  id: "software-central-st",
  titulo: "Software Central ST — Plataforma de Gestión y Control Semafórico Inteligente",
  subtitulo: "ESTÁNDAR NTCIP · Supervisión, telegestión y control integral",
  refManual: "ST-FT-CENTRAL-001",
  descripcionCorta:
    "Plataforma centralizada para supervisar, telegestionar y controlar intersecciones semafóricas en tiempo real mediante NTCIP, MQTT y WebSockets.",
  descripcionLarga:
    "Central ST es una solución de ingeniería avanzada orientada a la supervisión, telegestión y control integral de intersecciones semafóricas. Diseñada para garantizar una operación moderna, fluida y en tiempo real, permite coordinar la movilidad urbana combinando interoperabilidad bajo protocolo NTCIP, analítica técnica y videovigilancia.",
  gif: main,
  imagen: main,
  galeria: [inventario, planSemaforico],
  caracteristicasTitulo: "Funcionalidades principales",
  caracteristicas: [
    "Monitoreo en tiempo real del estado operativo de la red semafórica y de la salud de cada controlador M-TIX.",
    "Configuración y telegestión remota de parámetros, planes de señales, horarios y comandos de operación.",
    "Gestión centralizada de alarmas y eventos con notificación de fallos, cortes de energía e intervenciones.",
    "Integración y visualización de cámaras para supervisar el impacto de los cambios operativos en cada intersección.",
    "Gestión de tickets de mantenimiento mediante tablero Kanban, evidencias e historial de intervenciones.",
    "Gestión de inventarios y activos con registro de elementos instalados, vida útil y hojas de vida.",
    "Reportes y analítica exportable de fallas, disponibilidad, tiempos de respuesta y actividades en CSV.",
    "Seguridad y gestión de usuarios con roles, autenticación cifrada y registros de auditoría.",
  ],
  fichaTecnica: [
    {
      titulo: "Descripción general",
      filas: [
        { label: "Producto", value: "Software Central ST" },
        { label: "Categoría", value: "Plataforma de gestión y control semafórico inteligente" },
        { label: "Estándar", value: "NTCIP — National Transportation Communications for ITS Protocol" },
        { label: "Propósito", value: "Supervisión, telegestión y control integral de intersecciones semafóricas." },
        { label: "Operación", value: "Interoperable, abierta y en tiempo real." },
      ],
    },
    {
      titulo: "Integración nativa con protocolo NTCIP",
      filas: [
        {
          label: "Protocolo NTCIP",
          value: "Soporte nativo del estándar internacional NTCIP (National Transportation Communications for ITS Protocol).",
        },
        {
          label: "Interoperabilidad",
          value: "Comunicación robusta, abierta e interoperable con controladores semafóricos multi-marca e infraestructura inteligente de transporte.",
        },
      ],
    },
    {
      titulo: "Funcionalidades principales — Parte I",
      filas: [
        {
          label: "1. Monitoreo en tiempo real",
          value: "Permite visualizar el estado operativo continuo de la red semafórica: estado general y salud operativa de cada controlador M-TIX, color activo por grupo semafórico y actualización en tiempo real vía WebSockets sin recargar pantalla.",
        },
        {
          label: "2. Configuración y telegestión remota",
          value: "Gestión total a distancia sin necesidad de desplazamiento técnico: acceso web directo a aplicaciones embebidas mediante proxy inverso HTTP, ejecución de comandos inmediatos vía MQTT y modificación remota de parámetros, planes de señales y horarios.",
        },
        {
          label: "3. Gestor de alarmas y eventos",
          value: "Detección y notificación centralizada de contingencias: alertas instantáneas de fallos operativos y cortes de energía, registro de intervenciones técnicas y restablecimientos, y clasificación de eventos críticos para priorizar la atención en campo.",
        },
        {
          label: "4. Integración y visualización de cámaras",
          value: "Supervisión visual directa acoplada al control de tráfico: integración de flujos de video streaming en vivo por intersección, asociación directa entre cámaras y esquemas de cruces semafóricos, y validación visual inmediata del impacto de cambios operativos.",
        },
      ],
    },
    {
      titulo: "Funcionalidades principales — Parte II",
      filas: [
        {
          label: "5. Gestión de tickets (Kanban)",
          value: "Módulo integral para el control de mantenimiento de la red: tablero Kanban con estados Pendiente, En Proceso y Resuelto; adjunto de evidencias como fotografías, reportes de campo y logs; y trazabilidad completa del historial de soporte e intervenciones.",
        },
        {
          label: "6. Gestión de inventarios y activos",
          value: "Administración estructurada de la infraestructura física: registro detallado de elementos instalados en cada intersección, adaptabilidad a las metodologías de codificación del cliente, control de vida útil y hoja de vida de equipos desplegados.",
        },
        {
          label: "7. Reportes y analítica exportable",
          value: "Generación de información estratégica para toma de decisiones: históricos de fallas, disponibilidad operativa y tiempos de respuesta; exportación de datos en formato CSV para integración con BI; inventarios consolidados y reportes de actividades por periodo.",
        },
        {
          label: "8. Seguridad y gestión de usuarios",
          value: "Control de acceso riguroso y administración de permisos: usuarios, contraseñas y perfiles de acceso; definición de roles según el nivel operativo (Operador, Técnico, Admin); y registro de auditoría sobre acciones y cambios de parámetros.",
        },
      ],
    },
    {
      titulo: "Especificación técnica",
      filas: [
        { label: "Protocolos soportados", value: "NTCIP (semáforos / ITS), MQTT (telemetría) y WebSockets (real-time HTTP proxy)." },
        { label: "Hardware compatible", value: "Controladores semafóricos M-TIX y dispositivos ITS compatibles con NTCIP." },
        { label: "Streaming de video", value: "Módulos de gestión e integración de cámaras IP con visualización concurrente en la consola web." },
        { label: "Módulos de gestión", value: "Monitoreo, telegestión, alarmas, Kanban de mantenimiento, inventario y reportes CSV." },
        { label: "Seguridad", value: "Control de acceso basado en roles (RBAC), autenticación cifrada y logs de auditoría." },
      ],
    },
    {
      titulo: "Ficha de producto",
      filas: [
        { label: "Nombre comercial", value: "Central ST" },
        { label: "Tipo de solución", value: "Software de gestión y control de tráfico inteligente" },
        { label: "Interoperabilidad", value: "NTCIP, MQTT y WebSockets" },
        { label: "Estado", value: "Plataforma centralizada para supervisión, análisis y operación de la red semafórica." },
      ],
    },
  ],
  destacadas: [
    "Interoperabilidad nativa con NTCIP y controladores multi-marca.",
    "Monitoreo y actualización en tiempo real mediante WebSockets.",
    "Telegestión remota con MQTT y proxy inverso HTTP.",
    "Integración de cámaras y video streaming por intersección.",
    "Kanban, inventario, reportes CSV y auditoría de acciones.",
    "Roles Operador, Técnico y Admin con autenticación cifrada.",
  ],
  normativa: "NTCIP · National Transportation Communications for ITS Protocol",
};

export default producto;
