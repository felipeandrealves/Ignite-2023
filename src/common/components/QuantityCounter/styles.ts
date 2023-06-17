import { styled } from 'styled-components'

export const QuantityCounterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 38px;

  background: ${({ theme }) => theme.colors['gray-400']};
  border-radius: 6px;
  padding: 0 0.5rem;

  gap: 4px;

  p {
    width: 20px;
    color: ${({ theme }) => theme.colors['gray-900']};
    line-height: 130%;
    font-size: 1rem;
    font-family: 'Roboto', sans-serif;
    text-align: center;
  }

  > button {
    border: none;
    width: 14px;
    height: 14px;
    color: ${({ theme }) => theme.colors['purple-500']};
    background: transparent;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    font-weight: 700;

    transition: all 0.1s ease-in-out;

    &:hover {
      color: ${({ theme }) => theme.colors['purple-900']};
    }
  }
`
