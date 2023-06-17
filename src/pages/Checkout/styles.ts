import { css, styled } from 'styled-components'

export const CheckoutContainer = styled.div`
  padding: 2.5rem 10rem;
`

export const CheckoutForm = styled.form`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 2rem;
`

export const CheckoutOrder = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  > p {
    font-weight: 700;
    font-size: 1.125rem;
  }
`

interface FormCardProps {
  variant?: 'address' | 'payment'
}

export const FormCard = styled.div<FormCardProps>`
  background: #f3f2f2;

  border-radius: ${({ variant }) =>
    variant === 'payment' ? '6px 44px;' : '6px'};

  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const FormCardHeader = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const FormCardHeaderTitle = styled.div`
  p {
    color: #403937;
    font-family: 'Roboto', sans-serif;
    line-height: 130%;
  }

  span {
    line-height: 130%;
    color: #574f4d;
    font-size: 0.875rem;
  }
`

export const FormCardForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

interface FormCardGroupProps {
  grid: string
}

export const FormCardGroup = styled.div<FormCardGroupProps>`
  display: grid;
  grid-template-columns: ${({ grid }) => grid};
  gap: 0.75rem;

  input[type='radio'] {
    display: none;

    &:checked + label {
      border-color: #8047f8;
      background: #ebe5f9;
    }
  }

  label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-transform: uppercase;
    line-height: 160%;
    font-size: 12px;
    font-family: 'Roboto', sans-serif;
    color: #574f4d;
    background: #e6e5e5;
    border-radius: 6px;
    padding: 1rem;
    cursor: pointer;
    transition: all 0.1s ease-in-out;
    border: 1px solid transparent;

    svg {
      color: #8047f8;
    }

    &:hover {
      background: #d7d5d5;
    }
  }
`

export const FormInput = styled.input`
  background: #eeeded;
  padding: 0.75rem;
  border: 1px solid #e6e5e5;
  border-radius: 4px;
  outline: none;

  ${({ size }) =>
    size &&
    css`
      width: ${size}px;
    `};

  &::placeholder {
    color: #8d8686;
  }

  &:focus {
    border-color: #c47f17;
  }
`

export const PaymentList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  .divider {
    height: 0px;
    border: 1px solid #e6e5e5;
  }
`

export const PriceOrderResume = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

interface PriceOrderLabelProps {
  total?: string | undefined
}

export const PriceOrderLabel = styled.div<PriceOrderLabelProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-family: 'Roboto', sans-serif;
  color: #574f4d;

  ${({ total }) =>
    total &&
    css`
      font-weight: 700;
      font-size: 1.25rem;
    `};

  p {
    font-size: ${({ total }) => (total ? '1.25rem' : '0.875rem')};
  }
`

export const ConfirmOrderButton = styled.button`
  background: #dbac2c;
  color: #fff;
  padding: 0.75rem;
  border: none;
  border-radius: 6px;
  text-transform: uppercase;

  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 0.875rem;
  cursor: pointer;
  line-height: 160%;

  transition: all 0.1s ease-in-out;

  &:hover {
    background: #c47f17;
  }
`
