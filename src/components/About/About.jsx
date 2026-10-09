
import {
  ArrowUpRight,
  Code2,
  GraduationCap,
  MapPin,
  Sparkles,
} from "lucide-react";

import "./About.css";

export default function About() {
  return (
    <section className="section about" id="about">

      {/* =========================
          SECTION HEADING
      ========================== */}
      <div className="section-head reveal">
        <span>01 — About me</span>

        <h2>
          Turning ideas into <em>interactive experiences.</em>
        </h2>
      </div>

      {/* =========================
          ABOUT GRID
      ========================== */}
      <div className="about-grid">

        {/* =========================
            MAIN ABOUT CONTENT
        ========================== */}
        <div className="about-main reveal">

          <div className="about-number">01</div>

          <h3>
            I like building things that look good{" "}
            <span>and work even better.</span>
          </h3>

          <p>
            I'm Pankaj Rauniyar, a Computer Science graduate focused on
            frontend development and modern web applications. I enjoy
            turning designs into responsive interfaces and connecting
            them with practical backend functionality.
          </p>

          <p>
            My current stack includes React, JavaScript, Node.js, Express,
            MongoDB, MySQL and Bootstrap. I learn by building real
            projects, testing ideas and improving the details users notice.
          </p>

          <a className="text-link" href="#projects">
            See my projects
            <ArrowUpRight size={16} />
          </a>

        </div>

        {/* =========================
            ABOUT SIDE CARDS
        ========================== */}
        <div className="about-side reveal">

          {/* What I Care About */}
          <div className="about-card highlight">
            <Sparkles />

            <span>WHAT I CARE ABOUT</span>

            <b>
              Clean UI · Responsive UX · Practical Code
            </b>
          </div>

          {/* Education */}
          <div className="about-card">
            <GraduationCap />

            <div>
              <small>Education</small>

              <b>B.Sc. Computer Science</b>

              <span>
                CGPA 9.18 · 2026
              </span>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="about-card">
            <Code2 />

            <div>
              <small>Tech Stack</small>

              <b>Frontend + Full Stack</b>

              <span>
                React · JavaScript · Bootstrap · Node · Express · MongoDB · MySQL  
              </span>
            </div>
          </div>

          {/* Tools & Deployment */}
          <div className="about-card">
            <Code2 />

            <div>
              <small>Tools & Deployment</small>

              <b>GitHub · Render · Netlify</b>

              <span>
                Version Control · Deployment · Hosting
              </span>
            </div>
          </div>

          {/* Location */}
          <div className="about-card">
            <MapPin />

            <div>
              <small>Based in</small>

              <b>Maharashtra, India</b>

              <span>
                Open to entry-level opportunities
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

