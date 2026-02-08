import { motion } from 'framer-motion';
import { experience } from '../data/experience';
import { Briefcase } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title flex items-center gap-3"
        >
          <Briefcase className="w-8 h-8 text-accent" />
          Experience
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="section-subtitle mb-12"
        >
          Roles and impact so far.
        </motion.p>
        <div className="relative">
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-slate-200 dark:bg-slate-700 hidden sm:block" />
          <ul className="space-y-8">
            {experience.map((job, index) => (
              <motion.li
                key={job.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative flex gap-6 sm:gap-8"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/15 dark:bg-accent/25 border-2 border-accent dark:border-accent-light flex items-center justify-center z-10">
                  <Briefcase className="w-4 h-4 text-accent dark:text-accent-light" />
                </div>
                <div className="flex-1 card-base p-6 hover:shadow-xl transition-shadow">
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                    <h3 className="font-display font-semibold text-lg text-slate-900 dark:text-white">
                      {job.role}
                    </h3>
                    <span className="font-mono text-sm text-accent dark:text-accent-light">
                      {job.period}
                    </span>
                  </div>
                  <p className="text-accent dark:text-accent-light font-medium mb-3">
                    {job.company}
                  </p>
                  <ul className="space-y-1.5">
                    {job.highlights.map((h) => (
                      <li
                        key={h}
                        className="text-slate-600 dark:text-slate-400 text-sm flex items-start gap-2"
                      >
                        <span className="text-accent mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
