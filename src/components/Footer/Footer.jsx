import { ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { profile } from "../../data/portfolio";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <span>© 2026 Pankaj Rauniyar</span>

        <small>
          Designed & built with React, curiosity and a lot of CSS.
        </small>
      </div>

      <div className="footer-links">
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>

        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>

        <a href="#top" className="top">
          <ArrowUp /> Back to top
        </a>
      </div>
    </footer>
  );
}