import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secondary: string;

      text: string;
      buttonText: string;
      background: string;
      foreground: string;
      separator: string;
    };
  }
}
