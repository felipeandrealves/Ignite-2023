import {
  PriceHighlight,
  TransactionContainer,
  TransactionContent,
  TransactionsTable,
} from './styles'
import { currencyFormatter, dateFormatter } from '../../utils/formatter'
import { useTransactions } from '../../contexts/TransactionsContext'
import { SearchForm } from './components/SearchForm'
import { Summary } from '../../components/Summary'
import { Header } from '../../components/Header'

export const Transactions = () => {
  const transactions = useTransactions((context) => context.transactions)

  return (
    <TransactionContainer>
      <Header />

      <Summary />

      <TransactionContent>
        <SearchForm />

        <TransactionsTable>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td width="50%">{transaction.description}</td>
                <td>
                  <PriceHighlight variant={transaction.type}>
                    {transaction.type === 'outcome' && '- '}
                    {currencyFormatter.format(transaction.price)}
                  </PriceHighlight>
                </td>
                <td>{transaction.category}</td>
                <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
              </tr>
            ))}
          </tbody>
        </TransactionsTable>
      </TransactionContent>
    </TransactionContainer>
  )
}
