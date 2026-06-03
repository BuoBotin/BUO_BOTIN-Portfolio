import { FaEnvelope, FaGithub, FaPhone } from 'react-icons/fa6';
import Logo from './Logo.jsx';
import { contact } from '../data/portfolio.js';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-canvas py-[64px] dark:border-[#273449] dark:bg-[#090d17]">
      <div className="mx-auto flex max-w-[1152px] flex-col gap-8 px-6 text-[12px] text-slate-700 dark:text-slate-300 md:flex-row md:items-center md:justify-between lg:px-0">
        <Logo />

        <div className="flex flex-col gap-5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-[28px]">
          <a
            href={`mailto:${contact.email}`}
            className="inline-flex items-center gap-2 transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-canvas dark:hover:text-[#aaa7ff] dark:focus-visible:ring-offset-[#0b111d]"
          >
            <FaEnvelope aria-hidden="true" className="h-3 w-3" />
            {contact.email}
          </a>
          <a
            href={`tel:${contact.phone.replace(/\s/g, '')}`}
            className="inline-flex items-center gap-2 transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-canvas dark:hover:text-[#aaa7ff] dark:focus-visible:ring-offset-[#0b111d]"
          >
            <FaPhone aria-hidden="true" className="h-3 w-3" />
            {contact.phone}
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-canvas dark:hover:text-[#aaa7ff] dark:focus-visible:ring-offset-[#0b111d]"
          >
            <FaGithub aria-hidden="true" className="h-3 w-3" />
            {contact.github}
          </a>
        </div>

        <p className="text-[12px] text-slate-700 dark:text-slate-400">
          © 2026 Botin.Dev. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
