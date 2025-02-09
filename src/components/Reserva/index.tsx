import { useState } from 'react'
import { FormContainer, Input, Select, SubmitButton, Title } from './styles'

const Reserva = () => {
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

    // Simulação de envio de confirmação via WhatsApp (pode ser adaptado para e-mail)
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
    <FormContainer as="form" onSubmit={handleSubmit}>
      <Title>Faça sua Reserva</Title>
      <Input
        as="input"
        type="text"
        name="nome"
        placeholder="Nome Completo"
        value={formData.nome}
        onChange={(e) => handleChange(e)}
        required
      />

      <Input
        as="input"
        type="date"
        name="data"
        value={formData.data}
        onChange={handleChange}
        required
      />
      <Input
        as="input"
        type="time"
        name="horario"
        value={formData.horario}
        onChange={handleChange}
        required
      />
      <Select
        as="select"
        name="pessoas"
        value={formData.pessoas}
        onChange={handleChange}
      >
        {[...Array(10)].map((_, i) => (
          <option key={i + 1} value={i + 1}>
            {i + 1} Pessoa(s)
          </option>
        ))}
      </Select>
      <SubmitButton as="button" type="submit">
        Reservar Mesa
      </SubmitButton>
    </FormContainer>
  )
}

export default Reserva
