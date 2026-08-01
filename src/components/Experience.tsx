import { FaLaptopCode } from "react-icons/fa";

const experiences = [
  {
    role: "Desarrollador de Software",
    company: "Abrasivos Industriales S.A.",
    period: "Mayo 2025 – Abril 2026",
    description:
      "Diseñé y desarrollé un sistema web para la gestión de entregas, clientes, empleados y productos. Participé en el levantamiento y análisis de requerimientos, implementé reglas de negocio y validaciones, desarrollé múltiples módulos del sistema, diseñé y administré la base de datos, elaboré documentación técnica y realicé pruebas para garantizar el correcto funcionamiento de la aplicación."
  },
  {
    role: "Técnico de Soporte TI e Inventario",
    company: "BestComputer S.A.",
    period: "Agosto 2019 – Diciembre 2019",
    description:
      "Brindé soporte técnico a equipos de cómputo mediante el ensamblaje, configuración y mantenimiento de hardware y software. Además, gestioné el inventario tecnológico, di seguimiento a incidencias técnicas y colaboré en los procesos operativos y logísticos del área de soporte."
  },
  {
    role: "Técnico de Soporte TI",
    company: "MACORI",
    period: "Abril 2018 – Mayo 2018",
    description:
      "Pasantía en la que proporcioné soporte técnico a usuarios mediante el diagnóstico y solución de incidencias de hardware y software. Realicé instalación y configuración de sistemas, mantenimiento preventivo y correctivo de equipos, y apoyé las actividades diarias del departamento de TI."
  }
];

function Experience() {
  return (
    <section id="experience" className="experience-section">

      <div className="experience-header">
        <div className="experience-icon">
          <FaLaptopCode />
        </div>

        <h2>
          Experiencia <span>Profesional</span>
        </h2>
      </div>

      <div className="experience-timeline">
        {experiences.map((experience) => (
          <article
            className="experience-item"
            key={`${experience.company}-${experience.period}`}
          >

            <div className="timeline-marker">
              <span></span>
            </div>

            <div className="experience-summary">
              <h3>{experience.role}</h3>

              <h4>{experience.company}</h4>

              <p className="experience-period">
                {experience.period}
              </p>
            </div>

            <div className="experience-details">
              <p>{experience.description}</p>
            </div>

          </article>
        ))}
      </div>

    </section>
  );
}

export default Experience;