import "../styles/navbar.css";

const Navbar = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="navbar">
      <button onClick={() => scrollToSection("inicio")}>Inicio</button>
      <button onClick={() => scrollToSection("sobre")}>Sobre Nosotros</button>
      <button onClick={() => scrollToSection("servicios")}>Servicios</button>
      <button onClick={() => scrollToSection("productos")}>Productos</button>
      <button onClick={() => scrollToSection("contacto")}>Contáctanos</button>
    </nav>
  );
};

export default Navbar;
