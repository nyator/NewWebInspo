import { testimonials } from '../data/content';
import { SectionHeading } from './SectionHeading';
import { SectionShell } from './ui/SectionShell';

function getInitials(name) {
  return name
    .split(' ')
    .map(part => part[0])
    .join('');
}

export function Testimonials() {
  return (
    <SectionShell id="testimonials" className="pt-20 md:pt-32" data-reveal>
      <SectionHeading title="What Our Client Says">
        Creative partnerships shaped around clarity, speed, and measurable outcomes.
      </SectionHeading>
      <div className="grid overflow-hidden rounded-lg border border-white/10 md:grid-cols-3">
        {testimonials.map(({ name, quote, role }) => (
          <article
            className="min-h-60 border-b border-white/10 bg-white/[0.015] p-8 transition hover:-translate-y-1.5 hover:border-orange-500/40 hover:shadow-2xl hover:shadow-orange-500/10 md:border-r md:[&:nth-child(3n)]:border-r-0 md:[&:nth-last-child(-n+3)]:border-b-0"
            key={name}
          >
            <p className="text-base leading-7 text-zinc-400">{quote}</p>
            <div className="mt-7 flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-full border-2 border-white/80 bg-gradient-to-br from-yellow-100 to-green-100 text-xs font-extrabold text-zinc-950">
                {getInitials(name)}
              </span>
              <div>
                <strong className="block text-sm font-bold text-orange-500">{name}</strong>
                <small className="mt-0.5 block text-xs font-bold text-zinc-500">{role}</small>
              </div>
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
