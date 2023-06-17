import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

import { CoffeeContextProvider } from './common/contexts/CoffeeContext'
import { defaultTheme } from './common/styles/theme/default'
// import { darkTheme } from './common/styles/theme/dark'
import { GlobalStyle } from './common/styles/global'
import { Router } from './Router'

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CoffeeContextProvider>
          <Router />
        </CoffeeContextProvider>

        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  )
}
