import {
  SobreContainer,
  Historia,
  Galeria,
  Diferenciais,
  Foto,
  Titulo,
  Text
} from './styles'

const SobreNos = () => {
  return (
    <SobreContainer>
      <Titulo>Sobre Nós</Titulo>
      <Historia>
        <Text>
          Fundado em 1995, o <strong>Ristorante Efood</strong> traz a verdadeira
          essência da culinária italiana para o coração da cidade. Utilizando
          apenas ingredientes frescos e importados, nossas receitas seguem
          tradições familiares passadas por gerações.
        </Text>
      </Historia>
      <Galeria>
        <img src="/images/chef.jpeg" alt="Chef preparando prato italiano" />
        <img src="images/equipe.jpeg" alt="Equipe do restaurante" />
        <img
          src="/images/restaurante-interno.jpeg"
          alt="Restaurante internamente"
        />
      </Galeria>

      <Diferenciais>
        <Titulo>Nossos Diferenciais</Titulo>
        <ul>
          <li>🍅 Ingredientes 100% frescos e orgânicos</li>
          <li>🍷 Vinhos importados diretamente da Itália</li>
          <li>🏆 Prêmios de excelência gastronômica</li>
          <li>❤️ Atendimento personalizado e acolhedor</li>
        </ul>
      </Diferenciais>
    </SobreContainer>
  )
}

export default SobreNos
