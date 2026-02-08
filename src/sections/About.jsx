import { motion } from 'framer-motion';
import { profile } from '../data/profile';
import { Database, Cloud, Cpu, Target } from 'lucide-react';

const highlights = [
  { icon: Cpu, label: 'Backend-heavy mindset' },
  { icon: Database, label: 'Data pipelines' },
  { icon: Cloud, label: 'Cloud & Elasticsearch' },
  { icon: Target, label: 'Real business impact' },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          About
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="section-subtitle mb-8"
        >
          {profile.bio}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {highlights.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="card-base p-4 flex items-center gap-3"
            >
              <div className="p-2 rounded-lg bg-accent/10 dark:bg-accent/20">
                <Icon className="w-5 h-5 text-accent dark:text-accent-light" />
              </div>
              <span className="font-medium text-slate-700 dark:text-slate-300">
                {label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
