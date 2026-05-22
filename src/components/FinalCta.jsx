import { Brain } from 'lucide-react';
import { SectionShell } from './ui/SectionShell';

export function FinalCta() {
  return (
    <SectionShell id="contact-us" className="relative pb-28 pt-20 md:pt-32" data-reveal>
      <div className="relative mx-auto grid min-h-75 w-full max-w-5xl place-items-center overflow-hidden rounded-3xl border border-white/10 bg-[#12111b] px-7 py-12 shadow-2xl md:min-h-96 md:px-18 md:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.08)_0_1px,transparent_1px_100%)] bg-[length:92px_100%] opacity-70" />
        <Brain className="absolute bottom-[17%] right-[11%] z-[2] rotate-6 text-orange-500 opacity-70" size={48} />
        <h2 className="relative z-[2] max-w-4xl text-center text-4xl font-medium uppercase leading-tight text-white md:text-6xl">
          From branding and design to <span className="text-orange-500 font-bold">innovation and strategy</span>, we offer a full
          suite of services
        </h2>
      </div>
    </SectionShell>
  );
}
