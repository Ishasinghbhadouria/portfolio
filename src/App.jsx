import BackgroundCanvas from './components/BackgroundCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="app-layout">
      {/* Interactive Background Canvas */}
      <BackgroundCanvas />

      {/* Floating Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      <style>{`
        .app-layout {
          position: relative;
          width: 100%;
          min-height: 100vh;
        }

        main {
          position: relative;
          z-index: 1;
        }

        /* Layout spacing between sections on desktop */
        section {
          scroll-margin-top: 80px; /* Offset for floating navbar */
        }
      `}</style>
    </div>
  );
}
