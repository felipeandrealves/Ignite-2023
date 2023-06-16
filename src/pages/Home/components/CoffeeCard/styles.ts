import { styled } from 'styled-components'

export const CoffeeCardContainer = styled.div`
  background: #f3f2f2;
  border-radius: 6px 36px;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 1.25rem;

  img {
    margin-top: calc(-1.5rem - 20px);
    margin-bottom: 0.75rem;
  }

  > span {
    font-family: 'Roboto', sans-serif;
    padding: 0.25rem 0.5rem;
    border-radius: 999px;
    background: #f1e9c9;
    color: #c47f17;
    font-size: 0.625rem;
    line-height: 130%;
    font-weight: 700;

    text-transform: uppercase;

    margin-bottom: 1rem;
  }

  h1 {
    color: #403937;
    font-weight: 700;
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
  }

  > p {
    text-align: center;
    font-family: 'Roboto', sans-serif;
    color: #8d8686;
    font-size: 0.875rem;
    margin-bottom: 2rem;
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
    color: #574f4d;
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
  color: #fff;
  background: #4b2995;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;

  transition: all 0.1s ease-in-out;

  &:hover {
    background: #8047f8;
  }
`
