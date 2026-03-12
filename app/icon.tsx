import { ImageResponse } from 'next/og';

export const contentType = 'image/png';

export const size = {
  width: 512,
  height: 512,
};

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: 'center',
          background: '#0b162f',
          borderRadius: 112,
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
            fontSize: 320,
            fontWeight: 800,
            lineHeight: 1,
            marginTop: -18,
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
