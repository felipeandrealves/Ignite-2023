import {
  IntroSectionContainer,
  CoffeeList,
  CoffeeListContainer,
  Intro,
  IntroTitle,
} from './styles'
import { AdvantageList } from './components/AdvantageList'
import { CoffeeCard } from './components/CoffeeCard'

import CoffeeCup from '../../common/assets/images/CoffeeCup.svg'

export const Home = () => {
  return (
    <div>
      <IntroSectionContainer>
        <Intro>
          <IntroTitle>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>

            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </IntroTitle>

          <AdvantageList />
        </Intro>

        <img src={CoffeeCup} alt="" />
      </IntroSectionContainer>

      <CoffeeListContainer>
        <h1>Nossos cafés</h1>

        <CoffeeList>
          <CoffeeCard />

          <CoffeeCard />

          <CoffeeCard />

          <CoffeeCard />
        </CoffeeList>
      </CoffeeListContainer>
    </div>
  )
}
