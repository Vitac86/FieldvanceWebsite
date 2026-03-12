import Link from 'next/link';

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
};

const baseStyles =
  'inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-150';

const variantStyles: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary:
    'bg-accent-primary text-surface-dark hover:bg-accent-strong shadow-[0_6px_16px_rgba(15,191,159,0.32)] hover:shadow-[0_8px_20px_rgba(15,191,159,0.4)]',
  secondary: 'border border-border-soft bg-white text-slate-900 hover:border-accent-primary hover:text-accent-strong',
  ghost: 'text-slate-700 hover:text-slate-900',
};

export function Button({ children, href = '#', variant = 'primary' }: ButtonProps) {
  return (
    <Link href={href} className={`${baseStyles} ${variantStyles[variant]}`}>
      {children}
    </Link>
  );
}
