import { useMemo } from 'react';
import { partnerIcon, partners } from '../data/content';

export function PartnerTicker() {
  const repeatedPartners = useMemo(() => [...partners, ...partners, ...partners], []);
  const PartnerIcon = partnerIcon;

  return (
    <section className="mx-auto w-full max-w-7xl overflow-hidden " aria-label="Partner logos" data-reveal>
      <p className="mb-6 text-center text-xs font-bold text-zinc-500">Join 250+ companies already growing</p>
      <div className="[mask-image:linear-gradient(90deg,transparent,black_14%,black_86%,transparent)]">
        <div className="flex w-max animate-ticker gap-9">
          {repeatedPartners.map((partner, index) => (
            <span key={`${partner}-${index}`} className="inline-flex items-center gap-2 whitespace-nowrap font-extrabold text-zinc-500">
              <PartnerIcon size={18} />
              {partner}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
