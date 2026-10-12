
import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Menu,
  X,
  Send,
  User,
  Mail,
  MessageSquare,
  CheckCircle,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("");

  const links = [
    "About",
    "Skills",
    "Projects",
    "Education",
    "Certificates",
    "Contact",
  ];

  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);

  useEffect(() => {
    if (!showContact) return;

    const handleKey = (e) => {
      if (e.key === "Escape") setShowContact(false);
    };

    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [showContact]);

  const go = (id) => {
    document
      .getElementById(id.toLowerCase())
      ?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.currentTarget; // Form ko pehle save karo

    setSending(true);
    setStatus("");

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );

      form.reset(); // Ab reset sahi se kaam karega
      setStatus("success");
    } catch (error) {
      console.error("Email sending failed:", error);
      console.error("EmailJS status:", error.status);
      console.error("EmailJS details:", error.text);

      setStatus("error");
    } finally {
      setSending(false);
    }
  };


  return (
    <>
      <header className={scrolled ? "nav nav-scrolled" : "nav"}>
        <a
          className="brand"
          href="#top"
          onClick={() => setOpen(false)}
        >
          <span>PR</span>
          <b>
            Pankaj<span>.</span>
          </b>
        </a>

        <button
          className="menu-btn"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          {open ? <X /> : <Menu />}
        </button>

        <nav className={open ? "nav-links open" : "nav-links"}>
          {links.map((x) => (
            <button key={x} onClick={() => go(x)}>
              {x}
            </button>
          ))}

          <button
            type="button"
            className="nav-cta"
            onClick={() => {
              setOpen(false);
              setStatus("");
              setShowContact(true);
            }}
          >
            Let's talk <ArrowUpRight size={15} />
          </button>
        </nav>
      </header>

      {showContact && (
        <div
          className="contact-overlay"
          onClick={() => setShowContact(false)}
        >
          <div
            className="contact-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-title"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="contact-close"
              onClick={() => setShowContact(false)}
              aria-label="Close contact form"
            >
              <X />
            </button>

            <div className="contact-modal-heading">
              <span className="contact-eyebrow">
                <span className="contact-dot" />
                OPEN FOR OPPORTUNITIES
              </span>

              <h2 id="contact-title">
                Let's start a <em>conversation.</em>
              </h2>

              <p>
                Have a project in mind? Send me a message.
                I'd love to hear from you.
              </p>
            </div>

            {status === "success" ? (
              <div className="contact-success">
                <CheckCircle size={42} />
                <h3>Message sent successfully!</h3>
                <p>Thanks for reaching out. I'll get back to you soon.</p>
                <button
                  type="button"
                  className="contact-submit"
                  onClick={() => setShowContact(false)}
                >
                  Done <ArrowUpRight size={17} />
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <label htmlFor="contact-name">Your name</label>
                <div className="contact-input-wrap">
                  <User size={18} />
                  <input
                    id="contact-name"
                    type="text"
                    name="from_name"
                    placeholder="Enter your name"
                    autoComplete="name"
                    maxLength={100}
                    required
                  />
                </div>

                <label htmlFor="contact-email">Email address</label>
                <div className="contact-input-wrap">
                  <Mail size={18} />
                  <input
                    id="contact-email"
                    type="email"
                    name="reply_to"
                    placeholder="you@example.com"
                    autoComplete="email"
                    maxLength={254}
                    required
                  />
                </div>

                <label htmlFor="contact-message">Your message</label>
                <div className="contact-input-wrap contact-textarea-wrap">
                  <MessageSquare size={18} />
                  <textarea
                    id="contact-message"
                    name="message"
                    placeholder="Tell me about your project..."
                    rows={4}
                    maxLength={5000}
                    required
                  />
                </div>

                {status === "error" && (
                  <p className="contact-error" role="alert">
                    Message could not be sent. Please try again.
                  </p>
                )}

                <button
                  type="submit"
                  className="contact-submit"
                  disabled={sending}
                >
                  {sending ? "Sending..." : "Send Message"}
                  {!sending && <Send size={17} />}
                </button>

                <p className="contact-form-note">
                  <Mail size={14} />
                  Your message will be sent directly to my inbox.
                </p>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
