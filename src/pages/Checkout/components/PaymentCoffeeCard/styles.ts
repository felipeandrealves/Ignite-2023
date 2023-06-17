import { styled } from 'styled-components'

export const PaymentCoffeeCardContainer = styled.div`
  display: flex;
  gap: 1.25rem;

  img {
    width: 64px;
    height: 64px;
  }
`

export const Price = styled.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  color: #574f4d;
`

export const CoffeeDescription = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 0.5rem;

  > p {
    color: #403937;
    line-height: 130%;
    font-family: 'Roboto', sans-serif;
  }

  > div {
    display: flex;
    gap: 0.5rem;
  }
`

export const RemoveCoffeeButton = styled.button`
  background: #e6e5e5;
  border: none;
  color: #574f4d;
  font-family: 'Roboto', sans-serif;
  font-size: 0.75rem;
  border-radius: 6px;
  padding: 0.375rem 0.75rem;
  text-transform: uppercase;
  cursor: pointer;
  font-weight: 400;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  transition: all 0.1s ease-in-out;

  svg {
    color: #8047f8;
  }

  &:hover {
    background: #d7d5d5;
  }
`
