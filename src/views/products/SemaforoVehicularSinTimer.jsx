import gifEjemplo from "../../assets/a.gif";
import serviciop from "../../assets/serviciop.png";
import carrusel1 from "../../assets/carrusel1.jpg";
import carrusel2 from "../../assets/carrusel2.jpg";
import carrusel3 from "../../assets/carrusel3.jpg";
import carrusel4 from "../../assets/carrusel4.jpg";

const producto = {
  id: "semaforo-vehicular-bola-completa-sin-timer",
  titulo: "Semáforo Vehicular de Bola Completa Rojo/Amarillo/Verde de Bajo Consumo (sin temporizador)",
  subtitulo: "Intersecciones semaforizadas · Tráfico vehicular · Bajo consumo · Sin cuenta regresiva",
  refManual: "ST-FT-SEM-002",
  descripcionCorta:
    "Semáforo vehicular de bola completa R/A/V sin temporizador, disponible en cuatro tamaños (100, 200, 300 y 400 mm).",
  descripcionLarga:
    "El semáforo vehicular de bola completa roja/amarilla/verde de bajo consumo está compuesto por tres unidades independientes. El núcleo de cada lámpara está formado por la placa de luz, la lente óptica, el módulo de alimentación y el casquillo de la lámpara. El equipo es apto para su instalación en diversas intersecciones controladas por semáforo. A diferencia de la versión con temporizador (ST-FT-SEM-001), este modelo no incorpora la función de cuenta regresiva y se ofrece en cuatro tamaños de superficie emisora de luz (LES): 100 mm, 200 mm, 300 mm y 400 mm, según el modelo, lo que permite su uso tanto en semáforos de intersección estándar (200-400 mm) como en semáforos auxiliares o de repetición de menor tamaño (100 mm).",
  gif: gifEjemplo,
  imagen: serviciop,
  galeria: [carrusel1, carrusel2, carrusel3, carrusel4],
  caracteristicas: [
    "Circuito de malla que aísla automáticamente el punto de falla cuando un LED se avería, manteniendo estable el efecto de visualización general del resto del panel.",
    "Fuente de alimentación de diseño propio con alta eficiencia de conversión de energía y factor de potencia de hasta 0,98, lo que reduce el consumo energético.",
    "Tecnología de driver de corriente constante que garantiza una corriente de trabajo estable, extiende la vida útil de la lámpara y reduce los costos de mantenimiento.",
    "Compatibilidad electromagnética con distorsión armónica total inferior al 10 %, reduciendo interferencias con la red eléctrica y otros equipos de la intersección.",
  ],
  fichaTecnica: [
    {
      titulo: "Descripción General",
      filas: [
        { label: "Código de documento", value: "ST-FT-SEM-002" },
        { label: "Modelos", value: "JD100-3-FM31 · JD200-3-FM31 · JD300-3-FM31 · JD400-3-FM31" },
        { label: "Fabricante", value: "Yangzhou FAMA Intelligent Equipment Co., Ltd." },
        { label: "Tamaños LES", value: "100 mm, 200 mm, 300 mm y 400 mm" },
      ],
    },
    {
      titulo: "Composición del Sistema",
      filas: [
        { label: "Unidad roja", value: "Panel de luz LED roja, lente óptica, módulo de alimentación y carcasa de policarbonato." },
        { label: "Unidad amarilla", value: "Panel de luz LED amarilla, lente óptica, módulo de alimentación y carcasa de policarbonato." },
        { label: "Unidad verde", value: "Panel de luz LED verde, lente óptica, módulo de alimentación y carcasa de policarbonato." },
      ],
    },
    {
      titulo: "Parámetros Técnicos — JD100-3-FM31 (100 mm)",
      filas: [
        { label: "Tamaño LES", value: "100 mm" },
        { label: "Material de la carcasa", value: "Policarbonato" },
        { label: "Colores de lámpara", value: "Rojo / Amarillo / Verde" },
        { label: "Viseras", value: "Φ130 x 68 mm" },
        { label: "Forma de la LES", value: "Redonda" },
        { label: "Voltaje / frecuencia", value: "AC 85-264 V / 47-63 Hz" },
        { label: "Cantidad de LED", value: "R/A/V: 45 pzs" },
        { label: "Consumo — Rojo", value: "≤ 5 W" },
        { label: "Consumo — Amarillo", value: "≤ 5 W" },
        { label: "Consumo — Verde", value: "≤ 4 W" },
        { label: "Longitud de onda LED", value: "Rojo: 616-628 nm · Amarillo: 589-592 nm · Verde: 500-510 nm" },
        { label: "Intensidad luminosa", value: "110 a 200 cd" },
        { label: "Resistencia de aislamiento", value: "> 2 MΩ" },
        { label: "Vida útil del LED", value: "≥ 100.000 h" },
        { label: "Temperatura de funcionamiento", value: "-40 °C a +80 °C" },
        { label: "Humedad relativa", value: "≤ 97 % HR" },
        { label: "Grado de protección", value: "IP55" },
        { label: "Distancia de visibilidad", value: "≥ 300 m" },
        { label: "Embalaje", value: "1 pza/caja · 65 x 22 x 26 cm · 3,5 ± 0,5 kg" },
      ],
    },
    {
      titulo: "Parámetros Técnicos — JD200-3-FM31 (200 mm)",
      filas: [
        { label: "Tamaño LES", value: "200 mm" },
        { label: "Material de la carcasa", value: "Policarbonato" },
        { label: "Colores de lámpara", value: "Rojo / Amarillo / Verde" },
        { label: "Viseras", value: "Φ216 x 205 mm" },
        { label: "Forma de la LES", value: "Redonda" },
        { label: "Voltaje / frecuencia", value: "AC 85-264 V / 47-63 Hz" },
        { label: "Cantidad de LED", value: "R/A/V: 90 pzs" },
        { label: "Consumo — Rojo", value: "≤ 7 W" },
        { label: "Consumo — Amarillo", value: "≤ 7 W" },
        { label: "Consumo — Verde", value: "≤ 6 W" },
        { label: "Longitud de onda LED", value: "Rojo: 616-628 nm · Amarillo: 589-592 nm · Verde: 500-510 nm" },
        { label: "Intensidad luminosa", value: "230 a 350 cd" },
        { label: "Resistencia de aislamiento", value: "> 2 MΩ" },
        { label: "Vida útil del LED", value: "≥ 100.000 h" },
        { label: "Temperatura de funcionamiento", value: "-40 °C a +80 °C" },
        { label: "Humedad relativa", value: "≤ 97 % HR" },
        { label: "Grado de protección", value: "IP55" },
        { label: "Distancia de visibilidad", value: "≥ 300 m" },
        { label: "Embalaje", value: "1 pza/caja · 92 x 30 x 22 cm · 7 ± 0,5 kg" },
      ],
    },
    {
      titulo: "Parámetros Técnicos — JD300-3-FM31 (300 mm)",
      filas: [
        { label: "Tamaño LES", value: "300 mm" },
        { label: "Material de la carcasa", value: "Policarbonato" },
        { label: "Colores de lámpara", value: "Rojo / Amarillo / Verde" },
        { label: "Viseras", value: "754,9 x 220 x 0,6 mm" },
        { label: "Forma de la LES", value: "Redonda" },
        { label: "Voltaje / frecuencia", value: "AC 85-264 V / 47-63 Hz" },
        { label: "Cantidad de LED", value: "R/A/V: 168 pzs" },
        { label: "Consumo — Rojo", value: "≤ 11 W" },
        { label: "Consumo — Amarillo", value: "≤ 11 W" },
        { label: "Consumo — Verde", value: "≤ 9 W" },
        { label: "Longitud de onda LED", value: "Rojo: 616-628 nm · Amarillo: 589-592 nm · Verde: 500-510 nm" },
        { label: "Intensidad luminosa", value: "400 a 1000 cd" },
        { label: "Resistencia de aislamiento", value: "> 2 MΩ" },
        { label: "Vida útil del LED", value: "≥ 100.000 h" },
        { label: "Temperatura de funcionamiento", value: "-40 °C a +80 °C" },
        { label: "Humedad relativa", value: "≤ 97 % HR" },
        { label: "Grado de protección", value: "IP55" },
        { label: "Distancia de visibilidad", value: "≥ 300 m" },
        { label: "Embalaje", value: "1 pza/caja · 112 x 39 x 28 cm · 10 ± 0,5 kg" },
      ],
    },
    {
      titulo: "Parámetros Técnicos — JD400-3-FM31 (400 mm)",
      filas: [
        { label: "Tamaño LES", value: "400 mm" },
        { label: "Material de la carcasa", value: "Policarbonato" },
        { label: "Colores de lámpara", value: "Rojo / Amarillo / Verde" },
        { label: "Viseras", value: "1060 x 460 x 0,6 mm" },
        { label: "Forma de la LES", value: "Redonda" },
        { label: "Voltaje / frecuencia", value: "AC 85-264 V / 47-63 Hz" },
        { label: "Cantidad de LED", value: "R/A/V: 205 pzs" },
        { label: "Consumo — Rojo", value: "≤ 13 W" },
        { label: "Consumo — Amarillo", value: "≤ 13 W" },
        { label: "Consumo — Verde", value: "≤ 11 W" },
        { label: "Longitud de onda LED", value: "Rojo: 616-628 nm · Amarillo: 589-592 nm · Verde: 500-510 nm" },
        { label: "Intensidad luminosa", value: "400 a 1000 cd" },
        { label: "Resistencia de aislamiento", value: "> 2 MΩ" },
        { label: "Vida útil del LED", value: "≥ 100.000 h" },
        { label: "Temperatura de funcionamiento", value: "-40 °C a +80 °C" },
        { label: "Humedad relativa", value: "≤ 97 % HR" },
        { label: "Grado de protección", value: "IP55" },
        { label: "Distancia de visibilidad", value: "≥ 300 m" },
        { label: "Embalaje", value: "1 pza/caja · 162 x 54 x 22 cm · 17,7 ± 0,5 kg" },
      ],
    },
    {
      titulo: "Componentes Estructurales",
      filas: [
        { label: "Componentes", value: "Carcasa frontal, panel de LED de bola completa, lente óptica difusora, visera parasol, carcasa posterior con prensaestopas para ingreso de cableado, y módulo de alimentación interno de cada unidad." },
      ],
    },
    {
      titulo: "Aplicaciones Típicas",
      filas: [
        { label: "Aplicaciones", value: "Intersecciones semaforizadas urbanas de tráfico vehicular estándar (200, 300 y 400 mm) · Semáforos auxiliares, de repetición o de baja visibilidad requerida (100 mm) · Renovación de infraestructura semafórica sin cuenta regresiva · Instalaciones que busquen simplicidad de mantenimiento sin componentes de temporización." },
      ],
    },
  ],
  destacadas: [
    "Circuito de malla que aísla automáticamente el punto de falla cuando un LED se avería.",
    "Fuente de alimentación con eficiencia >98% y factor de potencia hasta 0,98.",
    "Driver de corriente constante para mayor vida útil y menor mantenimiento.",
    "Compatibilidad electromagnética con THD <10%.",
    "Cuatro tamaños disponibles: 100 mm, 200 mm, 300 mm y 400 mm.",
    "Incluye modelo auxiliar de 100 mm para semáforos de repetición.",
  ],
  normativa: "Normas europeas de compatibilidad electromagnética · IP55 · RETIE",
};

export default producto;
