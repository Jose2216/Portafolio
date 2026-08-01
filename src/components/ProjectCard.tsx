import { HiArrowUpRight } from "react-icons/hi2";

interface ProjectCardProps {
  title: string;
  description: string;
  href: string;
  image?: string;
}

function ProjectCard({
  title,
  description,
  href,
  image
}: ProjectCardProps) {
  return (
    <a
      href={href}
      className="project-card"
      aria-label={`Ver detalles del proyecto ${title}`}
    >
      <div className="project-image">
        {image ? (
          <img
            src={image}
            alt={`Vista previa del proyecto ${title}`}
          />
        ) : (
          <div className="project-placeholder">
            <span>{title}</span>
          </div>
        )}
      </div>

      <div className="project-content">
        <div className="project-title-row">
          <h3>{title}</h3>

          <HiArrowUpRight className="project-arrow" />
        </div>

        <p>{description}</p>

        <span className="project-link">
          Ver proyecto
        </span>
      </div>
    </a>
  );
}

export default ProjectCard;