import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

interface Product {
  id: number
  name: string
  description: string
  price: number
}

const products: Product[] = [
  {
    id: 1,
    name: 'Pizza Margherita',
    description: 'Mussarela, tomate e manjericão',
    price: 35
  },
  {
    id: 2,
    name: 'Spaghetti Carbonara',
    description: 'Spaghetti com molho cremoso de ovos e pancetta',
    price: 40
  },
  {
    id: 3,
    name: 'Tiramisu',
    description: 'Sobremesa italiana com café e mascarpone',
    price: 20
  }
]

const Container = styled.div`
  padding: 20px;
`

const ProductList = styled.ul`
  list-style-type: none;
  padding: 0;
`

const ProductItem = styled.li`
  margin-bottom: 20px;
`

const ProductName = styled.h3`
  color: #333;
`

const ProductDescription = styled.p`
  font-size: 1.1rem;
  color: #777;
`

const ProductPrice = styled.p`
  font-size: 1.2rem;
  color: #ff5733;
`

const Button = styled.button`
  background-color: #ff5733;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #e04e2f;
  }
`

const Products: React.FC = () => {
  return (
    <Container>
      <h1>Produtos</h1>
      <ProductList>
        {products.map((product) => (
          <ProductItem as="div" key={product.id}>
            <ProductName>{product.name}</ProductName>
            <ProductDescription>{product.description}</ProductDescription>
            <ProductPrice>R$ {product.price}</ProductPrice>
            <Button>Adicionar ao Carrinho</Button>
          </ProductItem>
        ))}
      </ProductList>
      <Link to="/checkout">Ir para o Checkout</Link>
    </Container>
  )
}

export default Products
