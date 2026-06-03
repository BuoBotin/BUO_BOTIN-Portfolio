import SkillCard from './SkillCard.jsx';
import { skillGroups } from '../data/portfolio.js';

export default function Skills() {
  return (
    <section
      id="skills"
      className="section-offset py-[96px]"
      aria-labelledby="skills-heading"
    >
      <div className="mx-auto max-w-[1152px] px-6 lg:px-0">
        <h2
          id="skills-heading"
          data-reveal
          className="text-[32px] font-extrabold leading-tight text-ink dark:text-white"
        >
          Technical Skills
        </h2>

        <div className="mt-[44px] grid gap-6 md:grid-cols-[1.11fr_.87fr_.64fr]">
          {skillGroups.map((group, index) => (
            <SkillCard key={group.title} group={group} delay={index * 70} />
          ))}
        </div>
      </div>
    </section>
  );
}
