
import { certifications } from "../../data/portfolio";
import "./Certificates.css";
import { useState } from "react";
import { ArrowUpRight, BadgeCheck, Sparkles, X } from "lucide-react";

export default function Certificates() {
  // No certificates = don't show the section
  const [selectedCertificate, setSelectedCertificate] = useState(null);
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
                     <button
  type="button"
  className="cert-view-btn"
  aria-label={`View ${c.title} certificate`}
  onClick={() => setSelectedCertificate(c)}
>
  <ArrowUpRight />
</button>
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

      {selectedCertificate && (
  <div
    className="certificate-modal"
    onClick={() => setSelectedCertificate(null)}
  >
    <div
      className="certificate-modal-content"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        type="button"
        className="certificate-modal-close"
        onClick={() => setSelectedCertificate(null)}
        aria-label="Close certificate"
      >
        <X />
      </button>

      <h3>{selectedCertificate.title}</h3>

      <img
        src={selectedCertificate.image}
        alt={selectedCertificate.title}
      />
    </div>
  </div>
)}
    </section>
  );
}
