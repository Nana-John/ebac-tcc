import React from 'react'
import * as S from './styles'

const Destaques: React.FC = () => {
  const destaques = [
    {
      src: '/images/fresco.png',
      title: 'Ingredientes Frescos',
      text: '100% frescos e orgânicos, direto da fazenda para sua mesa.'
    },
    {
      src: '/images/vinho.png',
      title: 'Vinhos Importados',
      text: 'Vinhos selecionados diretamente da Itália, para harmonizar com seu prato.'
    },
    {
      src: '/images/premios.png',
      title: 'Excelência Gastronômica',
      text: 'Reconhecidos com prêmios de excelência em culinária italiana.'
    }
  ]

  return (
    <S.DestaquesSection>
      <S.DestaquesTitle>Confira nossos destaques</S.DestaquesTitle>
      <S.DestaquesGrid>
        {destaques.map((destaque, index) => (
          <S.DestaqueCard as="a" key={index}>
            <S.DestaqueIcon>
              <img src={destaque.src} alt={destaque.title} />
            </S.DestaqueIcon>
            <S.DestaqueTitle>{destaque.title}</S.DestaqueTitle>
            <S.DestaqueText>{destaque.text}</S.DestaqueText>
          </S.DestaqueCard>
        ))}
      </S.DestaquesGrid>
    </S.DestaquesSection>
  )
}

export default Destaques
