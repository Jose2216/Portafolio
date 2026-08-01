import {
  HiArrowTopRightOnSquare,
  HiOutlineCheckCircle,
  HiOutlineCodeBracket,
  HiOutlineLightBulb,
  HiOutlineRocketLaunch,
} from "react-icons/hi2";

import Navbar from "../components/Navbar";
import abrasivlogImage from "../assets/images/Abrasivlog1.png";
import Footer from "../components/Footer";

const technologies = [
  "PHP",
  "JavaScript",
  "HTML",
  "CSS",
  "Bootstrap",
  "MySQL",
  "Git",
  "GitHub",
];

const features = [
  "Registro, consulta y actualización de entregas.",
  "Administración de clientes, empleados y productos.",
  "Asignación de empleados responsables de las entregas.",
  "Control de estados para los distintos módulos del sistema.",
  "Validaciones para impedir operaciones que incumplan las reglas del negocio.",
  "Búsqueda y filtrado de información para facilitar el seguimiento.",
  "Gestión de credenciales y acceso a las funciones del sistema.",
];

function AbrasivLog() {
  return (
    <>
      <Navbar />

      <main className="project-detail-page">
        <article className="project-detail-container">

          {/* ENCABEZADO */}

          <header className="project-detail-header">
            <p className="project-detail-label">
              PROYECTO DESTACADO
            </p>

            <h1>AbrasivLog</h1>

            <p className="project-detail-description">
              Aplicación web desarrollada para la empresa Abrasivos
              Industriales, con el objetivo de centralizar y mejorar la
              gestión de entregas, clientes, empleados y productos.
            </p>

            <div className="project-detail-technologies">
              {technologies.map((technology) => (
                <span key={technology}>
                  <span className="project-detail-tech-dot" />
                  {technology}
                </span>
              ))}
            </div>
          </header>

          {/* IMAGEN */}

          <figure className="project-detail-image">
            <img
              src={abrasivlogImage}
              alt="Pantalla principal del sistema AbrasivLog"
            />

            <figcaption>
              Pantalla principal del sistema desarrollado para
              Abrasivos Industriales.
            </figcaption>
          </figure>

          {/* DESCRIPCIÓN GENERAL */}

          <section className="project-content-section">
            <div className="project-section-title">
              <HiOutlineRocketLaunch />
              <h2>Descripción del proyecto</h2>
            </div>

            <p>
              AbrasivLog es un sistema web creado para reunir en una sola
              plataforma la información utilizada en los procesos logísticos
              de Abrasivos Industriales. La aplicación permite administrar
              entregas, clientes, empleados, productos y otros datos
              necesarios para el funcionamiento diario de la empresa.
            </p>

            <p>
              Antes de implementar el sistema, la información debía gestionarse
              mediante procesos separados, lo que dificultaba su consulta,
              seguimiento y actualización. AbrasivLog organiza estos datos y
              permite acceder a ellos desde una interfaz centralizada.
            </p>
          </section>

          {/* FUNCIONALIDADES */}

          <section className="project-content-section">
            <div className="project-section-title">
              <HiOutlineCheckCircle />
              <h2>Funcionalidades principales</h2>
            </div>

            <ul className="project-feature-list">
              {features.map((feature) => (
                <li key={feature}>
                  <span className="project-feature-icon">
                    <HiOutlineCheckCircle />
                  </span>

                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* TECNOLOGÍAS */}

          <section className="project-content-section">
            <div className="project-section-title">
              <HiOutlineCodeBracket />
              <h2>Tecnologías utilizadas</h2>
            </div>

            <p>
              El sistema fue desarrollado utilizando tecnologías orientadas
              a la creación de aplicaciones web, gestión de información y
              mantenimiento del código fuente.
            </p>

            <div className="project-technology-grid">
              {technologies.map((technology) => (
                <div className="project-technology-card" key={technology}>
                  <span className="project-detail-tech-dot" />
                  <span>{technology}</span>
                </div>
              ))}
            </div>
          </section>

          {/* OBJETIVO Y SOLUCIÓN */}

          <section className="project-result-grid">

            <article className="project-result-card">
              <div className="project-section-title">
                <HiOutlineLightBulb />
                <h2>Objetivo</h2>
              </div>

              <p>
                Desarrollar una solución web que permitiera centralizar la
                información relacionada con las entregas, clientes, empleados
                y productos, facilitando el control de los procesos operativos
                y el seguimiento de cada entrega.
              </p>
            </article>

            <article className="project-result-card">
              <div className="project-section-title">
                <HiOutlineRocketLaunch />
                <h2>Solución lograda</h2>
              </div>

              <p>
                AbrasivLog permitió sustituir procesos separados por una
                plataforma centralizada desde la cual se puede registrar,
                consultar y actualizar la información necesaria para las
                operaciones de la empresa.
              </p>

              <p>
                La solución mejoró la organización de los datos, facilitó el
                seguimiento del estado de las entregas y permitió aplicar
                validaciones para reducir errores durante el registro y la
                actualización de la información.
              </p>
            </article>

          </section>

          {/* BOTÓN */}

          <div className="project-detail-action">
            <a
              href="https://abrasivosindustriales.com/HTML/index.html"
              target="_blank"
              rel="noreferrer"
              className="project-detail-button"
            >
              Visitar el sitio
              <HiArrowTopRightOnSquare />
            </a>
          </div>

        </article>
      </main>
      <Footer />
    </>
  );
}

export default AbrasivLog;