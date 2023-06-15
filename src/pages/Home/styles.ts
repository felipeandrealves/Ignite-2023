import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100vw;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2rem 0;

  max-width: 1120px;
  margin: 0 auto;

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

export const IntroSectionContainer = styled.section`
  display: grid;
  grid-template-columns: 1.25fr 1fr;

  justify-content: center;
  gap: 3.5rem;

  padding: 5.75rem 0;
  position: relative;

  max-width: 1120px;
  margin: 0 auto;

  h1 {
    font-size: 48px;
    font-weight: bold;
    line-height: 130%;
    color: #272221;
  }

  p {
    font-size: 20px;
    color: #403937;
  }
`

export const Intro = styled.div`
  display: flex;
  flex-direction: column;
`

export const AdvantagesItems = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  margin-top: 4.125rem;
  row-gap: 1.5rem;
`

const ADVANTAGE_COLORS = {
  orange: '#C47F17',
  gray: '#574F4D',
  yellow: '#DBAC2C',
  purple: '#8047F8',
} as const

interface AdvantageProps {
  color: keyof typeof ADVANTAGE_COLORS
}

export const Advantage = styled.div<AdvantageProps>`
  display: flex;
  gap: 0.75rem;
  align-items: center;

  span {
    width: 32px;
    height: 32px;
    border-radius: 999px;
    background: ${({ color }) => ADVANTAGE_COLORS[color]};
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      color: #fff;
    }
  }

  p {
    font-family: 'Roboto', sans-serif;
    line-height: 130%;
    font-size: 16px;
    color: #574f4d;
  }
`

export const CoffeeListContainer = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.375rem;

  padding: 2rem 0 9.75rem;

  h1 {
    color: #403937;
    font-size: 2rem;
  }
`

export const CoffeeList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 2.5rem;
  column-gap: 2rem;
`

export const CoffeeCard = styled.div`
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

  button {
    width: 38px;
    height: 38px;
    border-radius: 6px;
    color: #fff;
    background: #4b2995;

    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`

export const Quantity = styled.div`
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
  }
`
