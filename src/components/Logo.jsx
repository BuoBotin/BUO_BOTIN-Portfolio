export default function Logo({ className = '' }) {
  return (
    <a
      href="#home"
      className={`inline-flex items-center text-[16px] font-bold leading-none outline-none transition-opacity hover:opacity-80 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#0c1220] ${className}`}
      aria-label="Botin.Dev home"
    >
      <span className="text-primary dark:text-[#8f8bff]">Botin</span>
      <span className="text-accent dark:text-[#0ee6b2]">.Dev</span>
    </a>
  );
}
