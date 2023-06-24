import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import { CoffeeContextProvider } from './common/contexts/CoffeeContext'
import { defaultTheme } from './common/styles/theme/default'
import { GlobalStyle } from './common/styles/global'
import { Router } from './Router'

import 'react-toastify/dist/ReactToastify.css'

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CoffeeContextProvider>
          <Router />
        </CoffeeContextProvider>

        <ToastContainer />
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  )
}
