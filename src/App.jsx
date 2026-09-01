import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Inicio from "./views/Inicio";
import SobreNosotros from "./views/SobreNosotros";
import Servicios from "./views/Servicios";
import Productos from "./views/Productos";
import Contactanos from "./views/Contactanos";
import ServicioDetalle from "./views/ServicioDetalle";
import ProductoDetalle from "./views/ProductoDetalle";
import Footer from "./components/Footer";
import WhatsappButton from "./components/WhatsappButton";
import Divider from "./components/Divider";
import "./styles/main.css";

function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) section.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location]);

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
              <Divider />
              <Servicios />
              <Divider className="mb-8" />
              <Productos />
              <Divider />
              <Contactanos />
            </>
          }
        />
        <Route path="/servicios/:id" element={<ServicioDetalle />} />
        <Route path="/productos/:id" element={<ProductoDetalle />} />
      </Routes>
      <Footer />
      <WhatsappButton />
    </>
  );
}

export default App;
