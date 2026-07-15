import gifEjemplo from "../../assets/a.gif";
import serviciop from "../../assets/serviciop.png";
import carrusel1 from "../../assets/carrusel1.jpg";
import carrusel2 from "../../assets/carrusel2.jpg";
import carrusel3 from "../../assets/carrusel3.jpg";
import carrusel4 from "../../assets/carrusel4.jpg";

const producto = {
  id: "baliza-inteligente-peatones-bip-100",
  titulo: "Baliza Inteligente de Advertencia para Peatones BIP-100 — Dispositivo de seguridad vial para pasos peatonales",
  subtitulo: "Seguridad vial peatonal · Detección por infrarrojos · Señalización activa · ITS",
  refManual: "ST-FT-BIP-001",
  descripcionCorta:
    "Dispositivo tipo bolardo con detección PIR, señales luminosas, acústicas y de voz para seguridad en pasos peatonales.",
  descripcionLarga:
    "Dispositivo de seguridad vial tipo bolardo, diseñado para instalarse en los extremos de los pasos peatonales y advertir de forma activa a peatones y conductores mediante señales luminosas, acústicas y mensajes de voz. Detecta la presencia de peatones por infrarrojos y, en función del estado del semáforo asociado, emite avisos preventivos que orientan al peatón sobre el momento seguro para cruzar y alertan a los conductores. Opera de forma continua y se despliega en pares por paso peatonal bajo una arquitectura maestro–esclavo.",
  gif: gifEjemplo,
  imagen: serviciop,
  caracteristicas: [
    { img: carrusel1, texto: "Sensor infrarrojo pasivo (PIR) con umbral de sensibilidad configurable para detección de peatones." },
    { img: carrusel2, texto: "Indicación luminosa LED de alto brillo con iconos/mensajes que refuerza la visibilidad del cruce de noche." },
    { img: carrusel3, texto: "Aviso acústico y de voz con altavoz resistente al agua; volumen e intervalos configurables." },
    { img: carrusel4, texto: "Arquitectura maestro–esclavo con instalación en pares, sincronizable con el controlador de la intersección." },
  ],
  fichaTecnica: [
    {
      titulo: "Descripción General",
      filas: [
        { label: "Equipo", value: "Baliza Inteligente de Advertencia para Peatones" },
        { label: "Referencia", value: "BIP-100" },
        { label: "Distribuidor", value: "Solutraffic S.A.S." },
        { label: "Origen", value: "Cali, Colombia" },
        { label: "Documento", value: "ST-FT-BIP-001 v1.0 — Junio 2026" },
        { label: "Categoría", value: "Seguridad vial peatonal · ITS" },
      ],
    },
    {
      titulo: "Detección y Advertencia",
      filas: [
        { label: "Detección", value: "Sensor infrarrojo pasivo (PIR) basado en la radiación del cuerpo humano; umbral de sensibilidad configurable." },
        { label: "Indicación luminosa", value: "LED de alto brillo con iconos/mensajes de señalización; refuerza la visibilidad del cruce de noche." },
        { label: "Aviso acústico y de voz", value: "Altavoz resistente al agua con mensajes de voz y señales sonoras; volumen e intervalos configurables." },
        { label: "Pulsador peatonal", value: "Capacitivo sin contacto (activación 5 – 10 cm), con realimentación visual, cuenta regresiva y guía por audio." },
        { label: "Eventos atendidos", value: "Aproximación de peatón al paso y cruce en fase de rojo." },
      ],
    },
    {
      titulo: "Arquitectura e Integración",
      filas: [
        { label: "Configuración", value: "Maestro–esclavo; instalación en pares, una baliza por cada extremo del paso de cebra." },
        { label: "Coordinación", value: "La baliza maestra gestiona la lógica de advertencia y sincroniza las balizas esclavas." },
        { label: "Integración semafórica", value: "Sincronizable con el controlador de la intersección para corresponder con las fases verde/rojo peatonal." },
        { label: "Régimen de operación", value: "Continuo, 24 horas al día / 7 días a la semana." },
        { label: "Funciones de protección", value: "Respaldo de memoria (reanuda la operación tras corte de energía) y protección contra sobretensiones por rayos." },
      ],
    },
    {
      titulo: "Características Eléctricas y Ambientales",
      filas: [
        { label: "Alimentación", value: "85 – 265 VAC, 50/60 Hz." },
        { label: "Corriente de operación", value: "40 – 600 mA (según modo y carga de indicación)." },
        { label: "Temperatura de operación", value: "-40 °C a 80 °C." },
        { label: "Puesta a tierra", value: "Conexión equipotencial; resistencia ≤ 5 Ω (RETIE)." },
      ],
    },
    {
      titulo: "Características Físicas",
      filas: [
        { label: "Tipo de estructura", value: "Columna vertical tipo bolardo sobre base metálica de alto peso." },
        { label: "Carcasa", value: "Lámina metálica (hierro laminado en frío) con pintura apta para intemperie, resistente a impactos." },
        { label: "Montaje", value: "Sobre cimentación o andén mediante pernos de anclaje; sellado perimetral." },
      ],
    },
    {
      titulo: "Normatividad y Certificaciones",
      filas: [
        { label: "Certificaciones de referencia", value: "CE, RoHS, EN 12368, ISO 9001." },
        { label: "Marco aplicable (Colombia)", value: "RETIE y Manual de Señalización Vial vigente." },
      ],
    },
  ],
  destacadas: [
    "Sensor infrarrojo pasivo (PIR) con umbral de sensibilidad configurable.",
    "LED de alto brillo con iconos/mensajes para visibilidad nocturna.",
    "Aviso acústico y de voz con volumen e intervalos configurables.",
    "Pulsador capacitivo sin contacto con guía por audio.",
    "Arquitectura maestro–esclavo sincronizable con el controlador.",
    "Respaldo de memoria y protección contra sobretensiones.",
  ],
  normativa: "CE · RoHS · EN 12368 · ISO 9001 · RETIE · Manual de Señalización Vial",
};

export default producto;
