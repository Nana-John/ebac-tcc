import { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'

import botaoFechar from '../../assets/images/fechar.png'

import { add, open } from '../../store/reducers/cart'

import {
  FoodContainer,
  InfoContainer,
  TitleContent,
  Content,
  Modal,
  ModalContainer,
  ButtonCart,
  ImgBotaoFechar
} from './styles'

interface CardapioItem {
  id: number
  nome: string
  descricao: string
  foto: string
  porcao: string
  preco: number
  quantity?: number
}

interface ModalState {
  isVisible: boolean
  food: CardapioItem | null
}

interface FoodProps {
  items: CardapioItem[]
}

export const formatPrice = (preco?: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco || 0)
}

const FoodCartComponent = ({ items }: FoodProps) => {
  const dispatch = useDispatch()

  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    food: null
  })

  const AddToCart = useCallback(
    (item: CardapioItem) => {
      dispatch(
        add({
          id: item.id,
          name: item.nome,
          description: item.descricao,
          image: item.foto,
          portion: item.porcao,
          price: item.preco,
          quantity: item.quantity || 1
        })
      )
      dispatch(open())
      setModal({ isVisible: false, food: null }) // Fecha o modal após adicionar ao carrinho
    },
    [dispatch]
  )

  const closeModal = useCallback(() => {
    setModal({ isVisible: false, food: null })
  }, [])

  const getDescription = (descricao: string) =>
    descricao.length > 100 ? `${descricao.slice(0, 97)}...` : descricao

  return (
    <>
      <FoodContainer className="container">
        {items.map((food) => (
          <li key={food.id}>
            <img src={food.foto} alt={food.nome} />
            <InfoContainer>
              <TitleContent>
                <h3>{food.nome}</h3>
              </TitleContent>
              <p>{getDescription(food.descricao)}</p>
              <ButtonCart onClick={() => setModal({ isVisible: true, food })}>
                Adicionar ao carrinho
              </ButtonCart>
            </InfoContainer>
          </li>
        ))}
      </FoodContainer>

      {modal.isVisible &&
        modal.food &&
        (() => {
          const food = modal.food // Garantindo que food não seja null dentro do modal
          return (
            <Modal className="visible">
              <ModalContainer className="container">
                <div>
                  <img src={food.foto} alt={food.nome} onClick={closeModal} />
                </div>
                <Content>
                  <h2>{food.nome}</h2>
                  <p>{food.descricao}</p>
                  <span>Serve {food.porcao}</span>
                  <ButtonCart onClick={() => AddToCart(food)}>
                    Adicionar ao carrinho - {formatPrice(food.preco)}
                  </ButtonCart>
                </Content>
                <ImgBotaoFechar
                  src={botaoFechar}
                  alt="Botão fechar"
                  onClick={closeModal}
                />
              </ModalContainer>
              <div className="overlay" onClick={closeModal}></div>
            </Modal>
          )
        })()}
    </>
  )
}

export default FoodCartComponent
