'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

import { type Locale } from '@/config/i18n';
import { type FooterContent } from '@/content/types';

const COOKIE_NOTICE_STORAGE_KEY = 'fieldvance-cookie-notice-accepted';

export function CookieNotice({ lang, content }: { lang: Locale; content: FooterContent }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasAccepted = window.localStorage.getItem(COOKIE_NOTICE_STORAGE_KEY) === 'true';

    if (!hasAccepted) {
      setIsVisible(true);
    }
  }, []);

  function handleAccept() {
    window.localStorage.setItem(COOKIE_NOTICE_STORAGE_KEY, 'true');
    setIsVisible(false);
  }

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-xs rounded-lg border border-border-soft bg-white/95 p-3 text-xs text-slate-600 shadow-[0_4px_12px_rgba(15,23,42,0.08)] backdrop-blur-sm sm:bottom-5 sm:right-5 sm:max-w-sm">
      <p className="leading-relaxed">
        {content.cookieNotice.text}{' '}
        <Link href={`/${lang}/privacy`} className="font-medium text-slate-700 underline-offset-2 transition hover:text-accent-strong hover:underline">
          {content.privacyLabel}
        </Link>
        .
      </p>
      <button
        type="button"
        onClick={handleAccept}
        className="mt-2 inline-flex items-center rounded-md border border-border-soft bg-white px-2.5 py-1 text-xs font-semibold text-slate-700 transition hover:border-accent-strong hover:text-accent-strong"
      >
        {content.cookieNotice.acceptLabel}
      </button>
    </div>
  );
}
