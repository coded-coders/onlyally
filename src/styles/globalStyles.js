import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box
  }

  body {
    max-width: 1500px;
    width: 100%;
    margin: 0 auto;
  }

  img {
    width: 100% ;
    object-fit: cover;
  }

  a {
    color: #000;
    text-decoration: none
  }

  li {
    padding: 0;
    list-style: none ;
  }

  button {
    outline: none;
    border: none;
    cursor: pointer;
    transition: 0.3s ease all;
  }

   input {
    outline: none;
    border: none;
    transition: 0.3s ease all;
  }
`;
