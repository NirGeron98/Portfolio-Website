import { motion } from 'framer-motion';
import { interests } from '../data/interests';
import { Heart, Theater, Gamepad2, Trophy } from 'lucide-react';

const iconMap = {
  soccer: Heart,
  theatre: Theater,
  gamepad: Gamepad2,
  padel: Trophy,
};

export default function BeyondCode() {
  return (
    <section id="beyond-code" className="section-padding bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Beyond Code
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="section-subtitle mb-10"
        >
          A bit of personality — what I care about off the keyboard.
        </motion.p>
        <div className="grid sm:grid-cols-2 gap-4">
          {interests.map((interest, index) => {
            const Icon = iconMap[interest.icon] || Heart;
            return (
              <motion.div
                key={interest.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ scale: 1.02 }}
                className="card-base p-5 flex items-center gap-4 hover:shadow-xl hover:border-accent/20 dark:hover:border-accent/30 transition-all"
              >
                <div className="p-3 rounded-xl bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-slate-900 dark:text-white">
                    {interest.title}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">
                    {interest.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
