import React from 'react'
import { ModalOverlay, ModalContent } from '../Modal/styles'

interface Dish {
  id: number
  name: string
  image: string
  descricao?: string
  preco?: number
}

type ModalProps = {
  product: Dish | null
  onClose: () => void
}

const Modal: React.FC<ModalProps> = ({ product, onClose }) => {
  if (!product) return null

  return (
    <ModalOverlay>
      <ModalContent>
        <h2>{product.name}</h2>
        {product.descricao && <p>{product.descricao}</p>}
        {product.preco && <p>Preço: R$ {product.preco.toFixed(2)}</p>}
        <button onClick={onClose}>Fechar</button>
      </ModalContent>
    </ModalOverlay>
  )
}

export default Modal
