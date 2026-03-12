import Image from 'next/image';
import Link from 'next/link';

import { type Locale } from '@/config/i18n';

type LogoProps = {
  lang: Locale;
  className?: string;
  priority?: boolean;
};

export function Logo({ lang, className, priority = false }: LogoProps) {
  return (
    <Link
      href={`/${lang}`}
      aria-label="Fieldvance home"
      className={className ?? 'inline-flex'}
    >
      <Image
        src="/images/branding/feildance_logo.svg"
        alt="Fieldvance logo"
        width={176}
        height={96}
        priority={priority}
        className="h-auto w-full max-w-[176px]"
      />
    </Link>
  );
}
