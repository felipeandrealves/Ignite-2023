import { Trash } from 'phosphor-react'
import { useState } from 'react'

import {
  CoffeeDescription,
  PaymentCoffeeCardContainer,
  Price,
  RemoveCoffeeButton,
} from './styles'
import {
  CoffeeCart,
  useCoffeeContext,
} from '../../../../common/contexts/CoffeeContext'
import { QuantityCounter } from '../../../../common/components/QuantityCounter'

export const PaymentCoffeeCard = ({ amount, type, price, id }: CoffeeCart) => {
  const { removeCoffeeFromCart } = useCoffeeContext()
  const [coffeeAmount, setCoffeeAmount] = useState(amount)

  const handleChangeCoffeeAmount = (amount: number) => {
    setCoffeeAmount(amount)
  }

  const handleRemoveCoffee = () => {
    removeCoffeeFromCart(id)
  }

  return (
    <PaymentCoffeeCardContainer>
      <img src={`/coffees/Type=${type}.svg`} alt="Café" />

      <CoffeeDescription>
        <p>{type}</p>

        <div>
          <QuantityCounter
            amount={coffeeAmount}
            changeAmount={handleChangeCoffeeAmount}
          />

          <RemoveCoffeeButton type="button" onClick={handleRemoveCoffee}>
            <Trash size={16} /> remover
          </RemoveCoffeeButton>
        </div>
      </CoffeeDescription>

      <Price>R$ {price}</Price>
    </PaymentCoffeeCardContainer>
  )
}
