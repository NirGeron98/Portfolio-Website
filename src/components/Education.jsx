import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import SectionTitle from "./SectionTitle.jsx";
import { personal } from "../data/personal.js";

export default function Education() {
  return (
    <section className="section-wrap">
      <SectionTitle eyebrow="Education" title="Academic foundation with honors" />
      <div className="mx-auto grid max-w-5xl gap-5 px-5 md:grid-cols-2 md:px-8">
        {personal.education.map((item, index) => (
          <motion.article
            key={item.degree}
            className="glass-panel p-7"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
          >
            <GraduationCap className="text-gold" size={30} />
            <h3 className="mt-5 font-display text-2xl font-semibold text-white">{item.degree}</h3>
            <p className="mt-3 text-cyan">{item.school}</p>
            <p className="mt-4 text-sm text-white/58">{item.period}</p>
            {item.detail && <p className="mt-4 font-semibold text-mint">{item.detail}</p>}
          </motion.article>
        ))}
      </div>
    </section>
  );
}
