import { motion } from "framer-motion";

export default function SectionTitle({ eyebrow, title, children }) {
  return (
    <motion.div
      className="mx-auto mb-10 max-w-3xl text-center md:mb-14"
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-cyan">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-semibold text-white md:text-5xl">
        {title}
      </h2>
      {children && (
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/70">
          {children}
        </p>
      )}
    </motion.div>
  );
}
