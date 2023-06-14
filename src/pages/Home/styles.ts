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
  grid-template-columns: calc(1120px / 2) calc(1120px / 2);

  justify-content: center;
  gap: 3.5rem;

  padding: 5.75rem 10rem;
  position: relative;

  background-image: url('src/common/assets/images/Background.svg');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;

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
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;

  margin-top: 4.125rem;

  div {
    display: flex;
    gap: 0.75rem;
    align-items: center;

    p {
      font-size: 16px;
      color: #574f4d;
    }
  }
`
