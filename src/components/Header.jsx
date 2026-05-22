import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navItems } from '../data/content';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('nav-open', isOpen);

    return () => document.body.classList.remove('nav-open');
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 flex min-h-19 w-full items-center justify-between border-b border-white/10 bg-[#0b0b12]/80 px-5 backdrop-blur-xl md:px-10">
      <a href="#top" className="text-lg font-extrabold text-white" aria-label="Forge home">
        Forge.
      </a>
      <nav
        className={`fixed inset-x-3 top-20 grid rounded-lg border border-white/10 bg-[#0e0d16] p-4 shadow-2xl transition md:static md:flex md:items-center md:gap-7 md:border-0 md:bg-transparent md:p-0 md:shadow-none ${
          isOpen
            ? 'translate-y-0 opacity-100'
            : 'pointer-events-none -translate-y-5 opacity-0 md:pointer-events-auto md:translate-y-0 md:opacity-100'
        }`}
        aria-label="Primary navigation"
      >
        {navItems.map(({ label, href }) => (
          <a
            key={href}
            href={href}
            className="border-b border-white/10 px-3 py-4 text-sm font-semibold text-zinc-400 transition hover:text-orange-400 last:border-b-0 md:border-0 md:p-0"
            onClick={() => setIsOpen(false)}
          >
            {label}
          </a>
        ))}
      </nav>
      <button
        className="grid size-11 place-items-center rounded-lg border border-white/10 bg-white/5 text-white md:hidden"
        type="button"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
        onClick={() => setIsOpen(current => !current)}
      >
        {isOpen ? <X size={22} /> : <Menu size={22} />}
      </button>
    </header>
  );
}
