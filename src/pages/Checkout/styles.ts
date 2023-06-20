import { css, styled } from 'styled-components'

export const CheckoutContainer = styled.div`
  padding: 2.5rem 10rem;
`

export const EmptyCartMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  h1 {
    color: ${({ theme }) => theme.colors['gray-800']};
    font-family: 'Roboto', sans-serif;
    line-height: 130%;
  }

  p {
    line-height: 130%;
    color: ${({ theme }) => theme.colors['gray-700']};
    font-size: 0.875rem;
  }
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
  background: ${({ theme }) => theme.colors['gray-200']};

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
    color: ${({ theme }) => theme.colors['gray-800']};
    font-family: 'Roboto', sans-serif;
    line-height: 130%;
  }

  span {
    line-height: 130%;
    color: ${({ theme }) => theme.colors['gray-700']};
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
      border-color: ${({ theme }) => theme.colors['purple-500']};
      background: ${({ theme }) => theme.colors['purple-300']};
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
    color: ${({ theme }) => theme.colors['gray-700']};
    background: ${({ theme }) => theme.colors['gray-400']};
    border-radius: 6px;
    padding: 1rem;
    cursor: pointer;
    transition: all 0.1s ease-in-out;
    border: 1px solid transparent;

    svg {
      color: ${({ theme }) => theme.colors['purple-500']};
    }

    &:hover {
      background: ${({ theme }) => theme.colors['gray-500']};
    }
  }
`

export const FormInput = styled.input`
  background: ${({ theme }) => theme.colors['gray-300']};
  padding: 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors['gray-400']};
  border-radius: 4px;
  outline: none;

  ${({ size }) =>
    size &&
    css`
      width: ${size}px;
    `};

  &::placeholder {
    color: ${({ theme }) => theme.colors['gray-600']};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors['yellow-900']};
  }
`

export const PaymentList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  .divider {
    height: 0px;
    border: 1px solid ${({ theme }) => theme.colors['gray-400']};
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
  color: ${({ theme }) => theme.colors['gray-700']};

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
  background: ${({ theme }) => theme.colors['yellow-500']};
  color: ${({ theme }) => theme.colors.white};
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
    background: ${({ theme }) => theme.colors['yellow-900']};
  }
`
