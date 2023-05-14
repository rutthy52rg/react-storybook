// ./src/theme.js

export const lightTheme = {
  colors: {
    background: "#ffffff",
    backgroundInverse: "#7A8997",
    positive: "#E1FFD4",
    negative: "#FEDED2",
    primary: "#FF4785",
    secondary: "#1EA7FD",
    tertiary: "#DDDDDD",
    text: "#ffffff",
  },
  spacing: {
    padding: {
      small: 10,
      medium: 20,
      large: 30,
    },
    borderRadius: {
      small: 5,
      default: 10,
    },
  },
  typography: {
    type: {
      primary: '"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
      code: '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace',
    },
    weight: {
      regular: "400",
      bold: "700",
      extrabold: "800",
      black: "900",
    },
    size: {
      s1: 12,
      s2: 14,
      s3: 16,
      m1: 20,
      m2: 24,
      m3: 28,
      l1: 32,
      l2: 40,
      l3: 48,
    },
  },
};

export const darkTheme = {
  ...lightTheme,
  colors: {
    background: "#1b1c1d",
    backgroundInverse: "#333333",
    positive: "#9fd986",
    negative: "#df987d",
    primary: "#d43369",
    secondary: "#1b8bd0",
    tertiary: "#DDDDDD",
    text: "#FFFFFF",
  },
};
