import gifEjemplo from "../../assets/a.gif";
import serviciop from "../../assets/serviciop.png";
import carrusel1 from "../../assets/carrusel1.jpg";
import carrusel2 from "../../assets/carrusel2.jpg";
import carrusel3 from "../../assets/carrusel3.jpg";
import carrusel4 from "../../assets/carrusel4.jpg";

const producto = {
  id: "semaforo-vehicular-bola-completa",
  titulo: "Semáforo Vehicular de Bola Completa Rojo/Amarillo/Verde de Bajo Consumo con Temporizador de Cuenta Regresiva",
  subtitulo: "Intersecciones semaforizadas · Tráfico vehicular · Bajo consumo energético",
  refManual: "ST-FT-SEM-001",
  descripcionCorta:
    "Semáforo vehicular de bola completa R/A/V con temporizador de cuenta regresiva, disponible en tres tamaños (200, 300 y 400 mm). Bajo consumo y alta eficiencia.",
  descripcionLarga:
    "El semáforo vehicular de bola completa roja/amarilla/verde de bajo consumo con temporizador de cuenta regresiva está compuesto por tres unidades ópticas independientes. Las unidades de bola completa roja y verde integran panel de luz, lente óptica, módulo de alimentación y carcasa de lámpara. La unidad de bola completa amarilla incorpora, adicionalmente, la función de cuenta regresiva y está compuesta por un panel de luz de cuenta regresiva, lente óptica, placa de control y carcasa de lámpara. El equipo está diseñado para su instalación en intersecciones semaforizadas de diversa configuración vial, y se ofrece en tres tamaños de superficie emisora de luz (LED): 200 mm, 300 mm y 400 mm, según el modelo.",
  gif: gifEjemplo,
  imagen: serviciop,
  caracteristicas: [
    { img: carrusel1, texto: "Circuito de malla que aísla automáticamente el punto de falla cuando un LED se avería, manteniendo estable el efecto de visualización general del resto del panel." },
    { img: carrusel2, texto: "Fuente de alimentación de diseño propio con alta eficiencia de conversión de energía y factor de potencia de hasta 0,98, lo que reduce el consumo energético." },
    { img: carrusel3, texto: "Tecnología de driver de corriente constante que garantiza una corriente de trabajo estable, extiende la vida útil de la lámpara y reduce los costos de mantenimiento." },
    { img: carrusel4, texto: "El temporizador de cuenta regresiva admite tres modos de funcionamiento adaptativos — modo de comunicación, modo de activación y modo de aprendizaje —, compatible con más del 99 % de los controladores de semáforos del mercado." },
  ],
  fichaTecnica: [
    {
      titulo: "Descripción General",
      filas: [
        { label: "Código de documento", value: "ST-FT-SEM-001" },
        { label: "Modelos", value: "JD200-3-FM31 · JD300-3-FM31 · JD400-3-FM32" },
        { label: "Fabricante", value: "Yangzhou FAMA Intelligent Equipment Co., Ltd." },
        { label: "Tamaños LES", value: "200 mm, 300 mm y 400 mm" },
      ],
    },
    {
      titulo: "Composición del Sistema",
      filas: [
        { label: "Unidad roja", value: "Panel de luz LED roja, lente óptica, módulo de alimentación y carcasa de policarbonato." },
        { label: "Unidad verde", value: "Panel de luz LED verde, lente óptica, módulo de alimentación y carcasa de policarbonato." },
        { label: "Unidad amarilla con cuenta regresiva", value: "Panel de luz de cuenta regresiva, lente óptica, placa de control y carcasa de policarbonato. Integra el temporizador de cuenta regresiva del conjunto." },
      ],
    },
    {
      titulo: "Parámetros Técnicos",
      filas: [
        { label: "Tamaño LES", value: "200 mm (JD200) / 300 mm (JD300) / 400 mm (JD400)" },
        { label: "Material de la carcasa", value: "Policarbonato" },
        { label: "Colores de lámpara", value: "Rojo / Amarillo / Verde" },
        { label: "Voltaje / frecuencia", value: "AC 85-264 V / 47-63 Hz" },
        { label: "Rango de cuenta regresiva", value: "1 a 99 s" },
        { label: "LED — JD200", value: "Bola completa R/A/V: 90 pzs · Cuenta regresiva R/V: 70 pzs" },
        { label: "LED — JD300", value: "Bola completa R/V: 168 pzs, A: 170 pzs · Cuenta regresiva R/V: 64 pzs" },
        { label: "LED — JD400", value: "Bola completa R/A/V: 205 pzs · Cuenta regresiva R/V: 140 pzs" },
        { label: "Consumo — Rojo", value: "≤7 W (JD200) / ≤11 W (JD300) / ≤13 W (JD400)" },
        { label: "Consumo — Amarillo", value: "≤7 W (JD200) / ≤11 W (JD300) / ≤13 W (JD400)" },
        { label: "Consumo — Verde", value: "≤6 W (JD200) / ≤9 W (JD300) / ≤11 W (JD400)" },
        { label: "Consumo — Cuenta regresiva R/V", value: "≤10 W (JD200) / ≤12 W (JD300) / ≤15 W (JD400)" },
        { label: "Longitud de onda LED", value: "Rojo: 616-628 nm · Amarillo: 589-592 nm · Verde: 500-510 nm" },
        { label: "Intensidad luminosa (bola completa)", value: "400-1000 cd" },
        { label: "Intensidad luminosa (cuenta regresiva)", value: "5000-15000 cd/m²" },
        { label: "Resistencia de aislamiento", value: "> 2 MΩ" },
        { label: "Vida útil del LED", value: "≥ 100.000 horas" },
        { label: "Temperatura de funcionamiento", value: "-40 °C a +80 °C" },
        { label: "Humedad relativa", value: "≤ 97 % HR" },
        { label: "Grado de protección", value: "IP55" },
        { label: "Distancia de visibilidad", value: "≥ 300 m" },
      ],
    },
    {
      titulo: "Especificaciones de Embalaje",
      filas: [
        { label: "JD200-3-FM31", value: "1 pza/caja · 91 x 30 x 23 cm · 7,5 ± 0,5 kg" },
        { label: "JD300-3-FM31", value: "1 pza/caja · 123 x 40 x 19 cm · 12 ± 0,5 kg" },
        { label: "JD400-3-FM32", value: "1 pza/caja · 162 x 54 x 22 cm · 18,7 ± 0,5 kg" },
      ],
    },
    {
      titulo: "Componentes Estructurales",
      filas: [
        { label: "Componentes", value: "Carcasa frontal, panel de LED (bola completa o cuenta regresiva según la unidad), lente óptica difusora, visera parasol, carcasa posterior con prensaestopas para ingreso de cableado, y módulo de alimentación o placa de control interno." },
      ],
    },
  ],
  destacadas: [
    "Circuito de malla que aísla automáticamente el punto de falla cuando un LED se avería.",
    "Fuente de alimentación con eficiencia >98% y factor de potencia hasta 0,98.",
    "Driver de corriente constante para mayor vida útil y menor mantenimiento.",
    "Compatibilidad electromagnética con THD <10%.",
    "Temporizador multi-modo compatible con >99% de los controladores del mercado.",
    "Disponible en tres tamaños: 200 mm, 300 mm y 400 mm.",
  ],
  normativa: "Normas europeas de compatibilidad electromagnética · IP55 · RETIE",
};

export default producto;
