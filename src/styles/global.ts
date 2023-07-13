import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.fonts.font};
    margin: 0;
    padding: 0;
    line-height: 160%;
    color: ${({ theme }) => theme.colors['base-text']};
  }

  body {
    background: ${({ theme }) => theme.colors['base-background']};
  }
`
