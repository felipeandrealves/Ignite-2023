import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { useFormContext } from 'react-hook-form'

import {
  BuyCoffeeContainer,
  FormCard,
  FormCardContent,
  FormCardGroup,
  FormCardHeader,
  FormCardHeaderTitle,
  FormInput,
} from './styles'
import { BuyCoffeeFormData } from '../..'

export const BuyCoffeeForm = () => {
  const { register, formState } = useFormContext<BuyCoffeeFormData>()

  return (
    <BuyCoffeeContainer>
      <FormCard>
        <FormCardHeader>
          <MapPinLine size={22} color="#C47F17" />

          <FormCardHeaderTitle>
            <p>Endereço de Entrega</p>
            <span>Informe o endereço onde deseja receber seu pedido</span>
          </FormCardHeaderTitle>
        </FormCardHeader>

        <FormCardContent>
          <FormInput
            type="text"
            size={200}
            placeholder="CEP"
            error={!!formState.errors.address?.zipCode}
            {...register('address.zipCode')}
          />

          <FormInput
            type="text"
            placeholder="Rua"
            {...register('address.street')}
          />

          <FormCardGroup grid="200px 1fr">
            <FormInput
              type="text"
              placeholder="Numero"
              {...register('address.number')}
            />

            <FormInput
              type="text"
              placeholder="Complemento"
              {...register('address.complement')}
            />
          </FormCardGroup>

          <FormCardGroup grid="200px 1fr 60px">
            <FormInput
              type="text"
              placeholder="Bairro"
              {...register('address.neighborhood')}
            />

            <FormInput
              type="text"
              placeholder="Cidade"
              {...register('address.city')}
            />

            <FormInput
              type="text"
              placeholder="UF"
              {...register('address.state')}
            />
          </FormCardGroup>
        </FormCardContent>
      </FormCard>

      <FormCard>
        <FormCardHeader>
          <CurrencyDollar size={22} color="#8047F8" />

          <FormCardHeaderTitle>
            <p>Pagamento</p>

            <span>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </span>
          </FormCardHeaderTitle>
        </FormCardHeader>

        <FormCardContent>
          <FormCardGroup grid="1fr 1fr 1fr">
            <input
              type="radio"
              id="credit-card"
              value="creditCard"
              {...register('paymentType')}
            />
            <label htmlFor="credit-card">
              <CreditCard size={16} /> cartão de crédito
            </label>

            <input
              type="radio"
              id="debit-card"
              value="debitCard"
              {...register('paymentType')}
            />
            <label htmlFor="debit-card">
              <Bank size={16} />
              cartão de débito
            </label>

            <input
              type="radio"
              id="money"
              value="money"
              {...register('paymentType')}
            />
            <label htmlFor="money">
              <Money size={16} />
              dinheiro
            </label>
          </FormCardGroup>
        </FormCardContent>
      </FormCard>
    </BuyCoffeeContainer>
  )
}
