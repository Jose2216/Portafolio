import { FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <h2>José Pablo Vega Valverde</h2>

      <p>
        Full Stack Developer | Ingeniería en Sistemas Computacionales
      </p>

      <p className="footer-quote">
  Siempre abierto a nuevos desafíos y oportunidades para seguir creciendo como profesional.
</p>

      <div className="footer-icons">
        <a
          href="https://www.linkedin.com/in/pablo-v-375baa373"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://wa.me/50687634460"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
        >
          <FaWhatsapp />
        </a>

        <a
          href="mailto:pvv1614@gmail.com"
          aria-label="Correo"
        >
          <FaEnvelope />
        </a>
      </div>

      <span>© 2026 José Pablo Vega Valverde. Todos los derechos reservados.</span>
    </footer>
  );
}

export default Footer;