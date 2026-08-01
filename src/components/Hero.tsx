import foto from "../assets/images/Foto.jpeg";
import Skills from "./Skills";

function Hero() {
  return (
    <>

      <section id="home" className="hero">

        <div className="hero-image">
          <img
            src={foto}
            alt="Pablo Valverde"
          />
        </div>

        <div className="hero-content">

          <h1>José Pablo Vega Valverde</h1>

          <h2>Full Stack Developer</h2>

          <p>
            Egresado de Ingeniería en Sistemas Computacionales con conocimientos
            en desarrollo de software, bases de datos y soporte técnico.
            Me apasiona crear aplicaciones web modernas y desarrollar
            soluciones que resuelvan problemas reales.
          </p>

          <div className="hero-buttons">

            <a
              href="mailto:pvv1614@gmail.com"
              className="btn-primary"
            >
              Contacto
            </a>

            <a
              href="/JPablo_Vega_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Descargar CV
            </a>

          </div>

        </div>

      </section>

      <Skills />

    </>
  );
}

export default Hero;