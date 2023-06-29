import { ThemeProvider } from 'styled-components'

import { defaultTheme } from './styles/theme/default'
import { Transaction } from './pages/transaction'
import { GlobalStyles } from './styles/global'

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />

      <Transaction />
    </ThemeProvider>
  )
}
