import clsx from 'clsx';

interface TypographyProsp {
  children: React.ReactNode;
  className?: string;
  type: 'h1' | 'h2' | 'h3' | 'p';
}

export default function Typography({
  children,
  className,
  type,
}: TypographyProsp) {
  const Component = type;
  const defaultClassName = {
    h1: 'text-4xl font-extrabold tracking-tight lg:text-5xl',
    h2: 'text-3xl font-semibold tracking-tight lg:text-4xl',
    h3: 'text-2xl font-semibold tracking-tight lg:text-3xl',
    p: 'leading-7',
  };

  return (
    <Component className={clsx(className, defaultClassName[type])}>
      {children}
    </Component>
  );
}
