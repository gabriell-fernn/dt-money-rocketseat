import { HeaderContainer, HeaderContent } from './styles'
import logoImg from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />
        <button type="button">Nova Transação</button>
      </HeaderContent>
    </HeaderContainer>
  )
}
