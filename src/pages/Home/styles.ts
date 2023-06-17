import { styled } from 'styled-components'

export const IntroSectionContainer = styled.section`
  display: grid;
  grid-template-columns: 1.25fr 1fr;

  justify-content: center;
  gap: 3.5rem;

  padding: 5.75rem 0;
  position: relative;

  max-width: 1120px;
  margin: 0 auto;
`

export const Intro = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`

export const IntroTitle = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1rem;

  > h1 {
    font-size: 48px;
    font-weight: bold;
    line-height: 130%;
    color: ${({ theme }) => theme.colors['gray-900']};
  }

  > p {
    font-size: 20px;
    color: ${({ theme }) => theme.colors['gray-800']};
  }
`

export const CoffeeListContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.375rem;

  padding: 2rem 10rem 0;

  h1 {
    color: ${({ theme }) => theme.colors['gray-800']};
    font-size: 2rem;
  }
`

export const CoffeeList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 2.5rem;
  column-gap: 2rem;
`
