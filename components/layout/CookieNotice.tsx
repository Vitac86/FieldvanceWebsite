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
    <div className="fixed inset-x-3 bottom-3 z-50 mx-auto w-auto max-w-[17.5rem] rounded-md border border-border-soft bg-white/92 px-2.5 py-2 text-[11px] text-slate-600 shadow-[0_4px_10px_rgba(15,23,42,0.07)] backdrop-blur-sm sm:inset-x-auto sm:bottom-4 sm:right-4 sm:mx-0 sm:max-w-[16.5rem]">
      <p className="leading-snug">
        {content.cookieNotice.text}{' '}
        <Link href={`/${lang}/privacy`} className="font-medium text-slate-700 underline-offset-2 transition hover:text-accent-strong hover:underline">
          {content.privacyLabel}
        </Link>
        .
      </p>
      <button
        type="button"
        onClick={handleAccept}
        className="mt-1.5 inline-flex items-center rounded-md border border-border-soft bg-white px-2 py-0.5 text-[11px] font-semibold text-slate-700 transition hover:border-accent-strong hover:text-accent-strong"
      >
        {content.cookieNotice.acceptLabel}
      </button>
    </div>
  );
}
