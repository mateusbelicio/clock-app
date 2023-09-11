export function breakpoint(size, maxWidth = false) {
  const deviceSizes = {
    sm: 640,
    md: 768,
    lg: 940,
    xl: 1238,
  };

  return maxWidth
    ? `(max-width: ${deviceSizes[size] / 16}rem)`
    : `(min-width: ${deviceSizes[size] / 16}rem)`;
}
