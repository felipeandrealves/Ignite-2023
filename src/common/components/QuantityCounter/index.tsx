import { Minus, Plus } from 'phosphor-react'

import { QuantityCounterContainer } from './styles'

interface QuantityCounterProps {
  amount: number
  changeAmount: (amount: number) => void
}

export const QuantityCounter = ({
  amount,
  changeAmount,
}: QuantityCounterProps) => {
  return (
    <QuantityCounterContainer>
      <button type="button" onClick={() => changeAmount(amount - 1)}>
        <Minus size={14} weight="bold" />
      </button>

      <p>{amount}</p>

      <button type="button" onClick={() => changeAmount(amount + 1)}>
        <Plus size={14} weight="bold" />
      </button>
    </QuantityCounterContainer>
  )
}
