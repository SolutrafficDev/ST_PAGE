import { PrimaryText, BodyText } from "../components/Typography";

const Inicio = () => {
  return (
    <section id="inicio" className="section">
      <PrimaryText text="Bienvenido" />
      <BodyText text="Esta es nuestra página web básica en React." />
    </section>
  );
};

export default Inicio;
