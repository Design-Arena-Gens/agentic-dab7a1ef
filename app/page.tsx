import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <div className="logo-wrapper" aria-label="Modern business agent logo">
        <svg
          width="280"
          height="280"
          viewBox="0 0 280 280"
          role="img"
          aria-labelledby="logoTitle logoDesc"
        >
          <title id="logoTitle">Modern Business Agent Logo</title>
          <desc id="logoDesc">
            Abstract professional figure carrying a briefcase rendered in blue and silver hues.
          </desc>
          <defs>
            <linearGradient
              id="haloGradient"
              x1="140"
              x2="140"
              y1="20"
              y2="260"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#8EB7FF" stopOpacity="0.65" />
              <stop offset="1" stopColor="#2C4C92" stopOpacity="0.15" />
            </linearGradient>
            <linearGradient
              id="figureGradient"
              x1="98"
              x2="205"
              y1="72"
              y2="224"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#1D4E89" />
              <stop offset="0.6" stopColor="#2A63A7" />
              <stop offset="1" stopColor="#6AA9FF" />
            </linearGradient>
            <linearGradient
              id="accentGradient"
              x1="185"
              x2="132"
              y1="126"
              y2="212"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#B7C7DB" />
              <stop offset="1" stopColor="#E7EEF6" />
            </linearGradient>
            <linearGradient
              id="briefcaseGradient"
              x1="195"
              x2="164"
              y1="154"
              y2="206"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#7D8FA5" />
              <stop offset="0.7" stopColor="#C5D3E6" />
              <stop offset="1" stopColor="#F3F6FB" />
            </linearGradient>
            <filter id="glow" x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur stdDeviation="12" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <circle cx="140" cy="140" r="108" fill="url(#haloGradient)" opacity="0.6" />

          <path
            d="M134 82c0-18.226 14.774-33 33-33s33 14.774 33 33-14.774 33-33 33-33-14.774-33-33Z"
            fill="url(#accentGradient)"
            filter="url(#glow)"
            opacity="0.9"
          />

          <path
            d="M96 214c4-44 26-72 74-76 30-2 60-2 70 22 9 23-35 66-73 66-24 0-51-5-71-12Z"
            fill="url(#accentGradient)"
            opacity="0.45"
          />

          <path
            d="M115 214c6-35 19-58 46-67 17-5 40-4 51 9 13 15 6 45-12 60-23 18-61 18-85-2Z"
            fill="url(#figureGradient)"
          />

          <path
            d="M170 148c8-14 12-44 2-61l26 5c15 3 24 29 18 57-5 26-18 48-33 52-11 3-26-11-13-53Z"
            fill="url(#accentGradient)"
            opacity="0.9"
          />

          <path
            d="M163 138c12 2 21 10 31 18l-15 60c-26 10-55 8-74-8 12-32 20-72 58-70Z"
            fill="url(#figureGradient)"
          />

          <path
            d="M201 151c6-2 12 2 15 7l17 27c3 5 1 11-4 14l-31 18c-5 3-12 1-15-4l-17-27c-3-5-1-11 4-14l31-18Z"
            fill="url(#briefcaseGradient)"
            stroke="#304C78"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <path
            d="M95 224c-4 0-7-3-7-7 0-32 13-63 36-86 17-17 39-27 62-27 7 0 13 6 13 13s-6 13-13 13c-36 0-66 32-66 72 0 7-6 13-13 13Z"
            fill="#1C3D7A"
            opacity="0.35"
          />

          <circle cx="167" cy="73" r="28" fill="#1B3F7F" />
          <circle cx="176" cy="65" r="10" fill="#7EA3D5" opacity="0.9" />

          <path
            d="M119 222c-3-13 6-26 18-33s28-7 41-1c8 3 13 10 13 18 0 4-1 7-3 10-17 10-39 13-69 6Z"
            fill="#17346A"
            opacity="0.55"
          />
        </svg>
      </div>

      <section>
        <h1>Agency Forward</h1>
        <p>
          Clean, minimalist brand mark for a modern business agent. The design blends an abstract
          professional silhouette with a structured briefcase accent and a trustworthy blue and
          silver palette, optimized for scalable vector use across corporate assets.
        </p>
      </section>

      <Link className="cta" href="/logo.svg" target="_blank" rel="noopener noreferrer">
        <span>Download SVG</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m7 11 5 5m0 0 5-5m-5 5V4" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 19h14" />
        </svg>
      </Link>
    </main>
  );
}
