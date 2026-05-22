import { cn } from '../../lib/cn';

const surface =
  'relative isolate inline-grid overflow-hidden rounded-full text-white shadow-[inset_0_2px_4px_rgba(255,255,255,0.28),inset_0_-10px_18px_rgba(99,18,0,0.34),0_3px_0_#8f2608,0_18px_45px_rgba(255,90,31,0.34)] transition duration-200 before:pointer-events-none before:absolute before:inset-[7px] before:z-[2] before:rounded-full before:border before:border-dashed before:border-orange-100/60 before:shadow-[inset_0_0_0_1px_rgba(132,28,0,0.22),0_0_0_1px_rgba(255,255,255,0.07)] after:pointer-events-none after:absolute after:inset-0 after:z-[1] after:rounded-full after:bg-[linear-gradient(135deg,rgba(255,255,255,0.18),transparent_42%),radial-gradient(circle_at_52%_58%,transparent_44%,rgba(0,0,0,0.24)_100%)] after:mix-blend-overlay hover:scale-[1.07] hover:shadow-[inset_0_2px_4px_rgba(255,255,255,0.32),inset_0_-8px_16px_rgba(99,18,0,0.3),0_2px_0_#8f2608,0_24px_58px_rgba(255,90,31,0.44)] active:translate-y-0.5 active:scale-[1.02]';

const texture =
  'bg-[radial-gradient(circle_at_35%_24%,rgba(255,255,255,0.34),transparent_18%),radial-gradient(circle_at_70%_78%,rgba(112,25,0,0.34),transparent_34%),repeating-linear-gradient(38deg,rgba(255,255,255,0.08)_0_1px,transparent_1px_4px),repeating-linear-gradient(128deg,rgba(0,0,0,0.11)_0_1px,transparent_1px_5px),linear-gradient(145deg,#ff8a1f_0%,#ff5a1f_46%,#d93a09_100%)]';

const sizes = {
  badge: 'size-20 -rotate-[10deg] place-items-center text-center font-extrabold hover:rotate-0 active:-rotate-3 sm:size-24',
  icon: 'size-[78px] place-items-center',
};

export function StitchedCta({ className, children, href, variant = 'badge', ...props }) {
  return (
    <a href={href} className={cn(surface, texture, sizes[variant], className)} {...props}>
      <span className="relative z-[3] drop-shadow-[0_1px_1px_rgba(76,14,0,0.55)]">{children}</span>
    </a>
  );
}
