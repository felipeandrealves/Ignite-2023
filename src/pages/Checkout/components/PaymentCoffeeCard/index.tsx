import { Trash } from 'phosphor-react'
import { useState } from 'react'

import {
  CoffeeDescription,
  PaymentCoffeeCardContainer,
  Price,
  RemoveCoffeeButton,
} from './styles'
import { QuantityCounter } from '../../../../common/components/QuantityCounter'

export const PaymentCoffeeCard = () => {
  const [coffeeAmount, setCoffeeAmount] = useState(1)

  const handleChangeCoffeeAmount = (amount: number) => {
    setCoffeeAmount(amount)
  }

  return (
    <PaymentCoffeeCardContainer>
      <img src="/coffees/Image.svg" alt="Café" />

      <CoffeeDescription>
        <p>Expresso Tradicional</p>

        <div>
          <QuantityCounter
            amount={coffeeAmount}
            changeAmount={handleChangeCoffeeAmount}
          />

          <RemoveCoffeeButton type="button">
            <Trash size={16} /> remover
          </RemoveCoffeeButton>
        </div>
      </CoffeeDescription>

      <Price>R$ 9,90</Price>
    </PaymentCoffeeCardContainer>
  )
}
