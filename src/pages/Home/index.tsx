import { ArchiveBox, Coffee, MapPin, ShoppingCart, Timer } from 'phosphor-react'
import { Link } from 'react-router-dom'

import {
  HeaderContainer,
  Location,
  IntroSectionContainer,
  ShoppingCartButton,
  AdvantagesItems,
  Intro,
} from './styles'
import CoffeeDeliveryLogo from '../../common/assets/images/CoffeeDeliveryLogo.svg'
import CoffeeCup from '../../common/assets/images/CoffeeCup.svg'

export const Home = () => {
  return (
    <div>
      <HeaderContainer>
        <Link to="/">
          <img src={CoffeeDeliveryLogo} alt="" />
        </Link>

        <nav>
          <Location>
            <MapPin size={22} weight="fill" />
            <p>Porto Alegre, RS</p>
          </Location>

          <ShoppingCartButton>
            <ShoppingCart size={22} weight="fill" />
          </ShoppingCartButton>
        </nav>
      </HeaderContainer>

      <IntroSectionContainer>
        <Intro>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>

          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>

          <AdvantagesItems>
            <div>
              <ShoppingCart weight="fill" />

              <p>Compra simples e segura</p>
            </div>

            <div>
              <ArchiveBox weight="fill" />

              <p>Embalagem mantém o café intacto</p>
            </div>

            <div>
              <Timer weight="fill" />

              <p>Entrega rápida e rastreada</p>
            </div>

            <div>
              <Coffee weight="fill" />

              <p>O café chega fresquinho até você</p>
            </div>
          </AdvantagesItems>
        </Intro>

        <img src={CoffeeCup} alt="" />
      </IntroSectionContainer>
    </div>
  )
}
