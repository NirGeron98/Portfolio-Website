import { motion } from 'framer-motion';
import { ArrowDown, Mail } from 'lucide-react';
import { profile } from '../data/profile';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-mesh"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(14,165,233,0.15),transparent)] dark:bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(14,165,233,0.2),transparent)] pointer-events-none" />
      <div className="section-padding relative z-10 w-full max-w-5xl mx-auto text-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-6"
        >
          <motion.p
            variants={item}
            className="font-mono text-accent dark:text-accent-light text-sm md:text-base tracking-wider uppercase"
          >
            Software Engineer
          </motion.p>
          <motion.h1
            variants={item}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white tracking-tight"
          >
            {profile.name}
          </motion.h1>
          <motion.p
            variants={item}
            className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 font-medium"
          >
            {profile.title}
          </motion.p>
          <motion.p
            variants={item}
            className="text-slate-500 dark:text-slate-500 text-lg max-w-2xl mx-auto"
          >
            {profile.tagline}
          </motion.p>
          <motion.div
            variants={item}
            className="flex flex-wrap gap-4 justify-center pt-4"
          >
            <button onClick={scrollToProjects} className="btn-primary">
              View Projects
              <ArrowDown className="w-4 h-4" />
            </button>
            <button onClick={scrollToContact} className="btn-secondary">
              <Mail className="w-4 h-4" />
              Contact Me
            </button>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-8 h-8 rounded-full border-2 border-slate-400 dark:border-slate-500 flex items-center justify-center"
        >
          <ArrowDown className="w-4 h-4 text-slate-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}
