import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html, body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
`
