import { cn } from '../../lib/cn';

export function SectionShell({ as: Component = 'section', className, children, ...props }) {
  return (
    <Component className={cn('mx-auto w-[min(1340px,calc(100%_-_2.5rem))]', className)} {...props}>
      {children}
    </Component>
  );
}
