import SectionTitle from "./SectionTitle.jsx";
import SkillCard from "./SkillCard.jsx";
import { skillGroups } from "../data/skills.js";

export default function Skills() {
  return (
    <section id="skills" className="section-wrap">
      <SectionTitle eyebrow="Skills" title="A stack built around backend depth and product execution">
        No fake percentages, just practical categories that reflect where the tools are used.
      </SectionTitle>
      <div className="mx-auto grid max-w-7xl gap-5 px-5 md:grid-cols-2 md:px-8 xl:grid-cols-3">
        {skillGroups.map((group, index) => (
          <SkillCard key={group.title} group={group} index={index} />
        ))}
      </div>
    </section>
  );
}
