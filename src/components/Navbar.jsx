import { useState } from 'react';
import { FaBars, FaMoon, FaSun, FaXmark } from 'react-icons/fa6';
import Logo from './Logo.jsx';

export default function Navbar({
  activeSection,
  navLinks,
  theme,
  onToggleTheme,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 h-[72px] border-b border-slate-200/75 bg-white/95 backdrop-blur dark:border-[#273449] dark:bg-[#0c1220] dark:shadow-[0_12px_34px_rgba(0,0,0,0.28)]">
      <div className="mx-auto flex h-full max-w-[1152px] items-center justify-between px-6 lg:px-0">
        <Logo />

        <nav
          className="hidden items-center gap-[42px] md:flex"
          aria-label="Primary navigation"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;

            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`relative py-2 text-[11px] font-medium transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-white dark:hover:text-[#9b97ff] dark:focus-visible:ring-offset-[#0c1220] ${
                  isActive
                    ? 'text-primary after:absolute after:bottom-1 after:left-0 after:h-px after:w-full after:bg-primary dark:text-[#9b97ff] dark:after:bg-[#9b97ff]'
                    : 'text-slate-900 dark:text-slate-300'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="grid h-9 w-9 place-items-center rounded-full text-ink transition-colors hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:text-amber-200 dark:hover:bg-white/[0.08] dark:focus-visible:ring-offset-[#0c1220]"
            aria-label={
              theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
            }
            onClick={onToggleTheme}
          >
            {theme === 'dark' ? (
              <FaSun aria-hidden="true" className="h-4 w-4" />
            ) : (
              <FaMoon aria-hidden="true" className="h-4 w-4" />
            )}
          </button>

          <button
            type="button"
            className="grid h-9 w-9 place-items-center rounded-full text-ink transition-colors hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:text-slate-100 dark:hover:bg-white/[0.08] dark:focus-visible:ring-offset-[#0c1220] md:hidden"
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((open) => !open)}
          >
            {isOpen ? (
              <FaXmark aria-hidden="true" className="h-5 w-5" />
            ) : (
              <FaBars aria-hidden="true" className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      <nav
        className={`border-b border-slate-200 bg-white px-6 py-4 shadow-sm transition-[opacity,transform] duration-200 dark:border-[#273449] dark:bg-[#0c1220] md:hidden ${
          isOpen
            ? 'pointer-events-auto translate-y-0 opacity-100'
            : 'pointer-events-none -translate-y-2 opacity-0'
        }`}
        aria-label="Mobile navigation"
      >
        <div className="mx-auto flex max-w-[1035px] flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`rounded-[6px] px-3 py-3 text-sm font-semibold transition-colors hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary dark:hover:bg-white/[0.08] ${
                activeSection === link.id
                  ? 'bg-indigo-50 text-primary dark:bg-indigo-500/[0.12] dark:text-[#aaa7ff]'
                  : 'text-slate-700 dark:text-slate-200'
              }`}
              onClick={handleLinkClick}
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
