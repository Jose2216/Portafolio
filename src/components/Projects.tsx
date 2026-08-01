import { HiOutlineSquares2X2 } from "react-icons/hi2";

import ProjectCard from "./ProjectCard";
import abrasivlogImage from "../assets/images/Abrasivlog1.png";

const projects = [
  {
    title: "AbrasivLog",
    description:
      "Sistema web desarrollado para Abrasivos Industriales que centraliza la gestión de entregas, clientes, empleados y productos, optimizando los procesos operativos de la empresa.",
    href: "/projects/abrasivlog",
    image: abrasivlogImage
  }
];

function Projects() {
  return (
    <section
      id="projects"
      className="projects-section"
    >
     <div className="projects-header">
  <div className="projects-title-row">
    <div className="projects-icon">
      <HiOutlineSquares2X2 />
    </div>

    <h2>
      Proyectos <span>Completados</span>
    </h2>
  </div>

  <p className="projects-description">
    Explora algunos de los proyectos que he desarrollado para resolver
    necesidades reales mediante aplicaciones web funcionales, organizadas
    y orientadas a mejorar distintos procesos.
  </p>
</div>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            href={project.href}
            image={project.image}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;