import serviciop from "../../assets/services/4/title.png";
import imgCompCard from "../../assets/services/4/card.png";
import carrusel1 from "../../assets/services/4/1.png";
import carrusel2 from "../../assets/services/4/2.png";
import carrusel3 from "../../assets/services/4/3.png";

const producto = {
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
};

export default producto;