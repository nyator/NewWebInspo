import { cn } from '../lib/cn';

export function SectionHeading({ title, children, className }) {
  return (
    <div className={cn('mx-auto mb-10 max-w-2xl text-center md:mb-16', className)}>
      <h2 className="text-5xl font-bold leading-none text-white md:text-7xl">{title}</h2>
      <p className="mt-4 text-sm leading-7 text-zinc-400 md:text-base">{children}</p>
    </div>
  );
}
