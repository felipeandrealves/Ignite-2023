import { ThemeProvider } from 'styled-components'

import { TransactionsProvider } from './contexts/TransactionsContext'
import { defaultTheme } from './styles/theme/default'
import { Transactions } from './pages/transactions'
import { GlobalStyles } from './styles/global'

export const App = () => {
  return (
    <TransactionsProvider>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />

        <Transactions />
      </ThemeProvider>
    </TransactionsProvider>
  )
}
