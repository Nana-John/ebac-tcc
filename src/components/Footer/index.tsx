import { useState } from 'react'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
import {
  FooterContainer,
  FooterContent,
  NavLinks,
  SocialIcons,
  LegalInfo,
  ReservationForm,
  FormTitle,
  FormInput,
  FormSelect
} from './styles'

const Footer = () => {
  const [formData, setFormData] = useState({
    nome: '',
    data: '',
    horario: '',
    pessoas: '1'
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Simulação de envio de confirmação via WhatsApp
    const mensagem = `Olá! Gostaria de confirmar minha reserva no restaurante.
    Nome: ${formData.nome}
    Data: ${formData.data}
    Horário: ${formData.horario}
    Pessoas: ${formData.pessoas}`

    const whatsappURL = `https://wa.me/5511999999999?text=${encodeURIComponent(
      mensagem
    )}`
    window.open(whatsappURL, '_blank')

    alert(
      'Sua reserva foi enviada com sucesso! Você será redirecionado para o WhatsApp para confirmar.'
    )
  }

  return (
    <section id="footer">
      <FooterContainer>
        <FooterContent>
          {/* Links de Navegação */}
          <NavLinks>
            <a href="#home">Home</a>
            <a href="#cardapio">Cardápio</a>
            <a href="#footer">Reservas</a>
            <a href="#sobre">Sobre Nós</a>
            <a href="#contato">Contato</a>
          </NavLinks>

          {/* Redes Sociais com Hover */}
          <SocialIcons>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
          </SocialIcons>
        </FooterContent>

        {/* Formulário de Reserva */}
        <ReservationForm as="form" onSubmit={handleSubmit}>
          <FormTitle>Faça sua Reserva</FormTitle>
          <FormInput
            as="input"
            type="text"
            name="nome"
            placeholder="Nome Completo"
            value={formData.nome}
            onChange={handleChange}
            required
          />
          <FormInput
            as="input"
            type="date"
            name="data"
            value={formData.data}
            onChange={handleChange}
            required
          />
          <FormInput
            as="input"
            type="time"
            name="horario"
            value={formData.horario}
            onChange={handleChange}
            required
          />
          <FormSelect
            as="select"
            name="pessoas"
            value={formData.pessoas}
            onChange={handleChange}
          >
            {Array.from({ length: 10 }, (_, i) => (
              <option key={i} value={i + 1}>
                {i + 1} Pessoa{i + 1 > 1 ? 's' : ''}
              </option>
            ))}
          </FormSelect>
        </ReservationForm>

        {/* Informações Legais */}
        <LegalInfo>
          <p>
            © {new Date().getFullYear()} Efood - Todos os direitos reservados.
          </p>
          <a href="/privacidade">Política de Privacidade</a>
          <a href="/termos">Termos de Uso</a>
        </LegalInfo>
      </FooterContainer>
    </section>
  )
}

export default Footer
