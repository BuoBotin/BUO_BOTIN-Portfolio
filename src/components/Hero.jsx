import profileImage from '../../profile.jpg';

export default function Hero() {
  return (
    <section
      id="home"
      className="section-offset flex min-h-[820px] items-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto grid w-full max-w-[1152px] items-center gap-14 px-6 py-16 lg:grid-cols-[1.04fr_.96fr] lg:px-0 lg:py-0">
        <div data-reveal className="max-w-[610px]">
          <p className="mb-[20px] text-[13px] font-semibold uppercase leading-none tracking-[0.08em] text-primary dark:text-[#8f8bff]">
            HI, I AM BUO BOTIN
          </p>
          <h1
            id="hero-heading"
            className="max-w-[620px] text-[34px] font-extrabold leading-[1.08] text-ink sm:text-[42px] md:text-[56px] dark:text-white"
          >
            Web Development Internship Applicant
          </h1>
          <p className="mt-[30px] max-w-[640px] text-[17px] leading-[1.72] text-muted dark:text-slate-300">
            I am an enthusiastic Computer Science student focused on building
            clean, scalable, and modern web applications. Eager to contribute my
            skills and learn in a professional engineering environment.
          </p>
          <div className="mt-[30px] flex flex-wrap gap-4">
            <a
              href="#projects"
            className="inline-flex h-[50px] min-w-[152px] items-center justify-center rounded-[6px] border border-primary bg-primary px-7 text-[13px] font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-canvas dark:border-[#625cff] dark:bg-[#625cff] dark:hover:bg-[#7a75ff] dark:hover:shadow-indigo-400/20 dark:focus-visible:ring-offset-[#090d17]"
            >
              View Projects
            </a>
            <a
              href="/BUO_BOTIN_CV.pdf"
              download
              className="inline-flex h-[50px] min-w-[152px] items-center justify-center rounded-[6px] border border-primary bg-transparent px-7 text-[13px] font-semibold text-primary transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-canvas dark:border-[#625cff] dark:text-[#aaa7ff] dark:hover:bg-[#625cff] dark:hover:text-white dark:focus-visible:ring-offset-[#090d17]"
            >
              Download CV
            </a>
          </div>
        </div>

        <div
          data-reveal
          className="flex justify-center lg:justify-end"
          style={{ transitionDelay: '110ms' }}
        >
          <div className="h-[320px] w-[320px] rounded-full border-[5px] border-white bg-slate-200 shadow-portrait dark:border-[#273449] dark:bg-[#111827] dark:shadow-[0_30px_70px_rgba(0,0,0,0.55)] sm:h-[370px] sm:w-[370px] md:h-[420px] md:w-[420px]">
            <img
              src={profileImage}
              alt="Buo Botin portrait"
              className="h-full w-full rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
