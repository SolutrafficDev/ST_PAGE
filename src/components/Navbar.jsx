import { useState, useEffect } from "react";
import "../styles/navbar.css";
import { BodyText } from "./Typography";
import { logos } from "../assets/logos";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("inicio");

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["inicio", "sobre", "servicios", "productos", "contacto"];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "inicio", text: "Inicio" },
    { id: "sobre", text: "Sobre Nosotros" },
    { id: "servicios", text: "Servicios" },
    { id: "productos", text: "Productos" },
    { id: "contacto", text: "Contáctanos" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-logo-container">
        <img
          src={logos.lightGraySm}
          alt="SolutrafficCra Logo"
          className="navbar-logo"
        />
      </div>

      <div className="navbar-buttons">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`navbar-button ${activeSection === item.id ? "active" : ""}`}
            data-section={item.id}
          >
            <BodyText
              text={item.text}
              className="text-foreground"
            />
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
