import { ArrowUpRight } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { SectionShell } from './ui/SectionShell';
import { StitchedCta } from './ui/StitchedCta';

export function CaseStudies() {
  return (
    <SectionShell id="case-studies" className="pt-20 md:pt-32" data-reveal>
      <SectionHeading title="Our Case Studies">
        Selected work built to make strategy, design, and technology move as one.
      </SectionHeading>
      <article className="grid items-center gap-8 rounded-lg border border-white/10 bg-white/[0.035] p-5 md:grid-cols-[1.08fr_0.92fr] md:gap-16 md:p-7">
        <div className="overflow-hidden rounded-lg bg-[#11101a]">
          <img
            className="h-full min-h-80 w-full object-cover transition duration-500 hover:scale-105 md:min-h-[420px]"
            src="/assets/case-orb.png"
            alt="Iridescent 3D brand asset"
          />
        </div>
        <div>
          <p className="text-xs font-extrabold uppercase text-orange-500">Featured launch</p>
          <h3 className="mt-2 text-4xl font-bold text-white md:text-5xl">Branding Design</h3>
          <p className="mt-6 max-w-md text-base leading-8 text-zinc-400">
            From branding and design to digital marketing and strategy, we built an identity system designed to help an
            ambitious brand grow with clarity across every touchpoint.
          </p>
          <StitchedCta className="mt-8" href="#contact-us" aria-label="View case study" variant="icon">
            <ArrowUpRight size={28} />
          </StitchedCta>
        </div>
      </article>
    </SectionShell>
  );
}
