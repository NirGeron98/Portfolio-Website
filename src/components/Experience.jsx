import SectionTitle from "./SectionTitle.jsx";
import ExperienceCard from "./ExperienceCard.jsx";
import { experience } from "../data/experience.js";

export default function Experience() {
  return (
    <section id="experience" className="section-wrap">
      <SectionTitle eyebrow="Experience" title="Production systems, data platforms, and product delivery">
        A timeline of engineering roles across enterprise systems, full-stack product work,
        and academic precision.
      </SectionTitle>
      <div className="timeline mx-auto max-w-5xl px-5 md:px-8">
        {experience.map((item, index) => (
          <ExperienceCard key={`${item.company}-${item.title}`} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}
