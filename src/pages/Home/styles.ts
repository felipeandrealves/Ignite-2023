import { styled } from 'styled-components'

export const Profile = styled.div`
  display: flex;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors['base-profile']};
  padding: 2rem;
  gap: 2rem;

  img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
  }
`

export const ProfileDescription = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  flex: 1;
  gap: 0.5rem;

  h1 {
    font-size: 1.5rem;
    font-weight: 700;
  }

  div {
    display: flex;
    gap: 1.5rem;
    margin-top: auto;

    i {
      margin-right: 0.5rem;
      width: 18px;
      height: 18px;
      color: ${({ theme }) => theme.colors['base-label']};
    }
  }

  a {
    position: absolute;
    top: 0;
    right: 0;
    color: ${({ theme }) => theme.colors.blue};
    display: flex;
    gap: 0.5rem;
    text-transform: uppercase;
    align-items: center;
    cursor: pointer;
    text-decoration: none;

    i {
      color: ${({ theme }) => theme.colors.blue};
    }

    &:hover {
      text-decoration: underline;
    }
  }
`
