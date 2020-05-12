import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secudary: string;

      background: string;
      text: string;
    }
  }
}