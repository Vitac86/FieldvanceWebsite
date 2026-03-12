import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

import { ImageResponse } from 'next/og';
import { notFound } from 'next/navigation';

import { isSupportedLocale, type Locale } from '@/config/i18n';
import { localeMetadata } from '@/config/site';

export const contentType = 'image/png';

export const size = {
  width: 1200,
  height: 630,
};

export default async function OpenGraphImage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;

  if (!isSupportedLocale(lang)) {
    notFound();
  }

  const locale = lang as Locale;
  const [logoSvg, productScreenshot] = await Promise.all([
    readFile(join(process.cwd(), 'public/images/branding/feildance_logo.svg'), 'utf-8'),
    readFile(join(process.cwd(), '4._ai_pre_dispatch_brief-code.png')),
  ]);

  const logoSrc = `data:image/svg+xml;base64,${Buffer.from(logoSvg).toString('base64')}`;
  const screenshotSrc = `data:image/png;base64,${productScreenshot.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          alignItems: 'stretch',
          background: '#f3f6fb',
          color: '#0b162f',
          display: 'flex',
          fontFamily: 'Inter, system-ui, sans-serif',
          height: '100%',
          padding: '44px',
          width: '100%',
        }}
      >
        <div
          style={{
            background: '#ffffff',
            border: '1px solid #dbe5ee',
            borderRadius: '30px',
            boxShadow: '0 16px 50px rgba(11, 22, 47, 0.09)',
            display: 'flex',
            gap: '36px',
            height: '100%',
            padding: '34px',
            width: '100%',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
            <img src={logoSrc} alt="Fieldvance logo" style={{ height: '84px', objectFit: 'contain', width: '190px' }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <div style={{ color: '#0fbf9f', fontSize: 24, fontWeight: 700, letterSpacing: '-0.01em' }}>
                HVAC & Plumbing AI Workflow
              </div>
              <div style={{ fontSize: 56, fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.08, maxWidth: '590px' }}>
                {localeMetadata[locale].ogMessage}
              </div>
              <div style={{ color: '#405064', fontSize: 28, lineHeight: 1.35, maxWidth: '600px' }}>
                Mobile-first guidance, validated evidence capture, and faster service reporting.
              </div>
            </div>
          </div>

          <div
            style={{
              alignItems: 'flex-start',
              background: '#e9fcf7',
              border: '1px solid #c9efe7',
              borderRadius: '26px',
              display: 'flex',
              justifyContent: 'center',
              minWidth: '330px',
              overflow: 'hidden',
              padding: '14px',
            }}
          >
            <img
              src={screenshotSrc}
              alt="Fieldvance product screenshot"
              style={{
                border: '1px solid #dbe5ee',
                borderRadius: '20px',
                boxShadow: '0 10px 24px rgba(11, 22, 47, 0.12)',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'top center',
                width: '100%',
              }}
            />
          </div>
        </div>
      </div>
    ),
    size,
  );
}
