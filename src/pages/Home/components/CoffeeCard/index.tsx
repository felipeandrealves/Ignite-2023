import { ShoppingCart } from 'phosphor-react'
import { useState } from 'react'

import {
  CoffeeCardContainer,
  CoffeeCardFooter,
  CoffeeCardFooterBuyCoffeeButton,
  CoffeeLabels,
} from './styles'
import {
  Coffee,
  useCoffeeContext,
} from '../../../../common/contexts/CoffeeContext'
import { QuantityCounter } from '../../../../common/components/QuantityCounter'

interface CoffeeCardProps extends Coffee {}

export const CoffeeCard = ({
  type,
  labels,
  description,
  price,
  ...rest
}: CoffeeCardProps) => {
  const { addCoffeeToCart } = useCoffeeContext()

  const [coffeeAmount, setCoffeeAmount] = useState(1)

  const handleChangeCoffeeAmount = (amount: number) => {
    setCoffeeAmount(amount)
  }

  const handleAddCoffeeToCart = () => {
    addCoffeeToCart({
      type,
      labels,
      description,
      price,
      amount: coffeeAmount,
      ...rest,
    })

    setCoffeeAmount(1)
  }

  return (
    <CoffeeCardContainer>
      <img src={`/coffees/Type=${type}.svg`} alt="" />

      <CoffeeLabels>
        {labels.map((label) => (
          <span key={label} className="label">
            {label}
          </span>
        ))}
      </CoffeeLabels>

      <h1>{type}</h1>

      <p>{description}</p>

      <CoffeeCardFooter>
        <p>
          R$ <span>{price}</span>
        </p>

        <div>
          <QuantityCounter
            amount={coffeeAmount}
            changeAmount={handleChangeCoffeeAmount}
          />

          <CoffeeCardFooterBuyCoffeeButton onClick={handleAddCoffeeToCart}>
            <ShoppingCart size={22} weight="fill" />
          </CoffeeCardFooterBuyCoffeeButton>
        </div>
      </CoffeeCardFooter>
    </CoffeeCardContainer>
  )
}
