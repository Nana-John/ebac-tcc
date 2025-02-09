import { SobreContainer, Historia, Galeria, Titulo, Text } from './styles'

const SobreNos = () => {
  return (
    <section id="sobre">
      <SobreContainer>
        <Titulo>Sobre Nós</Titulo>
        <Historia>
          <Text>
            Fundado em 1995, a <strong>Forneria Dom Giovanni</strong> traz a
            verdadeira essência da culinária italiana para o coração da cidade.
            Utilizando apenas ingredientes frescos e importados, nossas receitas
            seguem tradições familiares passadas por gerações.
          </Text>
        </Historia>
        <Galeria>
          <img src="/images/chef.jpeg" alt="Chef preparando prato italiano" />
        </Galeria>
      </SobreContainer>
    </section>
  )
}

export default SobreNos
