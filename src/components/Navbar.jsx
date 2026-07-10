import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/navbar.css";
import { BodyText } from "./Typography";
import { logos } from "../assets/logos";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("inicio");
  const [visible, setVisible] = useState(true);
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
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const navItems = [
    { id: "inicio", text: "Inicio" },
    { id: "sobre", text: "Sobre Nosotros" },
    { id: "servicios", text: "Servicios" },
    { id: "productos", text: "Productos" },
    { id: "contacto", text: "Contáctanos" },
  ];

  return (
    <nav className={`navbar ${!visible ? "navbar--hidden" : ""}`}>
      <div className="navbar-logo-container">
        <img
          src={logos.lightGrayFullt}
          alt="SolutrafficCra Logo"
          className="navbar-logo"
        />
      </div>

      <div className="navbar-buttons">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleNavClick(item.id)}
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
