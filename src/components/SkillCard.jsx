import { motion } from "framer-motion";

export default function SkillCard({ group, index }) {
  return (
    <motion.article
      className="skill-card glass-panel p-6"
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.6, delay: index * 0.06 }}
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-display text-xl font-semibold text-white">{group.title}</h3>
        <span className="rounded-full border border-mint/20 bg-mint/8 px-3 py-1 text-xs text-mint">
          {group.level}
        </span>
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <span key={skill} className="rounded-lg border border-white/10 bg-white/[0.06] px-3 py-2 text-sm text-white/75">
            {skill}
          </span>
        ))}
      </div>
    </motion.article>
  );
}
