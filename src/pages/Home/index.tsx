import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
  text-align: center;
  padding: 20px;
`

const Title = styled.h1`
  color: #333;
`

const Button = styled(Link)`
  text-decoration: none;
  background-color: #ff5733;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #e04e2f;
  }
`

const Home: React.FC = () => {
  return (
    <Container>
      <Title>Bem-vindo ao Efood!</Title>
      <Button to="/products">Ver Produtos</Button>
    </Container>
  )
}

export default Home
