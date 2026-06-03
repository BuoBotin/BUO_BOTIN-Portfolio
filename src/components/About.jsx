export default function About() {
  return (
    <section
      id="about"
      className="section-offset py-[96px]"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto grid max-w-[1152px] gap-10 px-6 md:grid-cols-[310px_1fr] md:gap-[72px] lg:px-0">
        <div data-reveal>
          <h2
            id="about-heading"
            className="text-[30px] font-extrabold leading-tight text-ink dark:text-slate-50"
          >
            Background
          </h2>
          <p className="mt-[32px] text-[15px] leading-[1.75] text-muted dark:text-slate-300">
            Currently pursuing my degree and actively building full-stack
            applications. My goal is to craft user experiences that are both
            beautiful and performant.
          </p>
        </div>

        <article
          data-reveal
          className="min-h-[320px] rounded-[8px] border border-slate-200 bg-white shadow-card dark:border-[#273449] dark:bg-[#111827] dark:shadow-[0_18px_48px_rgba(0,0,0,0.24)]"
          style={{ transitionDelay: '80ms' }}
        >
          <header className="border-b border-slate-200 px-[36px] py-[34px] dark:border-[#273449]">
            <h3 className="text-[24px] font-semibold leading-none text-ink dark:text-slate-50">
              Education
            </h3>
          </header>
          <div className="px-[36px] py-[38px]">
            <div className="border-l-2 border-primary pl-[22px] dark:border-[#7c77ff]">
              <p className="mb-[16px] text-[13px] font-bold leading-none text-primary dark:text-[#9b97ff]">
                2023 - 2026
              </p>
              <h4 className="text-[15px] font-bold leading-tight text-ink dark:text-slate-50">
                Bachelor of Computer Science
              </h4>
              <p className="mt-2 text-[14px] leading-none text-slate-700 dark:text-slate-300">
                Asia Euro University
              </p>
              <p className="mt-[20px] max-w-[580px] text-[14px] leading-[1.65] text-muted dark:text-slate-300">
                Focus on scalable web applications, software engineering
                principles, and modern framework architectures.
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
