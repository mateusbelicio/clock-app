import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --ff-sans: 'Inter', sans-serif;

    --fs-2xs: 0.625rem; /* 10px */
    --fs-xs: 0.75rem; /* 12px */
    --fs-sm: 0.875rem; /* 14px */
    --fs-base: 1rem; /* 16px */
    --fs-lg: 1.125rem; /* 18px */
    --fs-xl: 1.25rem; /* 20px */
    --fs-2xl: 1.5rem; /* 24px */
    --fs-3xl: 2rem; /* 32px */
    --fs-4xl: 2.5rem; /* 40px */
    --fs-5xl: 3rem; /* 48px */
    --fs-6xl: 3.5rem; /* 56px */
    --fs-7xl: 4.5rem; /* 72px */
    --fs-8xl: 6rem; /* 96px */
    --fs-9xl: 11rem; /* 176px */
    --fs-hg: 12.5rem; /* 200px */

    --lh-none: 1;
    --lh-small: 1.2;
    --lh-normal: 1.5;
    --lh-relaxed: 1.833333;
    --lh-medium: 1.75rem; /* 28px */
    --lh-large: 4.25rem; /* 68px */

    --spacing-none: 0;
    --spacing-tiny: 2.6px;
    --spacing-small: 3px;
    --spacing-medium: 4px;
    --spacing-large: 4.8px;
    --spacing-xlarge: 5px;

    --rgb-neutral-50: 255 255 255;
    --rgb-neutral-100: 245 245 245;
    --rgb-neutral-200: 230 230 230;
    --rgb-neutral-300: 216 216 216;
    --rgb-neutral-400: 153 153 153;
    --rgb-neutral-500: 112 112 112;
    --rgb-neutral-600: 82 82 82;
    --rgb-neutral-700: 64 64 64;
    --rgb-neutral-800: 48 48 48;
    --rgb-neutral-900: 23 23 23;
    --rgb-neutral-950: 0 0 0;

    --clr-neutral-50: rgba(var(--rgb-neutral-50));
    --clr-neutral-100: rgba(var(--rgb-neutral-100));
    --clr-neutral-200: rgba(var(--rgb-neutral-200));
    --clr-neutral-300: rgba(var(--rgb-neutral-300));
    --clr-neutral-400: rgba(var(--rgb-neutral-400));
    --clr-neutral-500: rgba(var(--rgb-neutral-500));
    --clr-neutral-600: rgba(var(--rgb-neutral-600));
    --clr-neutral-700: rgba(var(--rgb-neutral-700));
    --clr-neutral-800: rgba(var(--rgb-neutral-800));
    --clr-neutral-900: rgba(var(--rgb-neutral-900));
    --clr-neutral-950: rgba(var(--rgb-neutral-950));
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html:focus-within {
    scroll-behavior: smooth;
  }

  body {
    min-height: 100vh;
    text-rendering: optimizeSpeed;
    line-height: 1.6;
    font-family: var(--ff-sans);
    color: var(--clr-neutral-50);
    background-color: rgba(var(--rgb-neutral-300) / 0.4);
  }

  #root {
    overflow-x: hidden;
    min-height: 100dvh;
    height: 100%;
  }

  p {
    line-height: var(--lh-medium);
  }

  img,
  picture {
    max-width: 100%;
    display: block;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
    color: inherit;
  }

  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
      scroll-behavior: auto;
    }
    
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;

export default GlobalStyles;
