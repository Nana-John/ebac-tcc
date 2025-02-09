import { SobreContainer, Historia, Galeria, Titulo, Text } from './styles'

const SobreNos = () => {
  return (
    <SobreContainer>
      <Titulo>Sobre Nós</Titulo>
      <Historia>
        <Text>
          Fundado em 1995, o <strong>Ristorante Dom Giovanni</strong> traz a
          verdadeira essência da culinária italiana para o coração da cidade.
          Utilizando apenas ingredientes frescos e importados, nossas receitas
          seguem tradições familiares passadas por gerações.
        </Text>
      </Historia>
      <Galeria>
        <img src="/images/chef.jpeg" alt="Chef preparando prato italiano" />
      </Galeria>
    </SobreContainer>
  )
}

export default SobreNos
