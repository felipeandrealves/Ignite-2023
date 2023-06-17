import { styled } from 'styled-components'

export const CoffeeCardContainer = styled.div`
  background: ${({ theme }) => theme.colors['gray-200']};
  border-radius: 6px 36px;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 1.25rem;

  img {
    margin-top: calc(-1.5rem - 20px);
    margin-bottom: 0.75rem;
  }

  h1 {
    color: ${({ theme }) => theme.colors['gray-800']};
    font-weight: 700;
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
  }

  > p {
    text-align: center;
    font-family: 'Roboto', sans-serif;
    color: ${({ theme }) => theme.colors['gray-600']};
    font-size: 0.875rem;
    margin-bottom: 2rem;
  }
`

export const CoffeeLabels = styled.div`
  display: flex;
  gap: 0.25rem;

  .label {
    font-family: 'Roboto', sans-serif;
    padding: 0.25rem 0.5rem;
    border-radius: 999px;
    background: ${({ theme }) => theme.colors['yellow-300']};
    color: ${({ theme }) => theme.colors['yellow-900']};
    font-size: 0.625rem;
    line-height: 130%;
    font-weight: 700;

    text-transform: uppercase;

    margin-bottom: 1rem;
  }
`

export const CoffeeCardFooter = styled.div`
  width: 100%;
  display: flex;

  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    gap: 0.5rem;
  }

  p {
    color: ${({ theme }) => theme.colors['gray-700']};
    line-height: 130%;
    font-size: 0.875rem;
    font-family: 'Roboto', sans-serif;

    span {
      font-weight: 700;
      font-size: 1.5rem;
    }
  }
`

export const CoffeeCardFooterBuyCoffeeButton = styled.button`
  width: 38px;
  height: 38px;
  border-radius: 6px;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors['purple-900']};

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;

  transition: all 0.1s ease-in-out;

  &:hover {
    background: ${({ theme }) => theme.colors['purple-500']};
  }
`
