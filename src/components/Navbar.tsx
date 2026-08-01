import { useEffect, useState } from "react";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "experience", "projects"];
      const scrollPosition = window.scrollY + 120;

      let current = "home";

      sections.forEach((id) => {
        const section = document.getElementById(id);

        if (section && section.offsetTop <= scrollPosition) {
          current = id;
        }
      });

      setActive(current);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="navbar">
      <nav className="navbar-container">
        <ul className="nav-links">
          <li>
            <a
              href="/#home"
              className={active === "home" ? "active" : ""}
            >
              Inicio
            </a>
          </li>

          <li>
            <a
              href="/#experience"
              className={active === "experience" ? "active" : ""}
            >
              Experiencia
            </a>
          </li>

          <li>
            <a
              href="/#projects"
              className={active === "projects" ? "active" : ""}
            >
              Proyectos
            </a>
          </li>
        </ul>

        <div className="nav-social">
          <a
            href="https://www.linkedin.com/in/pablo-v-375baa373"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn />
          </a>

          <a
            href="https://wa.me/50687634460"
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp />
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;