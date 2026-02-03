import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <h3>SolutrafficCra.</h3>

      <p>19a #15a41, Cali, Valle del Cauca</p>

      <div className="footer-info">
        <p>Email: director@solutraffic.com</p>
        <p>Email: gerente.comercial@solutraffic.com</p>
        <p>📞 +57 300 7030061</p>
        <p>📞 +57 318 2152340</p>
      </div>

      <span className="footer-copy">
        © {new Date().getFullYear()} SolutrafficCra. Todos los derechos reservados
      </span>
    </footer>
  );
};

export default Footer;
