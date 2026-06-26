import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle.jsx";
import { personal } from "../data/personal.js";

export default function About() {
  return (
    <section id="about" className="section-wrap">
      <SectionTitle eyebrow="About" title="Engineering for systems that need to last">
        A practical mix of backend discipline, data-platform thinking, and product ownership.
      </SectionTitle>
      <div className="mx-auto grid max-w-7xl gap-8 px-5 md:px-8 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          className="glass-panel p-7 md:p-9"
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-lg leading-9 text-white/75">
            I am a data-oriented Software Engineer at KPMG and an M.Sc. Computer
            Science student at Reichman University. My work focuses on backend
            development, scalable data platforms, Elasticsearch-based search systems,
            observability, and production-grade web applications.
          </p>
          <p className="mt-6 text-lg leading-9 text-white/75">
            I enjoy taking complex business or technical problems, breaking them down
            into clean architecture, and building reliable systems that are
            maintainable, scalable, and useful in real-world environments.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {["KPMG Software Engineer", "Cloud & Search", "Product Builder", "Data-Oriented"].map(
              (item) => (
                <span key={item} className="chip">
                  {item}
                </span>
              )
            )}
          </div>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2">
          {personal.stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="glass-panel stat-card p-6"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
            >
              <p className="text-sm uppercase tracking-[0.22em] text-cyan/80">{stat.label}</p>
              <h3 className="mt-4 font-display text-2xl font-semibold text-white">{stat.value}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
