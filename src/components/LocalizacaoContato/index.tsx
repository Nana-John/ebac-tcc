import {
  Container,
  Mapa,
  Informacoes,
  ContatoItem,
  WhatsAppButton
} from './styles'
import { FaMapMarkerAlt, FaPhone, FaClock, FaWhatsapp } from 'react-icons/fa'

const LocalizacaoContato = () => {
  return (
    <Container>
      <Mapa>
        <iframe
          title="Localização Pizzaria Dom Giovanni"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093026!2d144.9556513158387!3d-37.81731397975144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce6e0!2sMelbourne%20CBD!5e0!3m2!1sen!2sau!4v1611289623784!5m2!1sen!2sau"
          width="100%"
          height="100%"
          loading="lazy"
        ></iframe>
      </Mapa>

      <Informacoes>
        <ContatoItem>
          <FaMapMarkerAlt /> <strong>Endereço:</strong> Rua da Itália, 123 - São
          Paulo, SP
        </ContatoItem>
        <ContatoItem>
          <FaPhone /> <strong>Telefone:</strong> (11) 99999-9999
        </ContatoItem>
        <ContatoItem>
          <FaClock /> <strong>Horário:</strong> Ter - Dom | 12h - 23h
        </ContatoItem>
        <WhatsAppButton
          as="a"
          href="https://wa.me/551199999-9999"
          target="_blank"
        >
          <FaWhatsapp /> Fale Conosco
        </WhatsAppButton>
      </Informacoes>
    </Container>
  )
}

export default LocalizacaoContato
