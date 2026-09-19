import { brand } from '../theme/theme';

/**
 * A flat, brand-colored rocket built from SVG shapes (not an icon font), so it can
 * carry your logo in the window and scale crisply at any size.
 *
 * Usage: <RocketSVG width={90} />
 */
export default function RocketSVG({ width = 90 }) {
  const height = width * 1.9;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 100 190"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'block', overflow: 'visible' }}
    >
      <defs>
        <linearGradient id="bodyGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#EDEFF6" />
          <stop offset="55%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#C9CEDB" />
        </linearGradient>
        <linearGradient id="noseGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={brand.orangeLight} />
          <stop offset="100%" stopColor={brand.orange} />
        </linearGradient>
        <clipPath id="windowClip">
          <circle cx="50" cy="70" r="15" />
        </clipPath>
      </defs>

      {/* fins */}
      <path d="M30 130 L8 165 L30 155 Z" fill={brand.blue} />
      <path d="M70 130 L92 165 L70 155 Z" fill={brand.blue} />

      {/* body */}
      <path
        d="M35 130 L35 55 C35 30 50 8 50 8 C50 8 65 30 65 55 L65 130 Z"
        fill="url(#bodyGrad)"
        stroke={brand.line}
        strokeWidth="0.5"
      />

      {/* nose cone accent */}
      <path d="M50 8 C50 8 60 24 63 40 L37 40 C40 24 50 8 50 8 Z" fill="url(#noseGrad)" />

      {/* blue accent ring */}
      <rect x="35" y="112" width="30" height="10" fill={brand.blue} />

      {/* window with logo clipped inside */}
      <circle cx="50" cy="70" r="17" fill={brand.blue} />
      <circle cx="50" cy="70" r="15" fill="#0A1128" />
      <g clipPath="url(#windowClip)">
        {/* Replace /images/logo.png with your logo file — it will appear inside the window */}
        <image href="/images/logo.png" x="35" y="55" width="30" height="30" preserveAspectRatio="xMidYMid slice" />
      </g>
      <circle cx="50" cy="70" r="15" fill="none" stroke={brand.orangeLight} strokeWidth="1.5" opacity="0.6" />

      {/* base ring */}
      <rect x="33" y="128" width="34" height="6" rx="2" fill={brand.blue} />
    </svg>
  );
}
