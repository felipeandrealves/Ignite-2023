import {
  ArchiveBox,
  Coffee,
  MapPin,
  Minus,
  Plus,
  ShoppingCart,
  Timer,
} from 'phosphor-react'
import { Link } from 'react-router-dom'

import {
  HeaderContainer,
  Location,
  IntroSectionContainer,
  ShoppingCartButton,
  AdvantagesItems,
  Intro,
  Advantage,
  CoffeeList,
  CoffeeListContainer,
  CoffeeCard,
  CoffeeCardFooter,
  Quantity,
} from './styles'
import CoffeeDeliveryLogo from '../../common/assets/images/CoffeeDeliveryLogo.svg'
import CoffeeCup from '../../common/assets/images/CoffeeCup.svg'

import CoffeeSample from '../../common/assets/images/coffees/Image.svg'

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
            <Advantage color="orange">
              <span>
                <ShoppingCart weight="fill" size={16} />
              </span>

              <p>Compra simples e segura</p>
            </Advantage>

            <Advantage color="gray">
              <span>
                <ArchiveBox weight="fill" size={16} />
              </span>

              <p>Embalagem mantém o café intacto</p>
            </Advantage>

            <Advantage color="yellow">
              <span>
                <Timer weight="fill" size={16} />
              </span>

              <p>Entrega rápida e rastreada</p>
            </Advantage>

            <Advantage color="purple">
              <span>
                <Coffee weight="fill" size={16} />
              </span>

              <p>O café chega fresquinho até você</p>
            </Advantage>
          </AdvantagesItems>
        </Intro>

        <img src={CoffeeCup} alt="" />
      </IntroSectionContainer>

      <CoffeeListContainer>
        <h1>Nossos cafés</h1>

        <CoffeeList>
          <CoffeeCard>
            <img src={CoffeeSample} alt="" />

            <span>Tradicional</span>

            <h1>Expresso Tradicional</h1>

            <p>O tradicional café feito com água quente e grãos moídos</p>

            <CoffeeCardFooter>
              <p>
                R$ <span>9,90</span>
              </p>

              <div>
                <Quantity>
                  <button>
                    <Minus size={14} weight="fill" />
                  </button>

                  <p>1</p>

                  <button>
                    <Plus size={14} weight="fill" />
                  </button>
                </Quantity>

                <button>
                  <ShoppingCart size={22} weight="fill" />
                </button>
              </div>
            </CoffeeCardFooter>
          </CoffeeCard>

          <CoffeeCard>
            <img src={CoffeeSample} alt="" />

            <span>Tradicional</span>

            <h1>Expresso Tradicional</h1>

            <p>O tradicional café feito com água quente e grãos moídos</p>

            <CoffeeCardFooter>
              <p>
                R$ <span>9,90</span>
              </p>

              <div>
                <Quantity>
                  <button>
                    <Minus size={14} weight="fill" />
                  </button>

                  <p>1</p>

                  <button>
                    <Plus size={14} weight="fill" />
                  </button>
                </Quantity>

                <button>
                  <ShoppingCart size={22} weight="fill" />
                </button>
              </div>
            </CoffeeCardFooter>
          </CoffeeCard>

          <CoffeeCard>
            <img src={CoffeeSample} alt="" />

            <span>Tradicional</span>

            <h1>Expresso Tradicional</h1>

            <p>O tradicional café feito com água quente e grãos moídos</p>

            <CoffeeCardFooter>
              <p>
                R$ <span>9,90</span>
              </p>

              <div>
                <Quantity>
                  <button>
                    <Minus size={14} weight="fill" />
                  </button>

                  <p>1</p>

                  <button>
                    <Plus size={14} weight="fill" />
                  </button>
                </Quantity>

                <button>
                  <ShoppingCart size={22} weight="fill" />
                </button>
              </div>
            </CoffeeCardFooter>
          </CoffeeCard>

          <CoffeeCard>
            <img src={CoffeeSample} alt="" />

            <span>Tradicional</span>

            <h1>Expresso Tradicional</h1>

            <p>O tradicional café feito com água quente e grãos moídos</p>

            <CoffeeCardFooter>
              <p>
                R$ <span>9,90</span>
              </p>

              <div>
                <Quantity>
                  <button>
                    <Minus size={14} weight="fill" />
                  </button>

                  <p>1</p>

                  <button>
                    <Plus size={14} weight="fill" />
                  </button>
                </Quantity>

                <button>
                  <ShoppingCart size={22} weight="fill" />
                </button>
              </div>
            </CoffeeCardFooter>
          </CoffeeCard>

          <CoffeeCard>
            <img src={CoffeeSample} alt="" />

            <span>Tradicional</span>

            <h1>Expresso Tradicional</h1>

            <p>O tradicional café feito com água quente e grãos moídos</p>

            <CoffeeCardFooter>
              <p>
                R$ <span>9,90</span>
              </p>

              <div>
                <Quantity>
                  <button>
                    <Minus size={14} weight="fill" />
                  </button>

                  <p>1</p>

                  <button>
                    <Plus size={14} weight="fill" />
                  </button>
                </Quantity>

                <button>
                  <ShoppingCart size={22} weight="fill" />
                </button>
              </div>
            </CoffeeCardFooter>
          </CoffeeCard>

          <CoffeeCard>
            <img src={CoffeeSample} alt="" />

            <span>Tradicional</span>

            <h1>Expresso Tradicional</h1>

            <p>O tradicional café feito com água quente e grãos moídos</p>

            <CoffeeCardFooter>
              <p>
                R$ <span>9,90</span>
              </p>

              <div>
                <Quantity>
                  <button>
                    <Minus size={14} weight="fill" />
                  </button>

                  <p>1</p>

                  <button>
                    <Plus size={14} weight="fill" />
                  </button>
                </Quantity>

                <button>
                  <ShoppingCart size={22} weight="fill" />
                </button>
              </div>
            </CoffeeCardFooter>
          </CoffeeCard>
        </CoffeeList>
      </CoffeeListContainer>
    </div>
  )
}
