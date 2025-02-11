import { useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import {
  HeaderContainer,
  Logo,
  NavMenu,
  NavItem,
  Actions,
  OrderButton,
  CartIcon,
  HamburgerMenu
} from './styles'
import logo from '../../assets/images/logo3.png'

const Header = () => {
  const [cartCount] = useState(2) // Simulando itens no carrinho
  const [open, setOpen] = useState(false) // Controla o estado do menu

  const toggleMenu = () => setOpen(!open) // Alterna a visibilidade do menu

  return (
    <HeaderContainer>
      <Logo>
        <img src={logo} alt="Logo do Restaurante" />
      </Logo>

      <HamburgerMenu as="div" open={open} onClick={toggleMenu}>
        <div />
        <div />
        <div />
      </HamburgerMenu>

      <NavMenu as="nav" open={open}>
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
