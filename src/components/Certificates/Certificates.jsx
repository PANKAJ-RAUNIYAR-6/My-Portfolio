
import { ArrowUpRight, BadgeCheck, Sparkles } from "lucide-react";
import { certifications } from "../../data/portfolio";
import "./Certificates.css";

export default function Certificates() {
  // No certificates = don't show the section
  if (!certifications || certifications.length === 0) {
    return null;
  }

  return (
    <section
      className="section certificates"
      id="certificates"
    >
      {/* =========================
          SECTION HEADING
      ========================== */}
      <div className="section-head reveal">
        <span>05 — Certifications</span>

        <h2>
          Proof of <em>continuous learning.</em>
        </h2>
      </div>

      {/* =========================
          CERTIFICATES GRID
      ========================== */}
      <div className="cert-grid">
        {certifications.map((c, i) => (
          <article
            className="cert reveal"
            key={c.title}
          >
            {/* Certificate Icon */}
            <div className="cert-icon">
              <BadgeCheck />
            </div>

            {/* Certificate Details */}
            <div className="cert-main">
              <span>{c.type}</span>

              <h3>{c.title}</h3>

              <p>{c.provider}</p>
            </div>

            {/* Certificate Number */}
            <div className="cert-number">
              {String(i + 1).padStart(2, "0")}
            </div>

            {/* Contact Link */}
            <a
              href="#contact"
              aria-label={`Contact for ${c.title} certificate`}
            >
              <ArrowUpRight />
            </a>
          </article>
        ))}

        {/* =========================
            LEARNING NOTE
        ========================== */}
        <div className="cert-note reveal">
          <Sparkles />

          <div>
            <b>Learning never stops.</b>

            <span>
              More certificates can be added as your developer
              journey grows.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
