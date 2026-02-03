import Navbar from "./components/Navbar";
import Inicio from "./views/Inicio";
import SobreNosotros from "./views/SobreNosotros";
import Servicios from "./views/Servicios";
import Productos from "./views/Productos";
import Contactanos from "./views/Contactanos";
import Footer from "./components/Footer";
import "./styles/main.css";

function App() {
  return (
    <>
      <Navbar />
      <Inicio />
      <SobreNosotros />
      <Servicios />
      <Productos />
      <Contactanos />
      <Footer />
    </>
  );
}

export default App;
