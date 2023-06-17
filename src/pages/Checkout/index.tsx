import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import {
  CheckoutContainer,
  CheckoutForm,
  CheckoutOrder,
  ConfirmOrderButton,
  FormCard,
  PaymentList,
  PriceOrderLabel,
  PriceOrderResume,
} from './styles'
import { PaymentCoffeeCard } from './components/PaymentCoffeeCard'
import { BuyCoffeeForm } from './components/BuyCoffeeForm'
import { useCoffeeContext } from '../../common/contexts/CoffeeContext'

const BuyCoffeeFormValidationSchema = zod.object({
  address: zod.object({
    street: zod.string().min(3, 'Rua inválida'),
    number: zod.string().min(1, 'Número inválido'),
    complement: zod.string().min(3, 'Complemento inválido'),
    neighborhood: zod.string().min(3, 'Bairro inválido'),
    city: zod.string().min(3, 'Cidade inválida'),
    state: zod.string().min(2, 'Estado inválido'),
    zipCode: zod.string().min(8, 'CEP inválido'),
  }),
  paymentType: zod.enum(['creditCard', 'debitCard', 'money']),
})

export type BuyCoffeeFormData = zod.infer<typeof BuyCoffeeFormValidationSchema>

export const Checkout = () => {
  const { coffeeCart } = useCoffeeContext()

  const buyCoffeeForm = useForm<BuyCoffeeFormData>({
    resolver: zodResolver(BuyCoffeeFormValidationSchema),
    defaultValues: {
      address: {
        street: '',
        number: '',
        complement: '',
        neighborhood: '',
        city: '',
        state: '',
        zipCode: '',
      },
      paymentType: 'creditCard',
    },
  })

  const { handleSubmit } = buyCoffeeForm

  const handleCreateNewOrder = (data: BuyCoffeeFormData) => {
    console.log(data)
  }

  return (
    <CheckoutContainer>
      <CheckoutForm action="" onSubmit={handleSubmit(handleCreateNewOrder)}>
        <CheckoutOrder>
          <p>Complete seu pedido</p>

          <FormProvider {...buyCoffeeForm}>
            <BuyCoffeeForm />
          </FormProvider>
        </CheckoutOrder>

        <CheckoutOrder>
          <p>Cafés selecionados</p>

          <FormCard variant="payment">
            <PaymentList>
              {coffeeCart.map((coffee) => (
                <>
                  <PaymentCoffeeCard />

                  <div className="divider" />
                </>
              ))}

              <PriceOrderResume>
                <PriceOrderLabel>
                  <p>Total de itens</p>
                  <span>R$ 29,70</span>
                </PriceOrderLabel>

                <PriceOrderLabel>
                  <p>Entrega</p>
                  <span>R$ 3,50</span>
                </PriceOrderLabel>

                <PriceOrderLabel total="true">
                  <p>Total</p>
                  <span>R$ 33,20</span>
                </PriceOrderLabel>
              </PriceOrderResume>

              <ConfirmOrderButton type="submit">
                confirmar pedido
              </ConfirmOrderButton>
            </PaymentList>
          </FormCard>
        </CheckoutOrder>
      </CheckoutForm>
    </CheckoutContainer>
  )
}
