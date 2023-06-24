import { Trash } from 'phosphor-react'
import { useState } from 'react'

import {
  CoffeeDescription,
  PaymentCoffeeCardContainer,
  Price,
  RemoveCoffeeButton,
} from './styles'
import { QuantityCounter } from '../../../../common/components/QuantityCounter'
import { useCoffeeContext } from '../../../../common/contexts/CoffeeContext'
import { Coffee } from '../../../../common/reducers/coffees/reducer'

export const PaymentCoffeeCard = ({ amount, type, price, id }: Coffee) => {
  const { removeCoffeeFromCart, changeCoffeeAmount } = useCoffeeContext()
  const [coffeeAmount, setCoffeeAmount] = useState(amount)

  const handleChangeCoffeeAmount = (amount: number) => {
    if (amount === 0) return removeCoffeeFromCart(id)

    changeCoffeeAmount(id, amount)

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

      <Price>
        {new Intl.NumberFormat('pt-br', {
          style: 'currency',
          currency: 'BRL',
        }).format(price)}
      </Price>
    </PaymentCoffeeCardContainer>
  )
}
