import {
  Container,
  FooterContent,
  NavLinks,
  SocialIcons,
  Legal
} from './styles'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <Container>
      <FooterContent>
        <NavLinks>
          <a href="/home">Home</a>
          <a href="/cardapio">Cardápio</a>
          <a href="/reservas">Reservas</a>
          <a href="/sobre">Sobre Nós</a>
          <a href="/contato">Contato</a>
        </NavLinks>

        <SocialIcons>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
        </SocialIcons>
      </FooterContent>

      <Legal>
        <p>
          © {new Date().getFullYear()} Efood - Todos os direitos reservados.
        </p>
        <a href="/privacidade">Política de Privacidade</a>
        <a href="/termos">Termos de Uso</a>
      </Legal>
    </Container>
  )
}

export default Footer
