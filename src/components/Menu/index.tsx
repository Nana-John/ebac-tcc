import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styled from 'styled-components'
import bgHeader from '../../assets/images/bg-header.png'

const dishes = [
  { id: 1, name: 'Dom Giovanni', image: '/images/Dom Giovanni.png' },
  { id: 2, name: 'Margherita', image: '/images/marguerita.png' },
  { id: 3, name: 'Mozarela', image: '/images/Marguerita.png' },
  { id: 4, name: 'Champignon', image: '/images/champion.png' },
  {
    id: 5,
    name: 'Tomate com Rúcula',
    image: '/images/Tomate Seco com rúcula.png'
  },
  { id: 6, name: 'Abacaxi', image: '/images/abacaxi.png' }
]

const MenuContainer = styled.section`
  position: relative;
  padding: 100px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: url(${bgHeader}) center/cover no-repeat;
    top: 0;
    left: 0;
    z-index: -1;
  }

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(7, 28, 97, 0.8);
    top: 0;
    left: 0;
    z-index: -2;
  }
`

const SectionTitle = styled.h2`
  color: white;
  font-size: 32px;
  margin-bottom: 10px;
`

const Description = styled.p`
  color: white;
  font-size: 18px;
  margin-bottom: 20px;
`

const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  max-width: 500px;
  height: 300px;
`

const MenuItem = styled(motion.div)`
  position: absolute;
  text-align: center;
  cursor: pointer;

  img {
    width: 300px;
    height: 300px;
    object-fit: cover;
    border-radius: 10px;
    transition: transform 0.3s ease;
  }

  &.active img {
    transform: scale(1.2);
  }

  &.prev img,
  &.next img {
    transform: scale(0.8);
    opacity: 0.8;
  }
`

const NavButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 32px;
  cursor: pointer;
  z-index: 3;
  margin: 0 500px;
`

const AddButton = styled.button`
  background-color: #ff5733;
  color: white;
  border: none;
  padding: 10px 200px;
  font-size: 16px;
  margin-top: 10px;
  cursor: pointer;
  border-radius: 58px;
  transition: background 0.3s;

  &:hover {
    background-color: rgb(1, 20, 104);
  }
`

const MenuSection: React.FC = () => {
  const [index, setIndex] = useState(0)

  const nextDish = () => setIndex((prev) => (prev + 1) % dishes.length)
  const prevDish = () =>
    setIndex((prev) => (prev - 1 + dishes.length) % dishes.length)

  return (
    <MenuContainer>
      <SectionTitle>Escolha sua Pizza</SectionTitle>
      <Description>
        Explore nosso cardápio e selecione sua pizza favorita para adicionar ao
        pedido.
      </Description>
      <MenuWrapper>
        <NavButton as="button" onClick={prevDish}>
          ◀
        </NavButton>

        <AnimatePresence mode="wait">
          <MenuItem
            key={dishes[index].id}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="active"
          >
            <img src={dishes[index].image} alt={dishes[index].name} />
            <h3>{dishes[index].name}</h3>
            <AddButton>Adicionar ao Pedido</AddButton>
          </MenuItem>
        </AnimatePresence>

        <MenuItem className="prev">
          <img
            src={dishes[(index - 1 + dishes.length) % dishes.length].image}
            alt={dishes[(index - 1 + dishes.length) % dishes.length].name}
          />
        </MenuItem>
        <MenuItem className="next">
          <img
            src={dishes[(index + 1) % dishes.length].image}
            alt={dishes[(index + 1) % dishes.length].name}
          />
        </MenuItem>

        <NavButton as="button" onClick={nextDish}>
          ▶
        </NavButton>
      </MenuWrapper>
    </MenuContainer>
  )
}

export default MenuSection
