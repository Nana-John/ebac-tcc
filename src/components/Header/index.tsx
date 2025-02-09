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
        <NavItem as="a" href="#">
          Home
        </NavItem>
        <NavItem as="a" href="#">
          Cardápio
        </NavItem>
        <NavItem as="a" href="#">
          Reservas
        </NavItem>
        <NavItem as="a" href="#">
          Sobre
        </NavItem>
        <NavItem as="a" href="#">
          Contato
        </NavItem>
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
