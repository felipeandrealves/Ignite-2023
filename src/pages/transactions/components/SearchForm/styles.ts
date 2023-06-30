import { styled } from 'styled-components'

export const SearchFormContainer = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  input {
    flex: 1;
    border-radius: 6px;
    border: 0;
    background: ${({ theme }) => theme['gray-900']};
    color: ${({ theme }) => theme['gray-300']};
    padding: 1rem;

    &::placeholder {
      color: ${({ theme }) => theme['gray-500']};
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 1rem;
    background: transparent;
    border: 1px solid ${({ theme }) => theme['green-300']};
    border-radius: 6px;
    color: ${({ theme }) => theme['green-300']};
    font-weight: 700;
    transition: all 0.2s;
    cursor: pointer;

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background: ${({ theme }) => theme['green-500']};
      border: 1px solid ${({ theme }) => theme['green-500']};
      color: ${({ theme }) => theme.white};
    }
  }
`
