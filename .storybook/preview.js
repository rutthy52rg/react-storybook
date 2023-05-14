/** @type { import('@storybook/react').Preview } */
// .storybook/preview.js
import { withThemeFromJSXProvider } from "@storybook/addon-styling";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../src/themes";

const GlobalStyles = createGlobalStyle`
  body {
    font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
`;

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      light: lightTheme,
      dark: darkTheme,
    },
    defaultTheme: "light",
    Provider: ThemeProvider,
    GlobalStyles,
  }),
];

const preview = {
  decorators: [...decorators],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        // color: /(background|color)$/i,
        // date: /Date$/,
      },
    },
  },
};

export default preview;
