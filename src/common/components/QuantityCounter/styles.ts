import { styled } from 'styled-components'

export const QuantityCounterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 38px;

  background: #e6e5e5;
  border-radius: 6px;
  padding: 0 0.5rem;

  gap: 4px;

  p {
    width: 20px;
    color: #272221;
    line-height: 130%;
    font-size: 1rem;
    font-family: 'Roboto', sans-serif;
    text-align: center;
  }

  > button {
    border: none;
    width: 14px;
    height: 14px;
    color: #8047f8;
    background: transparent;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    font-weight: 700;

    transition: all 0.1s ease-in-out;

    &:hover {
      color: #4b2995;
    }
  }
`
