import { MapPin, ShoppingCart } from 'phosphor-react'

import CoffeDeliveryLogo from '../../common/assets/images/coffee-delivery-logo.svg'

export const Home = () => {
  return (
    <div>
      <header>
        <img src={CoffeDeliveryLogo} alt="" />

        <nav>
          <span>
            <MapPin size={24} />
            Porto Alegre, RS
          </span>

          <button>
            <ShoppingCart size={24} />
          </button>
        </nav>
      </header>
    </div>
  )
}
