import { MapPin, Moon, ShoppingCart, Sun, ToggleLeft } from 'phosphor-react'
import { Link } from 'react-router-dom'

import {
  HeaderContainer,
  Location,
  ShoppingCartButton,
  ToggleThemeButton,
} from './styles'
import CoffeeDeliveryLogo from '../../assets/images/CoffeeDeliveryLogo.svg'
import { useCoffeeContext } from '../../contexts/CoffeeContext'
import { useThemeContext } from '../../contexts/ThemeContext'

export const Header = () => {
  const { coffeeCart, address } = useCoffeeContext()
  const { toggleTheme, theme } = useThemeContext()

  return (
    <HeaderContainer>
      <Link to="/">
        <img src={CoffeeDeliveryLogo} alt="" />
      </Link>

      <nav>
        {address && (
          <Location>
            <MapPin size={22} weight="fill" />
            <p>
              {address.city}, {address.state}
            </p>
          </Location>
        )}

        <ToggleThemeButton onClick={toggleTheme}>
          {theme === 'light' ? (
            <Moon size={16} weight="fill" />
          ) : (
            <Sun size={16} weight="fill" />
          )}
        </ToggleThemeButton>

        <Link to="/checkout">
          <ShoppingCartButton amount={coffeeCart.length}>
            <ShoppingCart size={22} weight="fill" />
          </ShoppingCartButton>
        </Link>
      </nav>
    </HeaderContainer>
  )
}
