import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa6';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 650);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <button
      type="button"
      className={`fixed bottom-7 right-7 z-40 grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white text-primary shadow-lg shadow-slate-300/40 transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-canvas dark:border-[#273449] dark:bg-[#111827] dark:text-[#8f8bff] dark:shadow-[0_18px_42px_rgba(0,0,0,0.35)] dark:hover:border-[#8f8bff] dark:hover:text-[#aaa7ff] dark:focus-visible:ring-offset-[#090d17] ${
        isVisible
          ? 'pointer-events-auto translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-3 opacity-0'
      }`}
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <FaArrowUp aria-hidden="true" className="h-4 w-4" />
    </button>
  );
}
