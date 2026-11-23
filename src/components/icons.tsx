// Decorative line icons from the design. Always rendered aria-hidden.

type IconProps = { children: React.ReactNode };

function Icon({ children }: IconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {children}
    </svg>
  );
}

export const BagIcon = () => (
  <Icon>
    <path d="M5 7h14l-1.2 12.1a1 1 0 0 1-1 .9H7.2a1 1 0 0 1-1-.9L5 7z" />
    <path d="M9 10V6a3 3 0 0 1 6 0v4" />
  </Icon>
);

export const PhoneIcon = () => (
  <Icon>
    <rect x="7" y="3" width="10" height="18" rx="2" />
    <path d="M11 17h2" />
  </Icon>
);

export const BrowserIcon = () => (
  <Icon>
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <path d="M3 9h18M7 6.5h.01M10 6.5h.01" />
  </Icon>
);

export const CardIcon = () => (
  <Icon>
    <rect x="2" y="5" width="20" height="14" rx="2" />
    <path d="M2 10h20M6 15h4" />
  </Icon>
);

export const HouseIcon = () => (
  <Icon>
    <path d="M3 10.5L12 4l9 6.5" />
    <path d="M5 9.5V20h14V9.5" />
    <path d="M10 20v-5h4v5" />
  </Icon>
);

export const CheckCircleIcon = () => (
  <Icon>
    <path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z" />
    <path d="M8.5 12.5l2.5 2.5 4.5-5" />
  </Icon>
);

export const CodeIcon = () => (
  <Icon>
    <path d="M16 18l6-6-6-6" />
    <path d="M8 6l-6 6 6 6" />
  </Icon>
);

export const LayersIcon = () => (
  <Icon>
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5" />
    <path d="M2 12l10 5 10-5" />
  </Icon>
);

export const PulseIcon = () => (
  <Icon>
    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
  </Icon>
);
