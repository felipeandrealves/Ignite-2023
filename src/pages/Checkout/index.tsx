import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
} from 'phosphor-react'

import {
  CheckoutContainer,
  CheckoutForm,
  CheckoutOrder,
  CoffeeCard,
  CoffeeDescription,
  ConfirmOrderButton,
  FormCard,
  FormCardForm,
  FormCardGroup,
  FormCardHeader,
  FormCardHeaderTitle,
  FormInput,
  PaymentList,
  Price,
  PriceOrderLabel,
  PriceOrderResume,
  RemoveCoffeeButton,
} from './styles'

import CoffeExample from '../../common/assets/images/coffees/Image.svg'
import { QuantityCounter } from '../../common/components/QuantityCounter'

export const Checkout = () => {
  return (
    <CheckoutContainer>
      <CheckoutForm>
        <CheckoutOrder>
          <p>Complete seu pedido</p>

          <div className="addressAndPayment">
            <FormCard>
              <FormCardHeader>
                <MapPinLine size={22} color="#C47F17" />

                <FormCardHeaderTitle>
                  <p>Endereço de Entrega</p>
                  <span>Informe o endereço onde deseja receber seu pedido</span>
                </FormCardHeaderTitle>
              </FormCardHeader>

              <FormCardForm>
                <FormInput type="text" size={200} placeholder="CEP" />

                <FormInput type="text" placeholder="Rua" />

                <FormCardGroup grid="200px 1fr">
                  <FormInput type="text" placeholder="Numero" />

                  <FormInput type="text" placeholder="Complemento" />
                </FormCardGroup>

                <FormCardGroup grid="200px 1fr 60px">
                  <FormInput type="text" placeholder="Bairro" />

                  <FormInput type="text" placeholder="Cidade" />

                  <FormInput type="text" placeholder="UF" />
                </FormCardGroup>
              </FormCardForm>
            </FormCard>

            <FormCard>
              <FormCardHeader>
                <CurrencyDollar size={22} color="#8047F8" />

                <FormCardHeaderTitle>
                  <p>Pagamento</p>

                  <span>
                    O pagamento é feito na entrega. Escolha a forma que deseja
                    pagar
                  </span>
                </FormCardHeaderTitle>
              </FormCardHeader>

              <FormCardForm>
                <FormCardGroup grid="1fr 1fr 1fr">
                  <input
                    defaultChecked
                    type="radio"
                    name="payment"
                    id="credit-card"
                  />
                  <label htmlFor="credit-card">
                    <CreditCard size={16} /> cartão de crédito
                  </label>

                  <input type="radio" name="payment" id="debit-card" />
                  <label htmlFor="debit-card">
                    <Bank size={16} />
                    cartão de débito
                  </label>

                  <input type="radio" name="payment" id="money" />
                  <label htmlFor="money">
                    <Money size={16} />
                    dinheiro
                  </label>
                </FormCardGroup>
              </FormCardForm>
            </FormCard>
          </div>
        </CheckoutOrder>

        <CheckoutOrder>
          <p>Cafés selecionados</p>

          <FormCard variant="payment">
            <PaymentList>
              <CoffeeCard>
                <img src={CoffeExample} alt="Café" />

                <CoffeeDescription>
                  <p>Expresso Tradicional</p>

                  <div>
                    <QuantityCounter />

                    <RemoveCoffeeButton type="button">
                      <Trash size={16} /> remover
                    </RemoveCoffeeButton>
                  </div>
                </CoffeeDescription>

                <Price>R$ 9,90</Price>
              </CoffeeCard>

              <div className="divider" />

              <PriceOrderResume>
                <PriceOrderLabel>
                  <p>Total de itens</p>
                  <span>R$ 29,70</span>
                </PriceOrderLabel>

                <PriceOrderLabel>
                  <p>Entrega</p>
                  <span>R$ 3,50</span>
                </PriceOrderLabel>

                <PriceOrderLabel total>
                  <p>Total</p>
                  <span>R$ 33,20</span>
                </PriceOrderLabel>
              </PriceOrderResume>

              <ConfirmOrderButton>confirmar pedido</ConfirmOrderButton>
            </PaymentList>
          </FormCard>
        </CheckoutOrder>
      </CheckoutForm>
    </CheckoutContainer>
  )
}
