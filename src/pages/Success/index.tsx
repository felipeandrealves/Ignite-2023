import { useParams } from 'react-router-dom'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

import Illustration from '../../common/assets/images/Illustration.svg'
import { useCoffeeContext } from '../../common/contexts/CoffeeContext'
import { OrderDescription, SuccessContainer, Info } from './style'

const PAYMENT_TYPES = {
  creditCard: 'Cartão de crédito',
  debitCard: 'Cartão de débito',
  cash: 'Dinheiro',
}

export const Success = () => {
  const { orderId } = useParams()
  const { orders } = useCoffeeContext()

  const order = orders.find((order) => order.id === orderId)

  if (!order) {
    return <h1>Pedido não encontrado</h1>
  }

  const { address, paymentType } = order

  return (
    <SuccessContainer>
      <div>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </div>

      <OrderDescription>
        <Info type="local">
          <div>
            <MapPin weight="fill" />
          </div>

          <div>
            <p>
              Entrega em{' '}
              <strong>
                {address.street}, {address.number}
              </strong>
            </p>
            <p>
              {address.neighborhood} - {address.city}, {address.state}
            </p>
          </div>
        </Info>

        <Info type="time">
          <div>
            <Timer weight="fill" />
          </div>

          <div>
            <p>Previsão de entrega</p>
            <p>
              <strong>20 min - 30 min</strong>
            </p>
          </div>
        </Info>

        <Info type="payment">
          <div>
            <CurrencyDollar weight="fill" />
          </div>

          <div>
            <p>Pagamento na entrega </p>
            <p>
              <strong>{PAYMENT_TYPES[paymentType]}</strong>
            </p>
          </div>
        </Info>
      </OrderDescription>

      <div>
        <img src={Illustration} alt="" />
      </div>
    </SuccessContainer>
  )
}
