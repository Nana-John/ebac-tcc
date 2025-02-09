import React, { useState } from 'react'
import styled from 'styled-components'

const CheckoutContainer = styled.div`
  width: 300px;
  background: while;
  padding: 20px;
  border: 2px fin #000;
  font-family: 'Courier New', Courier, monospace;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
`

const Title = styled.h2`
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 15px;
  border-bottom: 2px dashed #000;
  padding-bottom: 5px;
`

const ItemList = styled.div`
  margin-bottom: 15px;
`

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  padding-bottom: 5px;
  border-bottom: 1px dashed #444;
`

const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

const Button = styled.button`
  background: none;
  border: 1px solid #000;
  padding: 2px 8px;
  cursor: pointer;
  font-size: 14px;
  &:hover {
    background: #ddd;
  }
`

const Total = styled.div`
  text-align: right;
  font-weight: bold;
  font-size: 18px;
  margin-top: 10px;
`

const ObservacoesInput = styled.textarea.attrs<{ placeholder?: string }>(
  (props) => ({
    placeholder: props.placeholder || 'Alguma observação?'
  })
)`
  width: 100%;
  height: 60px;
  margin-top: 10px;
  padding: 5px;
  font-family: 'Courier New', Courier, monospace;
  border: 1px solid #000;
  resize: none;
` as React.FC<React.TextareaHTMLAttributes<HTMLTextAreaElement>>

const ConfirmButton = styled.button`
  width: 100%;
  margin-top: 10px;
  background: black;
  color: white;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  &:hover {
    background: #444;
  }
`

const Checkout = () => {
  const [pedido, setPedido] = useState([
    { id: 1, nome: 'Pizza Margherita', quantidade: 1, preco: 45.0 },
    { id: 2, nome: 'Lasanha', quantidade: 1, preco: 38.0 }
  ])

  const [observacoes, setObservacoes] = useState('')

  const alterarQuantidade = (id: number, delta: number) => {
    setPedido((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantidade: Math.max(1, item.quantidade + delta) }
          : item
      )
    )
  }

  const total = pedido.reduce(
    (acc, item) => acc + item.quantidade * item.preco,
    0
  )

  return (
    <CheckoutContainer>
      <Title>Checkout</Title>
      <ItemList>
        {pedido.map((item) => (
          <Item as="a" key={item.id}>
            <span>{item.nome}</span>
            <QuantityControl>
              <Button
                as="button"
                onClick={() => alterarQuantidade(item.id, -1)}
              >
                -
              </Button>
              <span>{item.quantidade}</span>
              <Button as="button" onClick={() => alterarQuantidade(item.id, 1)}>
                +
              </Button>
            </QuantityControl>
            <span>R$ {item.quantidade * item.preco}</span>
          </Item>
        ))}
      </ItemList>
      <Total>Total: R$ {total.toFixed(2)}</Total>
      <ObservacoesInput
        value={observacoes}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          setObservacoes(e.target.value)
        }
      />

      <ConfirmButton>Finalizar Pedido</ConfirmButton>
    </CheckoutContainer>
  )
}

export default Checkout
