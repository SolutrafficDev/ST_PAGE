import serviciop from "../../assets/services/2/title.png";
import imgInfraCard from "../../assets/services/2/card.png";
import carrusel1 from "../../assets/services/2/1.png";
import carrusel2 from "../../assets/services/2/2.png";
import carrusel3 from "../../assets/services/2/3.png";

const producto = {
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
};

export default producto;