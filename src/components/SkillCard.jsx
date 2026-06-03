import { FaCode, FaDatabase, FaScrewdriverWrench } from 'react-icons/fa6';

const iconMap = {
  frontend: {
    Icon: FaCode,
    className: 'text-primary dark:text-[#8f8bff]',
  },
  backend: {
    Icon: FaDatabase,
    className: 'text-emerald-500 dark:text-[#0ee6b2]',
  },
  tools: {
    Icon: FaScrewdriverWrench,
    className: 'text-red-600 dark:text-rose-400',
  },
};

export default function SkillCard({ group, delay = 0 }) {
  const { Icon, className } = iconMap[group.icon];

  return (
    <article
      data-reveal
      className="min-h-[210px] min-w-0 rounded-[8px] border border-slate-200 bg-white px-[38px] py-[36px] shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/60 dark:border-[#273449] dark:bg-[#111827] dark:hover:border-[#3a4962] dark:hover:shadow-[0_18px_44px_rgba(0,0,0,0.32)]"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-center gap-[13px]">
        <Icon aria-hidden="true" className={`h-[20px] w-[20px] ${className}`} />
        <h3 className="text-[22px] font-semibold leading-none text-ink dark:text-slate-50">
          {group.title}
        </h3>
      </div>

      <div className="mt-[34px] flex flex-wrap gap-[10px]">
        {group.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-[5px] bg-[#e8f0ff] px-[13px] py-[8px] text-[12px] font-medium leading-none text-slate-700 dark:border dark:border-indigo-300/[0.12] dark:bg-indigo-400/[0.10] dark:text-indigo-100"
          >
            {skill}
          </span>
        ))}
      </div>
    </article>
  );
}
