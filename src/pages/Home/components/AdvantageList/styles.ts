import { styled } from 'styled-components'

export const AdvantagesList = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  row-gap: 1.5rem;
`

const ADVANTAGE_COLORS = {
  orange: 'yellow-900',
  gray: 'gray-700',
  yellow: 'yellow-500',
  purple: 'purple-500',
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
    background: ${({ color, theme }) => theme.colors[ADVANTAGE_COLORS[color]]};
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      color: ${({ theme }) => theme.colors.white};
    }
  }

  p {
    font-family: 'Roboto', sans-serif;
    line-height: 130%;
    font-size: 16px;
    color: ${({ theme }) => theme.colors['gray-700']};
  }
`
