import { motion } from "framer-motion";
import { ArrowDownRight, Github, Linkedin, Mail, Download } from "lucide-react";
import { personal } from "../data/personal.js";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-28">
      <div className="hero-grid" />
      <div className="mesh mesh-a" />
      <div className="mesh mesh-b" />
      <div className="particle-field" />

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-12 px-5 pb-20 md:px-8 lg:grid-cols-[1.04fr_0.96fr]">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-cyan/25 bg-cyan/8 px-4 py-2 text-sm text-cyan shadow-glow">
            <span className="h-2 w-2 rounded-full bg-mint shadow-[0_0_16px_#55f0b1]" />
            Backend, Cloud Data & AI-Oriented Systems
          </div>
          <h1 className="font-display text-6xl font-semibold leading-[0.95] text-white sm:text-7xl lg:text-8xl">
            {personal.name}
          </h1>
          <p className="mt-5 max-w-3xl text-xl font-medium text-white/80 md:text-2xl">
            {personal.role}
          </p>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 md:text-lg">
            {personal.description}
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a className="btn-primary" href="#projects">
              View My Work
              <ArrowDownRight size={18} />
            </a>
            <a className="btn-secondary" href={personal.resumeUrl} download>
              <Download size={18} />
              Download Resume
            </a>
            <a className="btn-secondary" href="#contact">
              <Mail size={18} />
              Contact Me
            </a>
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            <a className="social-link" href={personal.githubUrl} target="_blank" rel="noreferrer">
              <Github size={18} />
              {personal.githubUser}
            </a>
            <a className="social-link" href={personal.linkedinUrl} target="_blank" rel="noreferrer">
              <Linkedin size={18} />
              {personal.linkedinLabel}
            </a>
            <a className="social-link" href={`mailto:${personal.email}`}>
              <Mail size={18} />
              {personal.email}
            </a>
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-[510px]"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
        >
          <div className="portrait-shell">
            <img src={personal.portraitUrl} alt="Nir Geron" className="portrait-image" />
            <div className="scanline" />
          </div>
          {personal.badges.map((badge, index) => (
            <motion.div
              key={badge}
              className={`floating-badge badge-${index}`}
              animate={{ y: [0, index % 2 ? -10 : 10, 0] }}
              transition={{ duration: 4 + index * 0.25, repeat: Infinity, ease: "easeInOut" }}
            >
              {badge}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
