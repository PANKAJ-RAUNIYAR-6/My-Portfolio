import { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Education from './components/Education/Education';
import Certificates from './components/Certificates/Certificates';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ParticleBackground from './components/ParticleBackground/ParticleBackground';

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 650);
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScroll(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    const reveal = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('is-visible');
      });
    }, { threshold: 0.12 });

    window.addEventListener('scroll', onScroll, { passive: true });
    document.querySelectorAll('.reveal').forEach((el) => reveal.observe(el));

    const move = (event) => {
      document.documentElement.style.setProperty('--mx', `${event.clientX}px`);
      document.documentElement.style.setProperty('--my', `${event.clientY}px`);
    };
    window.addEventListener('pointermove', move, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('pointermove', move);
      reveal.disconnect();
    };
  }, []);

  return (
    <div className={loaded ? 'site loaded' : 'site'}>
      <ParticleBackground />
      <div className="loader"><div className="loader-mark">PR</div><span>Loading experience…</span></div>
      <div className="cursor-glow" />
      <div className="scroll-progress"><span style={{ width: `${scroll}%` }} /></div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
