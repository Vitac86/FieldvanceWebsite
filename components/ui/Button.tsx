import Link from 'next/link';

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary';
};

const baseStyles =
  'inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors';

const variantStyles: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary: 'bg-brand-600 text-white hover:bg-brand-500',
  secondary: 'bg-slate-100 text-slate-900 hover:bg-slate-200',
};

export function Button({ children, href = '#', variant = 'primary' }: ButtonProps) {
  return (
    <Link href={href} className={`${baseStyles} ${variantStyles[variant]}`}>
      {children}
    </Link>
  );
}
