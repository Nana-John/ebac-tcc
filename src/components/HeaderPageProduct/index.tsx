import { useDispatch, useSelector } from 'react-redux'

import { Container, Content, LinkLogo, Title, CartButton } from './styles'

import Logo from '../../assets/images/logo.png'
import { RootState } from '../../store/store'
import { open } from '../../store/reducers/cart'

const HeaderPageProduct = () => {
  const dispatch = useDispatch()

  const { items } = useSelector((state: RootState) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <Container>
      <Content className="container">
        <Title>Restaurantes</Title>
        <LinkLogo to={'/'}>
          <img src={Logo} alt="Logo" />
        </LinkLogo>
        <CartButton onClick={openCart}>
          {items.length} produto(s) no carrinho
        </CartButton>
      </Content>
    </Container>
  )
}

export default HeaderPageProduct
