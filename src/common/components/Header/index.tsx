import { MapPin, ShoppingCart } from 'phosphor-react'
import { Link } from 'react-router-dom'

import CoffeeDeliveryLogo from '../../assets/images/CoffeeDeliveryLogo.svg'
import { HeaderContainer, Location, ShoppingCartButton } from './styles'

export const Header = () => {
  return (
    <HeaderContainer>
      <Link to="/">
        <img src={CoffeeDeliveryLogo} alt="" />
      </Link>

      <nav>
        <Location>
          <MapPin size={22} weight="fill" />
          <p>Porto Alegre, RS</p>
        </Location>

        <Link to="/checkout">
          <ShoppingCartButton>
            <ShoppingCart size={22} weight="fill" />
          </ShoppingCartButton>
        </Link>
      </nav>
    </HeaderContainer>
  )
}
