import { ImageResponse } from 'next/og';

export const contentType = 'image/png';

export const size = {
  width: 180,
  height: 180,
};

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: 'center',
          background: '#0b162f',
          borderRadius: 40,
          display: 'flex',
          height: '100%',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        <div
          style={{
            color: '#19d8b5',
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: 112,
            fontWeight: 800,
            lineHeight: 1,
            marginTop: -8,
          }}
        >
          F
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
