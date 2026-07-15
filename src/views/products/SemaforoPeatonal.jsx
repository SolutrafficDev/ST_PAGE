import gifEjemplo from "../../assets/a.gif";
import serviciop from "../../assets/serviciop.png";
import carrusel1 from "../../assets/carrusel1.jpg";
import carrusel2 from "../../assets/carrusel2.jpg";
import carrusel3 from "../../assets/carrusel3.jpg";
import carrusel4 from "../../assets/carrusel4.jpg";

const producto = {
  id: "semaforo-peatonal",
  titulo: "Semáforo Peatonal de Bajo Consumo",
  subtitulo: "Cruces peatonales · Intersecciones semaforizadas · Bajo consumo energético",
  refManual: "ST-FT-SEP-001",
  descripcionCorta:
    "Semáforo peatonal de bajo consumo con figuras roja/verde, disponible en dos tamaños (200 mm y 300 mm).",
  descripcionLarga:
    "El semáforo peatonal de bajo consumo está compuesto por dos unidades: la unidad de figura peatonal roja (indicación de 'alto') y la unidad de figura peatonal verde (indicación de 'cruce'). El núcleo de cada lámpara está formado por el panel de luz, la lente óptica, la fuente de alimentación, el casquillo y demás componentes estructurales. El equipo es apto para su instalación en intersecciones semaforizadas destinadas a cruces peatonales, y se ofrece en dos tamaños de superficie emisora de luz (LED): 200 mm y 300 mm, según el modelo. En el modelo RX200-3-FM21 la figura verde es dinámica (peatón en movimiento); en el modelo RX300-3-FM21 la figura verde es estática.",
  gif: gifEjemplo,
  imagen: serviciop,
  caracteristicas: [
    { img: carrusel1, texto: "Circuito de malla que aísla automáticamente el punto de falla cuando un LED se avería, manteniendo estable el efecto de visualización general del resto del panel." },
    { img: carrusel2, texto: "Fuente de alimentación de diseño propio con alta eficiencia de conversión de energía y factor de potencia de hasta 0,98, lo que reduce el consumo energético." },
    { img: carrusel3, texto: "Tecnología de driver de corriente constante que garantiza una corriente de trabajo estable, extiende la vida útil de la lámpara y reduce los costos de mantenimiento." },
    { img: carrusel4, texto: "Compatibilidad electromagnética con distorsión armónica total inferior al 10 %, reduciendo interferencias con la red eléctrica y otros equipos de la intersección." },
  ],
  fichaTecnica: [
    {
      titulo: "Descripción General",
      filas: [
        { label: "Código de documento", value: "ST-FT-SEP-001" },
        { label: "Modelos", value: "RX200-3-FM21 · RX300-3-FM21" },
        { label: "Fabricante", value: "Yangzhou FAMA Intelligent Equipment Co., Ltd." },
        { label: "Tamaños LES", value: "200 mm y 300 mm" },
      ],
    },
    {
      titulo: "Composición del Sistema",
      filas: [
        { label: "Unidad figura roja", value: "Panel de luz LED con figura peatonal estática ('alto'), lente óptica, fuente de alimentación, casquillo y carcasa." },
        { label: "Unidad figura verde", value: "Panel de luz LED con figura peatonal ('cruce'), lente óptica, fuente de alimentación, casquillo y carcasa. RX200-3-FM21: figura dinámica (peatón en movimiento). RX300-3-FM21: figura estática." },
      ],
    },
    {
      titulo: "Parámetros Técnicos",
      filas: [
        { label: "Tamaño LES", value: "200 mm (RX200) / 300 mm (RX300)" },
        { label: "Voltaje de funcionamiento", value: "AC 85 a 264 V" },
        { label: "Material de la carcasa", value: "Policarbonato (RX200) / Policarbonato + Aluminio (RX300)" },
        { label: "Cantidad de LED — RX200", value: "Figura verde dinámica: 93 LED · Figura roja estática: 66 LED" },
        { label: "Cantidad de LED — RX300", value: "Figura verde estática: 78 LED · Figura roja estática: 80 LED" },
        { label: "Consumo — Roja estática", value: "≤7 W (RX200) / ≤8 W (RX300)" },
        { label: "Consumo — Verde", value: "≤6 W (RX200 dinámica) / ≤6 W (RX300 estática)" },
        { label: "Longitud de onda LED", value: "Rojo: 625 ± 5 nm · Verde: 505 ± 5 nm" },
        { label: "Intensidad luminosa", value: "5000 a 15000 cd/m²" },
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
        { label: "RX200-3-FM21", value: "1 pza/caja · 66 x 31 x 23 cm · 5,2 ± 0,5 kg" },
        { label: "RX300-3-FM21", value: "1 pza/caja · 87 x 40 x 20 cm · 6,6 ± 0,5 kg" },
      ],
    },
    {
      titulo: "Componentes Estructurales",
      filas: [
        { label: "Componentes", value: "Carcasa frontal, panel de LED con figura peatonal (roja o verde según la unidad), lente óptica difusora, visera parasol, carcasa posterior con prensaestopas para ingreso de cableado, y módulo de alimentación interno." },
      ],
    },
    {
      titulo: "Aplicaciones Típicas",
      filas: [
        { label: "Aplicaciones", value: "Cruces peatonales en intersecciones semaforizadas urbanas · Complemento de semáforos vehiculares en intersecciones con alto flujo de peatones · Renovación de infraestructura semafórica · Instalaciones que requieran mayor visibilidad diurna de la señal peatonal." },
      ],
    },
  ],
  destacadas: [
    "Circuito de malla que aísla automáticamente el punto de falla cuando un LED se avería.",
    "Fuente de alimentación con eficiencia >98% y factor de potencia hasta 0,98.",
    "Driver de corriente constante para mayor vida útil y menor mantenimiento.",
    "Compatibilidad electromagnética con THD <10%.",
    "Figura verde dinámica (peatón en movimiento) en modelo RX200-3-FM21.",
    "Disponible en dos tamaños: 200 mm y 300 mm.",
  ],
  normativa: "Normas europeas de compatibilidad electromagnética · IP55 · RETIE",
};

export default producto;
