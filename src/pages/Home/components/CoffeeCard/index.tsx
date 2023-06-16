import { ShoppingCart } from 'phosphor-react'

import {
  CoffeeCardContainer,
  CoffeeCardFooter,
  CoffeeCardFooterBuyCoffeeButton,
} from './styles'
import { QuantityCounter } from '../../../../common/components/QuantityCounter'
import CoffeeSample from '../../../../common/assets/images/coffees/Image.svg'

export const CoffeeCard = () => {
  return (
    <CoffeeCardContainer>
      <img src={CoffeeSample} alt="" />

      <span>Tradicional</span>

      <h1>Expresso Tradicional</h1>

      <p>O tradicional café feito com água quente e grãos moídos</p>

      <CoffeeCardFooter>
        <p>
          R$ <span>9,90</span>
        </p>

        <div>
          <QuantityCounter />

          <CoffeeCardFooterBuyCoffeeButton>
            <ShoppingCart size={22} weight="fill" />
          </CoffeeCardFooterBuyCoffeeButton>
        </div>
      </CoffeeCardFooter>
    </CoffeeCardContainer>
  )
}
