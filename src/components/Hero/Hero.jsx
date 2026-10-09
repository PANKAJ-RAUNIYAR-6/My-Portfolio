import {
  ArrowDown,
  ArrowUpRight,
  Mail,
  Sparkles,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-noise" />
      <div className="hero-glow glow-a" />
      <div className="hero-glow glow-b" />

      <div className="hero-lines" />

      <div className="hero-inner">
        <div className="hero-copy reveal">
          <div className="eyebrow">
            <i />
            <span>Open to opportunities • India</span>
          </div>

          <div className="hero-kicker">HELLO, I'M</div>

          <h1>
            Pankaj <span>Rauniyar</span>
          </h1>

          <h2>
            Frontend <b>Developer</b>{" "}
            <i>+</i> Full-Stack Developer
          </h2>

          <p>
            I build modern, responsive web experiences
            with clean interfaces, thoughtful interactions
            and practical full-stack functionality.
          </p>

          <div className="hero-actions">
            <a className="primary" href="#projects">
              Explore my work
              <ArrowUpRight size={18} />
            </a>

            <a
              className="secondary"
              href="mailto:rauniyarpankaj6@gmail.com"
            >
              Contact me
            </a>
          </div>

          <div className="social-row">
            <a
              href="https://github.com/PANKAJ-RAUNIYAR-6"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/pankaj-rauniyar-7a8741327/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>

            <a href="mailto:rauniyarpankaj6@gmail.com">
              <Mail />
            </a>

            <span className="hero-status">
              <i /> Available for work
            </span>
          </div>
        </div>

        <div className="hero-visual reveal">
          <div className="portrait-ring">
            <div className="portrait">
              <span>PR</span>
              <small>
                SOFTWARE
                <br />
                DEVELOPER
              </small>
            </div>
          </div>

          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />

          <div className="float-card card-react">
            <b>REACT</b>
            <span>UI / FRONTEND</span>
          </div>

          <div className="float-card card-node">
            <b>NODE.JS</b>
            <span>BACKEND</span>
          </div>

          <div className="terminal-card">
            <div className="terminal-top">
              <i />
              <i />
              <i />
              <span>pankaj.dev</span>
            </div>

            <code>
              <em>const</em> developer = {"{"}
              <br />
              <span> name:</span> <b>"Pankaj"</b>,
              <br />
              <span> focus:</span>{" "}
              <b>"Software Development"</b>,
              <br />
              <span> stack:</span> [
              <b>"React", "Node"</b>]
              <br />
              {"}"};
            </code>

            <div className="terminal-bottom">
              <Sparkles size={14} />
              build • learn • ship
            </div>
          </div>
        </div>
      </div>

      <div className="hero-bottom">
        <span>SCROLL TO EXPLORE</span>

        <a href="#about">
          <ArrowDown />
        </a>

        <div />
      </div>
    </section>
  );
}
