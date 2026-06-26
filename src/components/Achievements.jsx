import { motion } from "framer-motion";
import { Award, Sparkles } from "lucide-react";
import SectionTitle from "./SectionTitle.jsx";
import { personal } from "../data/personal.js";

export default function Achievements() {
  return (
    <section id="achievements" className="section-wrap">
      <SectionTitle eyebrow="Achievements" title="Signals of ownership, rigor, and momentum" />
      <div className="mx-auto grid max-w-6xl gap-4 px-5 sm:grid-cols-2 md:px-8 lg:grid-cols-3">
        {personal.achievements.map((achievement, index) => (
          <motion.article
            key={achievement.title}
            className="glass-panel achievement-card p-6"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55, delay: index * 0.05 }}
          >
            {index % 2 ? <Sparkles className="text-cyan" /> : <Award className="text-gold" />}
            <p className="mt-5 leading-7 text-white/75">{achievement.title}</p>
            {achievement.meta && (
              <span className="mt-4 inline-flex rounded-full border border-cyan/20 bg-cyan/10 px-3 py-1.5 text-sm font-semibold text-cyan">
                {achievement.meta}
              </span>
            )}
          </motion.article>
        ))}
      </div>
    </section>
  );
}
