import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 30px;
    color: #000000;
    background-color: #ffffff;
  }

  ul {
    list-style: none
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  a, button, input {
    font-size: inherit;
    line-height: inherit;
  }

  a, button {
    cursor: pointer;
  }

  input {
    font-family: 'Roboto', sans-serif;
    text-overflow: ellipsis;
    outline: none;
  }

  select {
    appearance: none;
    border: none;
    background-color: transparent;
    outline: none;
    cursor: pointer;
  }
`;

export default GlobalStyle;
