import { useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import {
  HeaderContainer,
  Logo,
  NavMenu,
  NavItem,
  Actions,
  OrderButton,
  CartIcon
} from './styles'
import logo from '../../assets/images/logo3.png'

const Header = () => {
  const [cartCount] = useState(2) // Simulando itens no carrinho

  return (
    <HeaderContainer>
      <Logo>
        <img src={logo} alt="Logo do Restaurante" />
      </Logo>

      <NavMenu>
        <NavItem href="#home">Home</NavItem>
        <NavItem href="#cardapio">Cardápio</NavItem>
        <NavItem href="#sobre">Sobre</NavItem>
        <NavItem href="#contato">Contato</NavItem>
      </NavMenu>

      <Actions>
        <OrderButton>Fazer Pedido</OrderButton>
        <CartIcon>
          <FaShoppingCart size={20} />
          {cartCount > 0 && <span>{cartCount}</span>}
        </CartIcon>
      </Actions>
    </HeaderContainer>
  )
}

export default Header
