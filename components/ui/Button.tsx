import Link from 'next/link';

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
};

const baseStyles =
  'inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-semibold transition-all duration-150';

const variantStyles: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary: 'bg-cyan-600 text-white hover:bg-cyan-500 shadow-sm shadow-cyan-900/20',
  secondary: 'border border-slate-300 bg-white text-slate-900 hover:border-cyan-600 hover:text-cyan-700',
  ghost: 'text-slate-700 hover:text-slate-900',
};

export function Button({ children, href = '#', variant = 'primary' }: ButtonProps) {
  return (
    <Link href={href} className={`${baseStyles} ${variantStyles[variant]}`}>
      {children}
    </Link>
  );
}
