import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Inicio from "./views/Inicio";
import SobreNosotros from "./views/SobreNosotros";
import Servicios from "./views/Servicios";
import Productos from "./views/Productos";
import Contactanos from "./views/Contactanos";
import ServicioDetalle from "./views/ServicioDetalle";
import ProductoDetalle from "./views/ProductoDetalle";
import Footer from "./components/Footer";
import "./styles/main.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Inicio />
              <SobreNosotros />
              <Servicios />
              <Productos />
              <Contactanos />
            </>
          }
        />
        <Route path="/servicios/:id" element={<ServicioDetalle />} />
        <Route path="/productos/:id" element={<ProductoDetalle />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
