
import { useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects } from "../../data/portfolio";
import "./Projects.css";

export default function Projects() {
  const [currentProject, setCurrentProject] = useState(0);

  const prevProject = () => {
    setCurrentProject((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1
    );
  };

  const nextProject = () => {
    setCurrentProject((prev) =>
      prev === projects.length - 1 ? 0 : prev + 1
    );
  };

  const p = projects[currentProject];

  if (!projects.length) return null;

  return (
    <section className="section projects" id="projects">
      <div className="section-head row-head reveal">
        <div>
          <span>03 — Selected work</span>
          <h2>
            Projects with <em>purpose.</em>
          </h2>
        </div>

        <p>
          From frontend interfaces to full-stack platforms, these projects
          represent what I have been learning by building.
        </p>
      </div>

      <div className="project-carousel">
        <button
          className="project-arrow project-arrow-left"
          onClick={prevProject}
          aria-label="Previous project"
          type="button"
        >
          <ChevronLeft size={22} />
        </button>

        <div className="project-grid">
          <article
            className={`project-card ${p.featured ? "featured" : ""}`}
            key={p.title}
          >
            <div className="project-visual">
              <div className="visual-grid" />

          
              <img
                className="project-screenshot"
                src={p.image}
                alt={`${p.title} homepage screenshot`}
                loading="lazy"
              />

              <div className="project-index">{p.number}</div>
              <div className="project-glow" />
            </div>

            <div className="project-body">
              <div className="project-meta">
                <span>{p.tag}</span>
                <span>
                  {String(currentProject + 1).padStart(2, "0")}
                </span>
              </div>

              <h3>{p.title}</h3>
              <p>{p.desc}</p>

              <div className="tech">
                {p.tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>

              <div className="project-links">
                <a
                  href={p.live}
                  target={p.live.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                >
                  View project <ArrowUpRight size={14} />
                </a>

                <a href={p.code} target="_blank" rel="noreferrer">
                  <FaGithub size={14} /> GitHub
                </a>
              </div>
            </div>
          </article>
        </div>

        <button
          className="project-arrow project-arrow-right"
          onClick={nextProject}
          aria-label="Next project"
          type="button"
        >
          <ChevronRight size={22} />
        </button>
      </div>

      <div className="project-pagination">
        <span>
          {String(currentProject + 1).padStart(2, "0")}
        </span>
        <div className="project-pagination-track">
          <div
            className="project-pagination-progress"
            style={{
              width: `${((currentProject + 1) / projects.length) * 100}%`,
            }}
          />
        </div>
        <span>{String(projects.length).padStart(2, "0")}</span>
      </div>
    </section>
  );
}
