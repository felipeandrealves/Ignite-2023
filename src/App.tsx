import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

import { CyclesContextProvider } from './contexts/CyclesContext'
import { defaultTheme } from './styles/theme/default'
import { GlobalStyles } from './styles/global'
import { Router } from './Router'

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CyclesContextProvider>
          <Router />
        </CyclesContextProvider>
      </BrowserRouter>

      <GlobalStyles />
    </ThemeProvider>
  )
}
