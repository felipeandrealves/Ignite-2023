import { Outlet } from 'react-router-dom'

import { Content, LayoutContainer } from './styles'
import { Header } from '../../components/Header'

export const DefaultLayout = () => {
  return (
    <LayoutContainer>
      <Header />

      <Content>
        <Outlet />
      </Content>
    </LayoutContainer>
  )
}
