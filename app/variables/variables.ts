export const colors = {
  blue: '#1C63FF',
  green: '#65BD00',
  darkBlue: '#161444',
  gray: '#D9D9D9',
  gray02: '#E6E8EA',
};
export const sizes = {
  paddingContainer: '2.4rem',
  paddingContainerMobile: '1.2rem',
};
export const breakpoints = {
  mobile: '1023px',
  medium: '1440px',
  small: '1280px',
  large: '1728px',
};
export const device = {
  mobile: `(max-width: ${breakpoints.mobile})`,
  noTouch: '(hover), (min-width:0\0), (min--moz-device-pixel-ratio:0)',
  medium: `(max-width: ${breakpoints.medium})`,
  small: `(max-width: ${breakpoints.small})`,
  large: `(min-width: ${breakpoints.large})`,
  touch: '(hover), (min-width:0\\0), (min--moz-device-pixel-ratio:0)',
};
