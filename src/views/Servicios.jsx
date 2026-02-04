import { SecondaryText, BodyText } from "../components/Typography";

const Servicios = () => {
  return (
    <section id="servicios" className="section">
      <SecondaryText text="Servicios" />
      <ul>
        <li>
          <BodyText text="Servicio 1" />
        </li>
        <li>
          <BodyText text="Servicio 2" />
        </li>
        <li>
          <BodyText text="Servicio 3" />
        </li>
      </ul>
    </section>
  );
};

export default Servicios;
