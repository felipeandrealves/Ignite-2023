import { styled } from 'styled-components'

export const AdvantagesList = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

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
