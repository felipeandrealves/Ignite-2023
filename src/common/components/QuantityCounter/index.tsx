import { Minus, Plus } from 'phosphor-react'

import { QuantityCounterContainer } from './styles'

export const QuantityCounter = () => {
  return (
    <QuantityCounterContainer>
      <button type="button">
        <Minus size={14} weight="bold" />
      </button>

      <p>1</p>

      <button type="button">
        <Plus size={14} weight="bold" />
      </button>
    </QuantityCounterContainer>
  )
}
