import { workCards } from '../data/content';
import { SectionHeading } from './SectionHeading';
import { ArrowLink } from './ui/ArrowLink';
import { SectionShell } from './ui/SectionShell';

export function HowWeWork() {
  return (
    <SectionShell className="pt-20 md:pt-32" data-reveal>
      <SectionHeading title="How We Work">
        We offer a full suite of services designed to help our clients stand out and achieve their goals.
      </SectionHeading>
      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
        {workCards.map(({ body, icon: Icon, title }) => (
          <article
            className="rounded-[28px] border border-white/10 bg-[#15141f] px-8 py-10 text-center shadow-2xl transition hover:-translate-y-1.5 hover:border-orange-500/40 hover:shadow-orange-500/10 md:min-h-75 md:px-11 md:py-12"
            key={title}
          >
            <span className="mx-auto grid size-16 place-items-center rounded-full bg-[#11111a] text-orange-500 shadow-xl">
              <Icon size={24} />
            </span>
            <h3 className="mt-8 text-2xl font-medium leading-tight text-white md:text-3xl">{title}</h3>
            <p className="mx-auto mt-5 max-w-72 text-sm leading-7 text-zinc-400 md:text-base">{body}</p>
            <ArrowLink href="#services" className="mt-7" />
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
