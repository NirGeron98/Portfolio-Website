import { motion } from "framer-motion";
import { ArrowUpRight, Code2, Github, Layers3 } from "lucide-react";

export default function ProjectCard({ project, index }) {
  return (
    <motion.article
      className={`project-card project-${project.tone}`}
      initial={{ opacity: 0.96, y: 6 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.28, delay: Math.min(index * 0.03, 0.1), ease: "easeOut" }}
    >
      <div className="project-visual" aria-hidden="true">
        <div className="data-bars">
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
      <div className="project-content">
        <div className="mb-5 flex items-start gap-4">
          <div className="min-w-0 flex-1">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan/80">
              {project.category}
            </p>
            <h3 className="mt-3 font-display text-3xl font-semibold text-white md:text-4xl">
              {project.name}
            </h3>
          </div>
          <Layers3 className="shrink-0 text-white/40" size={28} />
        </div>
        <p className="max-w-3xl leading-8 text-white/70">{project.description}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span className="chip" key={tech}>
              {tech}
            </span>
          ))}
        </div>
        <ul className="mt-7 grid gap-3 text-sm leading-7 text-white/70 md:grid-cols-2">
          {project.points.map((point) => (
            <li key={point} className="flex gap-3">
              <Code2 className="mt-1 shrink-0 text-mint" size={16} />
              <span>{point}</span>
            </li>
          ))}
        </ul>
        {(project.links.repository || project.links.liveDemo || project.links.caseStudy) && (
          <div className="mt-8 flex flex-wrap gap-3">
            {project.links.repository && (
              <a
                className="btn-secondary"
                href={project.links.repository}
                target="_blank"
                rel="noreferrer"
              >
                <Github size={17} />
                View Repository
              </a>
            )}
            {project.links.liveDemo && (
              <a
                className="btn-primary"
                href={project.links.liveDemo}
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
                <ArrowUpRight size={17} />
              </a>
            )}
            {project.links.caseStudy && (
              <a className="btn-primary" href={project.links.caseStudy}>
                Case Study
                <ArrowUpRight size={17} />
              </a>
            )}
          </div>
        )}
      </div>
    </motion.article>
  );
}
