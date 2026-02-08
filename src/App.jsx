import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import BeyondCode from './sections/BeyondCode';
import Contact from './sections/Contact';
import { useDarkMode } from './hooks/useDarkMode';

export default function App() {
  const [isDark, toggleDark] = useDarkMode();

  return (
    <>
      <Navbar isDark={isDark} onToggleDark={toggleDark} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <BeyondCode />
        <Contact />
      </main>
    </>
  );
}
