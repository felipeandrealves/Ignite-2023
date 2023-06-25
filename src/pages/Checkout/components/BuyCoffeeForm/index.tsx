import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { useFormContext } from 'react-hook-form'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

import {
  BuyCoffeeContainer,
  FormCard,
  FormCardContent,
  FormCardGroup,
  FormCardHeader,
  FormCardHeaderTitle,
  FormInput,
} from './styles'
import { getCEP } from '../../../../common/services/viacep'
import { BuyCoffeeFormData } from '../..'

const debounce = (fn: Function, time: number) => {
  setTimeout(() => fn(), time)
}

export const BuyCoffeeForm = () => {
  const { register, formState, watch, setValue } =
    useFormContext<BuyCoffeeFormData>()

  const [isFetching, setIsFetching] = useState(false)

  const zipCodeWatch = watch('address.zipCode')

  useEffect(() => {
    if (zipCodeWatch?.length === 8 || zipCodeWatch?.length === 9) {
      setIsFetching(true)

      debounce(
        () =>
          getCEP(zipCodeWatch)
            .then((cepReturned) => {
              setValue('address.street', cepReturned.logradouro)
              setValue('address.neighborhood', cepReturned.bairro)
              setValue('address.city', cepReturned.localidade)
              setValue('address.state', cepReturned.uf)
              setValue('address.zipCode', cepReturned.cep)
            })
            .catch(() => {
              toast.error('CEP nao encontrado', {
                position: toast.POSITION.BOTTOM_CENTER,
              })
            })
            .finally(() => setIsFetching(false)),
        1000,
      )
    }
  }, [setValue, zipCodeWatch])

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
            error={formState.errors.address?.zipCode?.message}
            disabled={isFetching}
            {...register('address.zipCode')}
          />

          <FormInput
            type="text"
            placeholder="Rua"
            error={formState.errors.address?.street?.message}
            disabled={isFetching}
            {...register('address.street')}
          />

          <FormCardGroup grid="200px 1fr">
            <FormInput
              type="text"
              placeholder="Numero"
              error={formState.errors.address?.number?.message}
              {...register('address.number')}
            />

            <FormInput
              type="text"
              placeholder="Complemento"
              error={formState.errors.address?.complement?.message}
              {...register('address.complement')}
            />
          </FormCardGroup>

          <FormCardGroup grid="200px 1fr 60px">
            <FormInput
              type="text"
              placeholder="Bairro"
              error={formState.errors.address?.neighborhood?.message}
              disabled={isFetching}
              {...register('address.neighborhood')}
            />

            <FormInput
              type="text"
              placeholder="Cidade"
              error={formState.errors.address?.city?.message}
              disabled={isFetching}
              {...register('address.city')}
            />

            <FormInput
              type="text"
              placeholder="UF"
              error={formState.errors.address?.state?.message}
              disabled={isFetching}
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
              id="cash"
              value="cash"
              {...register('paymentType')}
            />
            <label htmlFor="cash">
              <Money size={16} />
              dinheiro
            </label>
          </FormCardGroup>
        </FormCardContent>
      </FormCard>
    </BuyCoffeeContainer>
  )
}
