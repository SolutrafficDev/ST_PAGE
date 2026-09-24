import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/navbar.css";
import { BodyText } from "./Typography";
import { logos } from "../assets/logos";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("inicio");
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  const handleNavClick = (id) => {
    setMenuOpen(false);
    if (isHome) {
      scrollToSection(id);
    } else {
      navigate(`/#${id}`);
      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) section.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      lastScrollY = currentScrollY;

      if (!isHome) return;
      const sections = ["inicio", "productos", "servicios", "sobre", "compromiso", "contacto"];
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
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const pathSection = isHome
    ? null
    : location.pathname === "/galeria"
    ? "sobre"
    : location.pathname.startsWith("/productos")
    ? "productos"
    : location.pathname.startsWith("/servicios")
    ? "servicios"
    : "inicio";

  const currentActive = pathSection ?? activeSection;

  const navItems = [
    { id: "inicio", text: "Inicio" },
    { id: "productos", text: "Productos" },
    { id: "servicios", text: "Servicios" },
    { id: "sobre", text: "Sobre Nosotros" },
    { id: "compromiso", text: "Compromiso Social" },
    { id: "contacto", text: "Contáctanos" },
  ];

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <nav className={`navbar ${!visible ? "navbar--hidden" : ""}`}>
      <div className="navbar-logo-container">
        <img
          src={logos.lightGrayFullt}
          alt="SolutrafficCra Logo"
          className="navbar-logo navbar-logo--desktop"
        />
        <img
          src={logos.lightGraySm}
          alt="SolutrafficCra Logo"
          className="navbar-logo navbar-logo--mobile"
        />
      </div>

      <div className="navbar-buttons">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleNavClick(item.id)}
            className={`navbar-button ${currentActive === item.id ? "active" : ""}`}
            data-section={item.id}
          >
            <BodyText
              text={item.text}
              className="text-foreground"
            />
          </button>
        ))}
      </div>

      <button
        className="navbar-hamburger"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={menuOpen}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      <div className={`navbar-menu ${menuOpen ? "navbar-menu--open" : ""}`}>
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleNavClick(item.id)}
            className={`navbar-menu-item ${currentActive === item.id ? "active" : ""}`}
            data-section={item.id}
          >
            <BodyText text={item.text} className="text-foreground" />
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
