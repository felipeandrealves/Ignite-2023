import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2rem 10rem;

  nav {
    display: flex;
    align-items: center;

    gap: 0.75rem;
  }
`

export const Location = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  height: 38px;

  border-radius: 6px;
  background: ${({ theme }) => theme.colors['purple-300']};
  color: ${({ theme }) => theme.colors['purple-900']};

  padding: 0 0.5rem;

  font-family: 'Roboto', sans-serif;

  font-size: 0.75rem;
  font-weight: 400;

  svg {
    color: ${({ theme }) => theme.colors['purple-500']};
  }
`

interface ShoppingCartButtonProps {
  amount: number
}

export const ShoppingCartButton = styled.button<ShoppingCartButtonProps>`
  border: none;

  width: 38px;
  height: 38px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 6px;

  background: ${({ theme }) => theme.colors['yellow-300']};
  color: ${({ theme }) => theme.colors['yellow-900']};

  cursor: pointer;
  position: relative;

  &:before {
    content: '${({ amount }) => amount}';
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 999px;

    display: flex;
    justify-content: center;
    align-items: center;

    top: -10px;
    right: -10px;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 0.75rem;

    background: ${({ theme }) => theme.colors['yellow-900']};
    color: ${({ theme }) => theme.colors.white};

    visibility: ${({ amount }) => (amount > 0 ? 'visible' : 'hidden')};
  }
`

export const ToggleThemeButton = styled.button`
  border: none;

  width: 38px;
  height: 38px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 6px;

  background: ${({ theme }) => theme.colors['gray-500']};
  color: ${({ theme }) => theme.colors['purple-500']};

  cursor: pointer;
`
