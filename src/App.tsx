import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

import { defaultTheme } from './theme/default'
import { GlobalStyle } from './styles/global'
import { Router } from './Router'

export const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />

        <Router />
      </ThemeProvider>
    </BrowserRouter>
  )
}
