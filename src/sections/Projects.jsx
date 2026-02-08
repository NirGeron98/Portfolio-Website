import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import { Linkedin } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="section-subtitle mb-12"
        >
          Full-stack and data-focused work.
        </motion.p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="card-base p-6 flex flex-col group hover:shadow-xl hover:border-accent/30 dark:hover:border-accent/40 transition-all duration-300"
            >
              <h3 className="font-display font-semibold text-xl text-slate-900 dark:text-white mb-2 group-hover:text-accent dark:group-hover:text-accent-light transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm flex-1 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {project.linkedinPostUrl && (
                <a
                  href={project.linkedinPostUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-[#0A66C2] dark:hover:text-[#70b5f9] transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  View on LinkedIn
                </a>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
