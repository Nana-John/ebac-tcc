import React from 'react'
import * as S from './styles'

const pratosEspeciais = [
  {
    id: 1,
    nome: 'Spaghetti Carbonara',
    preco: 'R$ 45,00',
    imagem: '/images/carbonara.jpg'
  },
  {
    id: 2,
    nome: 'Pizza Margherita',
    preco: 'R$ 50,00',
    imagem: '/images/margherita.jpg'
  }
]

const depoimentos = [
  {
    id: 1,
    nome: 'João Silva',
    comentario: 'Melhor restaurante italiano da cidade!',
    nota: '5/5'
  }
]

const Destaques: React.FC = () => {
  return (
    <div>
      <S.PratosGrid>
        {pratosEspeciais.map((prato) => (
          <S.PratoCard key={prato.id}>
            <img src={prato.imagem} alt={prato.nome} />
            <h3>{prato.nome}</h3>
            <p>{prato.preco}</p>
          </S.PratoCard>
        ))}
      </S.PratosGrid>

      <S.Depoimentos>
        {depoimentos.map((dep) => (
          <S.DepoimentoItem as="div" key={dep.id}>
            <strong>{dep.nota}</strong>
            <p>&quot;{dep.comentario}&quot;</p>
            <span>- {dep.nome}</span>
          </S.DepoimentoItem>
        ))}
      </S.Depoimentos>
    </div>
  )
}

export default Destaques
