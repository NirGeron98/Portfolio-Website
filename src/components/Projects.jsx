import SectionTitle from "./SectionTitle.jsx";
import ProjectCard from "./ProjectCard.jsx";
import { projects } from "../data/projects.js";

export default function Projects() {
  return (
    <section id="projects" className="section-wrap">
      <SectionTitle eyebrow="Projects" title="Backend, data, and product systems">
        Architecture-minded engineering across smart mobility, education platforms,
        backend APIs, and analytical data products.
      </SectionTitle>
      <div className="mx-auto grid max-w-7xl gap-7 px-5 md:px-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.name} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
