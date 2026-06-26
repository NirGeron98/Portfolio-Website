import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, BriefcaseBusiness } from "lucide-react";

export default function ExperienceCard({ item, index }) {
  const [open, setOpen] = useState(index === 0);

  return (
    <motion.article
      className="timeline-card glass-panel p-6 md:p-8"
      initial={{ opacity: 0, x: index % 2 ? 28 : -28 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.65 }}
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan/25 bg-cyan/10 text-cyan">
            <BriefcaseBusiness size={22} />
          </div>
          <h3 className="font-display text-2xl font-semibold text-white">{item.title}</h3>
          <p className="mt-1 text-lg text-cyan">{item.company}</p>
        </div>
        <span className="rounded-full border border-white/10 bg-white/[0.07] px-4 py-2 text-sm text-white/70">
          {item.period}
        </span>
      </div>
      <p className="mt-5 leading-8 text-white/70">{item.description}</p>
      <button
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-mint transition hover:text-white"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
      >
        Key highlights
        <ChevronDown size={17} className={`transition ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <ul className="mt-5 grid gap-3 text-sm leading-7 text-white/70">
          {item.highlights.map((highlight) => (
            <li key={highlight} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan shadow-[0_0_12px_#55e6ff]" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      )}
    </motion.article>
  );
}
