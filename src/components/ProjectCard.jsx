import { FaArrowUpRightFromSquare, FaGithub } from 'react-icons/fa6';

export default function ProjectCard({ project, delay = 0 }) {
  return (
    <article
      data-reveal
      className="group flex min-h-[510px] min-w-0 flex-col overflow-hidden rounded-[8px] border border-slate-200 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-300/50 dark:border-[#273449] dark:bg-[#111827] dark:hover:border-[#3a4962] dark:hover:shadow-[0_24px_60px_rgba(0,0,0,0.38)]"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="h-[220px] overflow-hidden bg-slate-100 dark:bg-[#0b1220]">
        <img
          src={`${import.meta.env.BASE_URL}${project.image.replace(/^\//, '')}`}
          alt={project.alt}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.035]"
          loading="lazy"
        />
      </div>

      <div className="flex flex-1 flex-col px-[28px] pb-[28px] pt-[30px]">
        <h3 className="break-words text-[22px] font-bold leading-[1.16] text-ink dark:text-slate-50">
          {project.title}
        </h3>
        <p className="mt-[18px] break-words text-[14px] leading-[1.6] text-muted dark:text-slate-300">
          {project.description}
        </p>

        <div className="mt-auto pt-[24px]">
          <div className="mb-[18px] flex flex-wrap gap-[8px]">
            {project.tech.map((item) => (
              <span
                key={item}
                className="rounded-[4px] bg-[#e8f0ff] px-[11px] py-[7px] text-[11px] font-medium leading-none text-slate-700 dark:border dark:border-indigo-300/[0.12] dark:bg-indigo-400/[0.10] dark:text-indigo-100"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-[10px]">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-[36px] min-w-0 flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-[5px] border border-slate-300 px-3 text-[12px] font-semibold text-ink transition-colors hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-[#334158] dark:text-slate-100 dark:hover:border-[#8f8bff] dark:hover:text-[#aaa7ff] dark:focus-visible:ring-offset-[#111827]"
                aria-label={`Open GitHub repository for ${project.title}`}
              >
                <FaGithub aria-hidden="true" className="h-3 w-3" />
                GitHub
              </a>
            )}
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-[36px] min-w-0 flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-[5px] border border-primary bg-primary px-3 text-[12px] font-semibold text-white transition-colors hover:bg-[#2922d4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-[#625cff] dark:bg-[#625cff] dark:hover:bg-[#7a75ff] dark:focus-visible:ring-offset-[#111827]"
                aria-label={`Open live demo for ${project.title}`}
              >
                <FaArrowUpRightFromSquare
                  aria-hidden="true"
                  className="h-3 w-3"
                />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
