import serviciop from "../assets/serviciop.png";
import imgSigma from "../assets/services/1/title.png";
import imgSigmaIntro from "../assets/services/1/intro.png";
import imgSigmaCard from "../assets/services/1/card.png";
import imgInfraCard from "../assets/services/2/card.png";
import imgPlaneacionCard from "../assets/services/3/card.png";
import imgCompCard from "../assets/services/4/card.png";
import imgAplicCard from "../assets/services/5/card.png";
import imgMttoCard from "../assets/services/6/card.png";
import imgSmartCard from "../assets/services/7/card.png";
import imgSoftCard from "../assets/services/8/card.png";
import carrusel1 from "../assets/carrusel1.jpg";
import carrusel2 from "../assets/carrusel2.jpg";
import carrusel3 from "../assets/carrusel3.jpg";
import carrusel4 from "../assets/carrusel4.jpg";
import {
  FaMicrochip, FaBullseye, FaGlobeAmericas, FaFileAlt, FaClock,
  FaHardHat, FaBook, FaShieldAlt, FaWrench, FaCertificate,
  FaLeaf, FaChartLine, FaRulerCombined, FaUsers,
  FaParking, FaCode, FaChartBar, FaHeadset,
  FaClipboardCheck, FaRoad, FaExclamationTriangle,
  FaBus, FaLaptopCode, FaPaintRoller, FaSign,
  FaTrafficLight, FaUserShield, FaMobileAlt, FaCity,
  FaBolt, FaWifi, FaCamera,
} from "react-icons/fa";

const servicios = [
  {
    id: "division-sigma",
    titulo: "División Sigma",
    descripcionCorta: "Central de gestión de tráfico y monitoreo de dispositivos en tiempo real.",
    descripcionLarga:
      "La central es una suite de software de gestión prevista para ser ubicada en el centro de operaciones de una ciudad o departamento, o ser implementada de manera portátil a través de la web, permitiendo monitorear cientos de dispositivos de control de tráfico desde una ubicación central.",
    descripcionAdicional:
      "Múltiples módulos para visualización de mapas, vistas tabulares, estadísticas, vistas interactivas de las cámaras, así como la muestra de datos de tráfico y los módulos de tiempo.",
    productosCentrales: [
      { label: "Equipos de semaforización", texto: "Sistema de monitoreo." },
    ],
    sistemaMonitoreo:
      "La gestión de tráfico urbano se convierte en un gran desafío para las secretarías de movilidad de los municipios. Un uso más eficiente de la capacidad de las vías, flujos de tráfico armonizados, prelación a los medios de transporte público y el enfoque en la seguridad de los peatones, su calidad de vida y productividad de la urbe, son las prioridades sobre las que se basan las implementaciones de gestión de tráfico de Solutraffic.",
    gif: imgSigmaCard,
    imagen: imgSigma,
    imagenLateral: imgSigmaIntro,
    caracteristicas: [
      { texto: "Compatible con toda la línea de productos de semáforos, señalética y controladores de Solutraffic y otros proveedores." },
      { texto: "El diseño modular permite fáciles y rápidas actualizaciones de estado en tiempo real." },
      { texto: "Supervisa las condiciones y dispositivos de tráfico de todo el sistema." },
      { texto: "Operación de corredores viales (paros y alargamientos de ciclos, cambio de planes y tiempos)." },
      { texto: "Detección inmediata de fallas en la red (semáforos, cámaras, señalética)." },
      { texto: "Módulo de priorización que permite el paso del transporte público y otros vehículos como ambulancias y bomberos." },
      { texto: "Características de informes personalizados y exportación a través de las herramientas de Microsoft Office™." },
      { texto: "Completo sistema de ayuda y documentación de usuario disponible." },
    ],
  },
  {
    id: "division-infraestructura-vial",
    titulo: "División de Infraestructura Vial",
    descripcionCorta: "Señalización horizontal y vertical, postes y estructuras para semáforos y señales.",
    descripcionLarga:
      "La División de Infraestructura Vial produce e instala todos los elementos que componen la señalización y el equipamiento de las vías. Cubre la señalización horizontal y vertical, así como la fabricación de postes y estructuras para el montaje de semáforos, señales, cámaras y radares, cumpliendo con las especificaciones técnicas de los organismos reguladores.",
    gif: imgInfraCard,
    imagen: serviciop,
    subservicios: [
      {
        titulo: "Señalización Horizontal",
        img: carrusel1,
        texto:
          "Corresponde a la aplicación de marcas viales, conformadas por líneas, flechas, símbolos y letras que se pintan sobre el pavimento, bordillos o sardineles y estructuras de las vías de circulación, así como los objetos que se colocan sobre la superficie de la vía, con el fin de regular, canalizar el tránsito o indicar la presencia de obstáculos.",
      },
      {
        titulo: "Señalización Vertical",
        img: carrusel2,
        texto:
          "Solutraffic produce Señales Verticales preventivas, reglamentarias e informativas de tipo reflectivo y electrónico, que cumplen con las especificaciones técnicas de los organismos reguladores Municipales, Departamentales y Nacionales.",
      },
      {
        titulo: "Postes y Estructuras para Semáforos y Señales",
        img: carrusel3,
        texto:
          "Solutraffic fabrica e instala todo tipo de estructuras metalmecánicas para el montaje de semáforos colgantes y anclados, señalización, cámaras de fotodetección, radares, entre otros.",
      },
    ],
  },
  {
    id: "division-planeacion-movilidad",
    titulo: "División de Planeación en Movilidad",
    descripcionCorta: "Estudios de movilidad, ingeniería de tránsito y planes de manejo de tráfico.",
    descripcionLarga:
      "Solutraffic cuenta con equipos, software especializado, ingenieros y expertos en movilidad que ponen a su disposición experiencia y dedicación para el diseño y desarrollo de estudios de movilidad.",
    gif: imgPlaneacionCard,
    imagen: serviciop,
    serviciosRelacionados: [
      { img: carrusel1, texto: "Implementación de par vial para mejora de la movilidad, planes de manejo de tráfico y optimización de rutas de transporte público." },
      { img: carrusel2, texto: "Proyectos de comunicaciones y sincronismo." },
      { img: carrusel3, texto: "Proyectos de CCTV." },
      { img: carrusel4, texto: "Estudios de programaciones." },
      { img: carrusel1, texto: "Estudios de Justificación de semáforos." },
      { img: carrusel2, texto: "Estudios sintonía fina de semáforos." },
      { img: carrusel3, texto: "Mediciones continuas y periódicas de flujo vehicular y peatonal." },
      { img: carrusel4, texto: "Mediciones de parámetros de tráfico." },
    ],
    bloques: [
      {
        titulo: "Ingeniería de Tránsito",
        descripcion:
          "La Ingeniería de Tránsito consiste en estructurar planes adecuados, prácticos y bien meditados para mejorar la seguridad y la movilidad de los flujos vehiculares, sobre todo en áreas críticas, donde la interacción con otras disciplinas es fundamental. Brindamos un completo compendio de estudios en cada una de las fases de su proyecto (pre factibilidad, factibilidad, implementación y operación):",
        items: [
          "Volúmenes de tránsito en tramos viales.",
          "Volúmenes de tránsito en intersecciones.",
          "Estudio de Peatones (cuantificación de volúmenes, velocidad de caminata, conflictos con vehículos, seguridad y continuidad de elementos).",
          "Estudio de Bicicarriles.",
          "Estudios de Velocidad.",
          "Tiempos de recorrido.",
          "Ocupación vehicular.",
          "Tiempo de detención en intersecciones.",
        ],
        img: carrusel1,
      },
      {
        titulo: "Seguridad Vial",
        subtitulo: "Auditoría Vial",
        descripcion:
          "Es un reconocimiento en detalle del desempeño en cuanto a la seguridad vial de un proyecto, tramo o sección vial en cualquier etapa de su ciclo vital (pre-construcción, construcción o post-construcción).",
        items: [
          "La ASV y/o Auditorías Viales (rural) debe ser realizada por un equipo auditor con experiencia.",
          "El objetivo de una Auditoría Vial es determinar y reportar condiciones potenciales de riesgo a la seguridad vial en un proyecto para todos los tipos de usuario.",
          "También identificar y recomendar las oportunidades de implementar acciones para mejorar la seguridad vial.",
        ],
        img: carrusel2,
      },
      {
        titulo: "Transporte y Movilidad",
        descripcion:
          "Planes Estratégicos de Seguridad Vial: Brindamos el respaldo profesional en cada uno de los Pilares, desarrollamos de manera completa los planes de acción definidos y damos garantía de cumplimiento a nuestros procesos.",
        items: [
          "Proyectos de Seguridad Vial: son un instrumento de intervención urbana y rural que deben ser ejecutados como proyectos sociales, de desarrollo, ambientales y de productividad a fin de garantizar la movilidad de todos los usuarios y el acceso a las facilidades que se ofrecen.",
          "Los proyectos ejecutados por nuestra empresa dan garantía de cumplir con el objetivo de generar un impacto positivo en las condiciones de vida de los habitantes, las condiciones de movilidad y condiciones ambientales.",
        ],
        img: carrusel3,
      },
    ],
  },
  {
    id: "division-comportamiento-humano",
    titulo: "División Comportamiento Humano en Movilidad",
    descripcionCorta: "Educación, campañas y programas de seguridad vial.",
    descripcionLarga:
      "Solutraffic ofrece a sus clientes talleres y seminarios cerrados, específicamente diseñados de acuerdo a sus necesidades. Los contenidos de estos pueden ser orientados a todo tipo de personal.",
    gif: imgCompCard,
    imagen: serviciop,
    capacitaciones: {
      titulo: "Capacitaciones",
      descripcion:
        "Solutraffic ofrece a sus clientes talleres y seminarios cerrados, específicamente diseñados de acuerdo a sus necesidades. Los contenidos de estos pueden ser orientados a todo tipo de personal.",
    },
    campanas: {
      titulo: "Campañas de Educación Vial y/o Seguridad Vial",
      parrafos: [
        "Las campañas de educación vial permiten acceder a cada usuario de la vía mediante elementos de comunicación y de publicidad dirigida a prevenir accidentes de tránsito y a promocionar la cultura vial para la vida, estas campañas son diseñadas para que tengan una recordación e impacto duradero al estar enfocadas en las historias cotidianas, sensibilizando a la sociedad acerca de los peligros reales a los que se enfrentan y los modos de prevenirlo, mediante la programación de actividades y la definición de su frecuencia. Nuestras campañas cuentan siempre con el reconocimiento de las características del entorno (localización, usuarios, problemática, objetivos y alcance).",
        "Entidades de seguridad vial a nivel mundial coinciden en que son uno de los instrumentos con que cuentan los planificadores para intervenir la accidentalidad vial en la comunidad y en la sociedad, destacando que las campañas de Educación vial y/o Seguridad Vial deben contar siempre con el direccionamiento de profesionales expertos e idóneos.",
      ],
    },
    bloquesTitulo: "Programas de Formación",
    bloques: [
      {
        titulo: "Programa de Fortalecimiento de la Seguridad Vial en el sector educativo",
        descripcion:
          "Esta iniciativa se enmarca en el Programa de Fortalecimiento de la Educación Vial, que propone el Gobierno Nacional en cabeza del Ministerio de Educación y el Ministerio del Transporte, con el objetivo de incluir la enseñanza de la educación vial en todas las instituciones educativas del país.",
        img: carrusel1,
      },
      {
        titulo: "Programa de Seguridad Vial en Empresas",
        items: [
          "La Seguridad Vial forma parte integral de la Seguridad Laboral para cualquier empresa.",
          "Las empresas deben tener un especial cuidado porque no solo deben responder por sus empleados, sino también por la integridad de cualquier persona que resultara involucrada en accidentes en que participe un vehículo de la compañía.",
        ],
        img: carrusel2,
      },
      {
        titulo: "Programas de Formación de Tránsito y Transporte",
        descripcion:
          "Los Programas de formación realizados por Solutraffic Ingeniería S.A.S, proponen a nuestros participantes complementar y actualizar sus conocimientos, a través de la investigación y el desarrollo tecnológico con el que cuenta nuestra empresa.",
        items: [
          "Buscamos que nuestros estudiantes (Operarios, auxiliares, técnicos, profesionales) se destaquen por ser capaces de diagnosticar y proponer soluciones eficientes a la movilidad (personas y bienes), que garanticen accesibilidad, manejo responsable del medio ambiente, calidad de vida y decisiones por medio de un pensamiento crítico sustentado.",
          "Nuestro plan de formación permite la realización de los programas en nuestras instalaciones y/o fuera de ellas, lo que nos posiciona como una entidad sobresaliente y líder en educación vial.",
        ],
        img: carrusel3,
      },
    ],
  },
  {
    id: "aplicativos-especiales",
    titulo: "Aplicativos Especiales",
    descripcionCorta: "Desarrollo de aplicaciones y soluciones tecnológicas a la medida.",
    descripcionLarga:
      "En Aplicativos Especiales desarrollamos soluciones tecnológicas a la medida para la gestión de la movilidad: aplicaciones móviles, plataformas web, sistemas de pago y reserva, y herramientas de analítica de datos que integran toda la operación en una sola plataforma.",
    gif: imgAplicCard,
    imagen: serviciop,
    seccionesAplic: [
      {
        titulo: "Alimentación con Energía Solar",
        img: carrusel1,
        parrafos: [
          "Suministramos una fuente de energía eléctrica confiable y amigable con el medio ambiente, basada en la energía solar, generando un impacto positivo al medio ambiente y un ahorro económico significativo a mediano y largo plazo. Nuestro sistema está diseñado para aportar energía a elementos de control de movilidad y señalización de manera independiente o a un sistema completo. Nuestros diseños responden a conceptos arquitectónicos y urbanísticos, permitiéndoles incorporarse en el amoblamiento y embellecimiento de la ciudad.",
        ],
      },
      {
        titulo: "Video Detección",
        img: carrusel2,
        parrafos: [
          "Solución basada en video analítica en domo PTZ que permiten entre otras lecturas de placas en tiempo real, conteo de vehículos, identificación de infractores, control de velocidad, lo cual permite a la administración incrementar su nivel de gestión, gracias a la plataforma de reportes en tiempo real.",
        ],
      },
      {
        titulo: "Panel Flecha para Desviación",
        img: carrusel3,
        parrafos: [
          "El panel flecha para desviación de Solutraffic son dispositivos temporales empleados en el control del tráfico, alerta de cierre de carriles y/o guianza de tráfico en zonas de obra. Con fácil y rápido manejo de forma manual e inalámbrica, con posibilidad de administración del dispositivo desde la red de una manera remota. Con múltiples opciones de montaje.",
        ],
      },
      {
        titulo: "Gestión de Inventarios",
        img: carrusel4,
        parrafos: [
          "Procesa información del inventario municipal de semaforización, a través de un mapa interactivo de la ciudad, que permite el registro de todos los eventos relacionados con cada ítem, facilitando un mayor control de la gestión. Nuestro sistema permite una gestión proactiva que resulta en grandes ahorros y una disminución en los beneficios perdidos de sus activos, ya que está cien por ciento basado en web y utiliza tecnologías de última generación, facilitando su uso, incluso en dispositivos móviles.",
        ],
      },
      {
        titulo: "Gestión PQR",
        img: serviciop,
        parrafos: [
          "El sistema de gestión de Peticiones, Quejas y Reclamos (PQR) permite llevar registro, hacer seguimiento y contar con la trazabilidad de todas las solicitudes que la Secretaría de Movilidad reciba. Estas se pueden tipificar de acuerdo a las necesidades de la entidad. El sistema es totalmente flexible en cuanto al proceso y la forma de ingresar la información. Además permite el manejo de alarmas, detección de cuellos de botella, manejo de archivos adjuntos y de indicadores de gestión requeridos para emprender procesos de certificación de calidad o mejoramiento continuo, permitiendo hacer gestión proactiva, incrementando la eficiencia y disminuyendo los tiempos de respuesta.",
        ],
      },
      {
        titulo: "Sistema de Inventario de Semaforización y Mobiliario Urbano",
        img: imgAplicCard,
        parrafos: [
          "El sistema de gestión de inventarios de semaforización y mobiliario urbano permite de manera interactiva en el mapa de la ciudad, recolectar información de todos los equipos, registrar todos los eventos relacionados, hacer consultas y realizar un adecuado control. Dentro de la información recolectada están las coordenadas geográficas, fotografías, ficha técnica, fechas de vencimiento de garantías, soporte, contratos y fechas de mantenimiento. El sistema emplea correo electrónico para hacer notificaciones y lanzar alertas. Adicionalmente permite la generación de tickets de soporte para reporte de daños, mantenimientos o eventos en general y es adaptable a las necesidades puntuales. El sistema promueve una gestión proactiva basada en información estructurada, lo que redunda en mayor eficiencia, menores tiempos de respuesta, ahorros y disminución del lucro cesante de sus activos.",
        ],
      },
    ],
  },
  {
    id: "mantenimiento-semaforos",
    titulo: "Mantenimiento de Semáforos y Controladores",
    descripcionCorta: "Programas preventivos y correctivos para sistemas semafóricos.",
    descripcionLarga:
      "Solutraffic ofrece el servicio de mantenimiento 24 horas al día, los 365 días del año a todos los componentes del sistema. Nuestro servicio atiende todo tipo de daños y dificultades técnicas en controladores, unidades de comunicación, infraestructura, acometidas, entre otros, tanto a nuestros propios equipos como de terceros.",
    descripcionAdicional:
      "Contamos con un software único para inventario y control del amoblamiento de las intersecciones que existen en la ciudad, garantizando un buen plan de mantenimiento, solicitud de garantías, información estadística y visualización georeferenciada de cada componente.",
    gif: imgMttoCard,
    imagen: serviciop,
    imagenLateral: carrusel4,
    caracteristicas: [
      { icon: FaClock, label: "Servicio 24 horas", texto: "Mantenimiento los 365 días del año a todos los componentes del sistema." },
      { icon: FaUsers, label: "Personal Calificado", texto: "Equipo técnico especializado para atender todo tipo de daños y dificultades técnicas." },
      { icon: FaBolt, label: "Rapidez en la solución", texto: "Respuesta inmediata ante fallas en controladores, unidades de comunicación e infraestructura." },
    ],
  },
  {
    id: "smart-city",
    titulo: "Smart City",
    descripcionCorta: "Soluciones inteligentes para ciudades conectadas y eficientes.",
    descripcionLarga:
      "Básicamente es una ciudad que piensa y actúa de manera autónoma. Hoy en día existen muchos mitos y tabúes sobre qué es una ciudad inteligente y cómo debe funcionar, por eso queremos romper paradigmas y aclarar lo que significa este término. Lo primero es saber cómo se crea la inteligencia artificial.",
    gif: imgSmartCard,
    imagen: serviciop,
    imagenLateral: carrusel4,
    seccionesAplic: [
      {
        titulo: "Llevamos los datos a la acción",
        img: carrusel1,
        parrafos: [
          "Una vez que obtenemos los diferentes datos, es cuando podemos derivar diferentes funciones en la ciudad o si queremos llamarlas unidades de negocio.",
        ],
      },
      {
        titulo: "Red de alumbrado público",
        img: carrusel2,
        parrafos: [
          "Esta red existente en todas las ciudades, es la principal fuente de adquisición de datos en una ciudad inteligente; dado que las luminarias se encuentran en un lugar estratégico, el uso de diferentes tecnologías adheridas a las luminarias Smart, puede dar lugar a varios servicios o unidades de negocio para ofrecer al ciudadano.",
        ],
      },
      {
        titulo: "Red de semáforos",
        img: carrusel3,
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
  },
  {
    id: "software",
    titulo: "Software",
    descripcionCorta: "Software de control y gestión de tráfico vehicular y peatonal.",
    descripcionLarga:
      "El software personalizado beneficiará enormemente a sus procesos comerciales únicos al resolver sus problemas específicos, satisfacer sus necesidades únicas y hacer que su flujo de trabajo sea más fluido, más fácil, más rápido y más eficiente.",
    gif: imgSoftCard,
    imagen: serviciop,
    imagenLateral: carrusel1,
    seccionesAplic: [
      {
        titulo: "Aplicaciones móviles",
        img: carrusel2,
        parrafos: [
          "Aplicaciones móviles nativas (en Kotlin, Swift) o híbridas (en Flutter, React Native) totalmente personalizadas para complementar su aplicación web o creadas como una solución separada con su propio back-end (.NET, Java, PHP, Node.js).",
        ],
      },
      {
        titulo: "Aplicaciones de BigData",
        img: carrusel3,
        parrafos: [
          "Herramientas personalizadas creadas específicamente para proporcionar la información más profunda sobre los componentes significativos de su negocio en función de los resultados del procesamiento de datos de gran volumen.",
          "- Control y optimización de procesos (por ejemplo, gestión de tráfico, gestión de stock, etc.)",
          "- Mantenimiento predictivo de equipos",
          "- Segmentación de clientes",
          "- Seguimiento y estado de la salud del paciente",
        ],
      },
    ],
    caracteristicas: [
      { texto: "Venta de derecho de uso temporal de códigos de software para: solución de códigos cifrados, algoritmos de aprendizaje automatizado, inteligencia artificial, la solución de procesos y ecuaciones matemáticas de orden N." },
      { texto: "Venta de servicios de desarrollo de software, de sistemas informáticos (planificación, el análisis, diseño, escritura del código, programación, pruebas)." },
      { texto: "Desarrollo, compra y venta de plataformas en la nube para análisis de problemas matemáticos de orden N, así como otras soluciones algorítmicas para uso procesamiento de iteraciones en red." },
      { texto: "Personalización de programas informáticos a clientes, software de contenido digital, configuración de aplicaciones existentes con otros sistemas de información, así como el desarrollo de otros productos intangibles según requerimiento del cliente." },
    ],
  },
];

export default servicios;
