import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    
    font-family: 'Roboto', sans-serif;
    transition: color 0.3s, background-color 0.3s;
  }

  h1, input, button {
    font-family: 'Roboto', sans-serif;
  }

  h1 {
    transition: color 0.3s;
  }

  * {
    transition: background-color 0.3s;
  }

  li {
    list-style: none;
  }
`;
