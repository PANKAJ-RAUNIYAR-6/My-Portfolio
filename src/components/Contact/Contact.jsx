import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

import { profile } from "../../data/portfolio";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="contact-box reveal">
        <div className="contact-copy">
          <span>06 — Contact</span>

          <h2>
            Let's build something <em>great together.</em>
          </h2>

          <p>
            I'm open to entry-level web development opportunities,
            collaborations and interesting projects.
          </p>

          <a className="big-mail" href={`mailto:${profile.email}`}>
            {profile.email}
            <ArrowUpRight />
          </a>
        </div>

        <div className="contact-side">
          <div>
            <Mail />
            <span>Email</span>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </div>

          <div>
            <Phone />
            <span>Phone</span>
            <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>
              {profile.phone}
            </a>
          </div>

          <div>
            <MapPin />
            <span>Location</span>
            <b>Maharashtra, India</b>
          </div>

          <div className="contact-social">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}