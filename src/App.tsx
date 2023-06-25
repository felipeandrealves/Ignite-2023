import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import { CoffeeContextProvider } from './common/contexts/CoffeeContext'
import { ThemeContextProvider } from './common/contexts/ThemeContext'
import { GlobalStyle } from './common/styles/global'
import { Router } from './Router'

import 'react-toastify/dist/ReactToastify.css'

export const App = () => {
  return (
    <ThemeContextProvider>
      <BrowserRouter>
        <CoffeeContextProvider>
          <Router />
        </CoffeeContextProvider>

        <ToastContainer />
        <GlobalStyle />
      </BrowserRouter>
    </ThemeContextProvider>
  )
}
