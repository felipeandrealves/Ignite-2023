import {
  PriceHighlight,
  TransactionContainer,
  TransactionContent,
  TransactionsTable,
} from './styles'
import { SearchForm } from './components/SearchForm'
import { Summary } from '../../components/Summary'
import { Header } from '../../components/Header'

export const Transaction = () => {
  return (
    <TransactionContainer>
      <Header />

      <Summary />

      <TransactionContent>
        <SearchForm />

        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <PriceHighlight variant="income">R$ 12.000,00</PriceHighlight>
              </td>
              <td>Venda</td>
              <td>20/02/2021</td>
            </tr>

            <tr>
              <td width="50%">Hamburguer</td>
              <td>
                <PriceHighlight variant="outcome">R$ 59,90</PriceHighlight>{' '}
              </td>
              <td>Alimentacao</td>
              <td>20/02/2021</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionContent>
    </TransactionContainer>
  )
}
