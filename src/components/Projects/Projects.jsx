import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects } from "../../data/portfolio";
import "./Projects.css";

export default function Projects() {
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

      <div className="project-grid">
        {projects.map((p, i) => (
          <article
            className={`project-card reveal ${p.featured ? "featured" : ""}`}
            key={p.title}
          >
            <div className="project-visual">
              <div className="visual-grid" />

              <div className="project-logo">
                <span>{p.icon}</span>
              </div>

              <div className="project-index">{p.number}</div>
              <div className="project-glow" />
            </div>

            <div className="project-body">
              <div className="project-meta">
                <span>{p.tag}</span>
                <span>0{i + 1}</span>
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
        ))}
      </div>
    </section>
  );
}