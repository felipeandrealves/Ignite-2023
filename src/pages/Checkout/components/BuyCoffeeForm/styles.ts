import { css, styled } from 'styled-components'

export const BuyCoffeeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
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

export const FormCardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

interface FormCardGroupProps {
  grid?: string
}

export const FormCardGroup = styled.div<FormCardGroupProps>`
  display: grid;
  grid-template-columns: ${({ grid }) => grid || '1fr'};
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

interface FormInputProps {
  error?: string
}

export const FormInput = styled.input<FormInputProps>`
  background: #eeeded;
  padding: 0.75rem;
  border: 1px solid
    ${({ error, theme }) =>
      error ? theme.colors['yellow-900'] : theme.colors['gray-400']};
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
