import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
  }

  h1, h2, h3 {
    color: #333;
  }

  a {
    text-decoration: none;
    color: #ff5733;
  }

  a:hover {
    text-decoration: underline;
  }
`
