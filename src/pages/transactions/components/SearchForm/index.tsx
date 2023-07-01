import { zodResolver } from '@hookform/resolvers/zod'
import { MagnifyingGlass } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { useTransactions } from '../../../../contexts/TransactionsContext'
import { SearchFormContainer } from './styles'
import { memo } from 'react'

const searchTransactionSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchTransactionSchema>

const SearchFormComponent = () => {
  const fetchTransaction = useTransactions(
    (context) => context.fetchTransaction,
  )

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchTransactionSchema),
  })

  const handleSearchTransaction = async (data: SearchFormInputs) => {
    await fetchTransaction(data.query)

    reset()
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransaction)}>
      <input
        type="text"
        placeholder="Busque por transacoes"
        {...register('query')}
      />

      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />

        <span>Pesquisar</span>
      </button>
    </SearchFormContainer>
  )
}

export const SearchForm = memo(SearchFormComponent)
