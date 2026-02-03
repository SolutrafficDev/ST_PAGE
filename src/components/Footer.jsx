import "../styles/footer.css";
import { logos } from "../assets/logos";
import { TertiaryText, BodyText, MiniText } from "./Typography";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo-container">
          <img 
            src={logos.whiteSm} 
            alt="SolutrafficCra Logo" 
            className="footer-logo"
          />
        </div>
        
        <div className="footer-text-content">
          <TertiaryText text="SolutrafficCra." color="text-contrast-light" />

          <BodyText text="19a #15a41, Cali, Valle del Cauca" color="text-contrast-light" />

          <div className="footer-info">
            <BodyText text="Email: director@solutraffic.com" color="text-contrast-light" />
            <BodyText text="Email: gerente.comercial@solutraffic.com" color="text-contrast-light" />
            <BodyText text="📞 +57 300 7030061" color="text-contrast-light" />
            <BodyText text="📞 +57 318 2152340" color="text-contrast-light" />
          </div>

          <MiniText 
            text={`© ${new Date().getFullYear()} SolutrafficCra. Todos los derechos reservados`}
            color="text-contrast-muted"
            className="footer-copy"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
