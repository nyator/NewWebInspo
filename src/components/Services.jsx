import { ArrowUpRight } from 'lucide-react';
import { services } from '../data/content';
import { SectionHeading } from './SectionHeading';
import { SectionShell } from './ui/SectionShell';

export function Services() {
  return (
    <SectionShell id="services" className="pt-20 md:pt-32" data-reveal>
      <SectionHeading title="Our Services">
        We offer a full suite of services designed to help our clients stand out and achieve their goals.
      </SectionHeading>
      <div className="mx-auto max-w-3xl border-t border-white/10">
        {services.map(({ body, title }, index) => (
          <a
            href="#contact-us"
            className="group flex gap-6 border-b border-white/10 px-0 py-7 transition hover:bg-orange-500/10 sm:items-center sm:justify-between sm:px-5"
            key={title}
          >
            <div className="sm:p-8">
              <span className="block bg-gradient-to-b from-orange-400 via-orange-800 to-zinc-950 bg-clip-text text-3xl font-black leading-none text-transparent">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-1 text-xl font-bold leading-tight text-white md:text-2xl">{title}</h3>
              <p className="mt-2 max-w-xl text-sm leading-7 text-zinc-400">{body}</p>
            </div>
            <ArrowUpRight
              size={30}
              className="mt-2 shrink-0 text-white drop-shadow transition group-hover:-translate-y-2 group-hover:translate-x-2 group-hover:rotate-12 group-hover:text-orange-400 sm:mt-0"
            />
          </a>
        ))}
      </div>
    </SectionShell>
  );
}
