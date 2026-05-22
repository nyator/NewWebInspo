import { ArrowUpRight } from 'lucide-react';
import { cn } from '../../lib/cn';

export function ArrowLink({ href, label = 'Explore More', className, iconSize = 14, children }) {
  return (
    <a
      href={href}
      className={cn(
        'group relative inline-flex items-center gap-1.5 text-sm font-bold text-white transition-colors after:absolute after:-bottom-1.5 after:left-0 after:right-0 after:h-px after:origin-left after:scale-x-0 after:bg-orange-500 after:transition hover:text-orange-400 hover:after:scale-x-100',
        className,
      )}
    >
      {children ?? label}
      <ArrowUpRight size={iconSize} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
    </a>
  );
}
