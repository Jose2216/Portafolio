import { HiOutlineCodeBracket } from "react-icons/hi2";

const skills = [
  ".NET",
  "C#",
  "React",
  "JavaScript",
  "TypeScript",
  "HTML",
  "CSS",
  "Bootstrap",
  "Java",
  "Python",
  "PHP",
  "SQL Server",
  "MySQL",
  "Oracle",
  "MongoDB",
  "Git",
  "GitHub",
  "Azure",
  "Power BI",
  "Scrum",
  "Kanban"
];

function Skills() {
  return (
    <section id="skills" className="skills-card">

      <div className="skills-header">
        <div className="skills-icon">
          <HiOutlineCodeBracket />
        </div>

        <h2>Habilidades</h2>
      </div>

      <div className="skills-list">
        {skills.map((skill) => (
          <div className="skill-item" key={skill}>
            <span className="skill-dot"></span>
            <span>{skill}</span>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Skills;