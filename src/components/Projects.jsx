import ProjectCard from './ProjectCard.jsx';
import { projects } from '../data/portfolio.js';

export default function Projects() {
  return (
    <section
      id="projects"
      className="section-offset py-[96px]"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-[1152px] px-6 lg:px-0">
        <h2
          id="projects-heading"
          data-reveal
          className="text-[32px] font-extrabold leading-tight text-ink dark:text-white"
        >
          Selected Projects
        </h2>

        <div className="mt-[44px] grid min-w-0 gap-[28px] md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              delay={index * 70}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
