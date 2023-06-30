import { zodResolver } from '@hookform/resolvers/zod'
import { MagnifyingGlass } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { SearchFormContainer } from './styles'

const searchTransactionSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchTransactionSchema>

export const SearchForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchTransactionSchema),
  })

  const handleSearchTransaction = async (data: SearchFormInputs) => {
    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log(data)

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
