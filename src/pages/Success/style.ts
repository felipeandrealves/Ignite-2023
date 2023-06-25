import { styled } from 'styled-components'

export const SuccessContainer = styled.div`
  padding: 2rem 10rem;
  display: grid;
  grid-template-areas:
    'title title'
    'content illustration';
  row-gap: 2.5rem;
  column-gap: 6.375rem;

  & > div:nth-child(1) {
    grid-area: title;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;

    h1 {
      color: ${({ theme }) => theme.colors['yellow-900']};
      font-size: 2rem;
      font-weight: 800;
      line-height: 130%;
    }

    p {
      color: ${({ theme }) => theme.colors['gray-800']};
      font-family: 'Roboto', sans-serif;
      line-height: 130%;
      font-size: 1.25rem;
    }
  }

  & > div:nth-child(3) {
    grid-area: illustration;
  }
`

export const OrderDescription = styled.div`
  grid-area: content;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2.5rem;

  background: linear-gradient(white, white) padding-box,
    linear-gradient(
        to right,
        ${({ theme }) => theme.colors['yellow-500']},
        ${({ theme }) => theme.colors['purple-500']}
      )
      border-box;
  border-radius: 6px 36px;
  border: 2px solid transparent;
`

const INFO_TYPE_COLORS = {
  local: 'purple-500',
  time: 'yellow-500',
  payment: 'yellow-900',
} as const

interface InfoProps {
  type: keyof typeof INFO_TYPE_COLORS
}

export const Info = styled.div<InfoProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.75rem;

  & > div:first-child {
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10000px;
    background-color: ${({ theme, type }) =>
      theme.colors[INFO_TYPE_COLORS[type]]};
    color: ${({ theme }) => theme.colors.white};
  }

  p {
    font-family: 'Roboto', sans-serif;
    line-height: 130%;
    color: ${({ theme }) => theme.colors['gray-700']};
  }
`
