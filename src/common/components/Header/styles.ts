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
  background: #ebe5f9;
  color: #4b2995;

  padding: 0 0.5rem;

  font-family: 'Roboto', sans-serif;

  font-size: 0.75rem;
  font-weight: 400;

  svg {
    color: #8047f8;
  }
`

export const ShoppingCartButton = styled.button`
  border: none;

  width: 38px;
  height: 38px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 6px;

  background: #f1e9c9;
  color: #c47f17;

  cursor: pointer;
`
