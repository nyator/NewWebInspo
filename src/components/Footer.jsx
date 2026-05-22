import { Instagram, Linkedin, Twitter } from 'lucide-react';
import { navItems } from '../data/content';

export function Footer() {
  return (
    <footer className="mx-auto w-[min(1340px,calc(100%_-_2.5rem))] py-10">
      <div className="grid gap-7 border-b border-white/10 pb-9 md:grid-cols-[0.7fr_1.2fr_1.6fr] md:items-center">
        <a href="#top" className="text-lg font-extrabold text-white">
          Forge.
        </a>
        <p className="max-w-75 text-sm leading-7 text-zinc-400">
          Solutions that drive success and propel your business forward.
        </p>
        <nav className="flex flex-wrap gap-7 md:justify-self-end" aria-label="Footer navigation">
          {navItems.map(({ label, href }) => (
            <a key={href} href={href} className="text-sm font-semibold text-zinc-400 transition hover:text-orange-400">
              {label}
            </a>
          ))}
        </nav>
      </div>
      <div className="grid gap-7 pt-7 md:grid-cols-[0.7fr_1.2fr_1.6fr] md:items-center">
        <small className="text-sm leading-7 text-zinc-400">Copyright © 2026 Forge Inc. All rights reserved.</small>
        <div className="flex gap-5 md:justify-self-center">
          <a href="#top" className="text-sm font-semibold text-zinc-400 transition hover:text-orange-400">
            Privacy Policy
          </a>
          <a href="#top" className="text-sm font-semibold text-zinc-400 transition hover:text-orange-400">
            Terms of Use
          </a>
        </div>
        <div className="flex gap-3 md:justify-self-end">
          <a
            className="grid size-9 place-items-center rounded-full border border-orange-500/40 text-orange-500 transition hover:-translate-y-1 hover:bg-orange-500/20"
            href="#top"
            aria-label="Instagram"
          >
            <Instagram size={18} />
          </a>
          <a
            className="grid size-9 place-items-center rounded-full border border-orange-500/40 text-orange-500 transition hover:-translate-y-1 hover:bg-orange-500/20"
            href="#top"
            aria-label="Twitter"
          >
            <Twitter size={18} />
          </a>
          <a
            className="grid size-9 place-items-center rounded-full border border-orange-500/40 text-orange-500 transition hover:-translate-y-1 hover:bg-orange-500/20"
            href="#top"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
