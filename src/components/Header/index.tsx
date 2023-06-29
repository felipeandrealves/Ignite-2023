import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'
import Logo from '../../assets/image/logo.svg'

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={Logo} alt="" />

        <NewTransactionButton>Nova transacao</NewTransactionButton>
      </HeaderContent>
    </HeaderContainer>
  )
}
