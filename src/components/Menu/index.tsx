import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styled from 'styled-components'
import bgHeader from '../../assets/images/bg-header.png'

// Define the Dish interface
interface Dish {
  id: number
  name: string
  image: string
  descricao?: string
  preco?: number
}

// Define the dishes array with explicit typing
const dishes: Dish[] = [
  {
    id: 1,
    name: 'Dom Giovanni',
    image: '/images/Dom Giovanni.png',
    descricao: 'Pizza com molho de tomate, mussarela e manjericão.',
    preco: 80.0
  },
  {
    id: 2,
    name: 'Margherita',
    image: '/images/Marguerita.png',
    descricao: 'Pizza com molho de tomate, mussarela e tomates frescos.',
    preco: 40.5
  },
  {
    id: 3,
    name: 'Mozzarella',
    image: '/images/Mussarela.png',
    descricao: 'Pizza com molho de tomate e muita mussarela.',
    preco: 38.0
  },
  {
    id: 4,
    name: 'Champignon',
    image: '/images/champion.png',
    descricao: 'Pizza com molho de tomate, mussarela e champignons.',
    preco: 42.0
  },
  {
    id: 5,
    name: 'Pomodori Secchi Con Rucola',
    image: '/images/Tomate Seco com rúcula.png',
    descricao: 'Pizza com tomates secos, mussarela e rúcula.',
    preco: 48.0
  },
  {
    id: 6,
    name: 'Abacaxi',
    image: '/images/abacaxi.png',
    descricao: 'Pizza com molho de tomate, mussarela e abacaxi.',
    preco: 35.0
  }
]

// Styled components
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
  font-size: 40px;
  margin: 5px;
  font-family: 'Playfair Display', serif;
`

const Description = styled.p`
  color: white;
  font-size: 18px;
  font-family: 'Roboto', sans-serif;
  margin-bottom: 20px;
`

const MenuWrapper = styled.div`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  max-width: 500px;
  height: 300px;
  margin: 80px;
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

  &.prev {
    transform: scale(0.7);
    left: 400px;
    z-index: 1;
  }

  &.next {
    transform: scale(0.7);
    right: 400px;
    z-index: 2;
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
  padding: 10px 20px;
  font-size: 16px;
  margin-top: 10px;
  cursor: pointer;
  border-radius: 58px;
  transition: background 0.3s;

  &:hover {
    background-color: rgb(1, 20, 104);
  }
`

// Define the MenuSection component
const MenuSection: React.FC = () => {
  const [index, setIndex] = useState(0)

  const nextDish = () => setIndex((prev) => (prev + 1) % dishes.length)
  const prevDish = () =>
    setIndex((prev) => (prev - 1 + dishes.length) % dishes.length)

  return (
    <section id="cardapio">
      <MenuContainer>
        <SectionTitle>O Melhor do Nosso Cardápio, à Sua Escolha</SectionTitle>
        <Description>
          Explore nosso cardápio irresistível e encontre a pizza perfeita para
          seu momento!
        </Description>
        <MenuWrapper>
          <NavButton as="button" onClick={prevDish}>
            ◀
          </NavButton>

          <AnimatePresence mode="wait">
            <MenuItem
              key={dishes[index].id}
              initial={{ scale: 0.9, opacity: 0.5, x: 100 }}
              animate={{ scale: 1, opacity: 1, x: 0 }}
              exit={{ scale: 0.9, opacity: 0.5, x: -100 }}
              transition={{ duration: 0.2 }}
              className="active"
            >
              <img src={dishes[index].image} alt={dishes[index].name} />
              <h3>{dishes[index].name}</h3>
              <AddButton>Quero essa!</AddButton>
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
    </section>
  )
}

export default MenuSection
