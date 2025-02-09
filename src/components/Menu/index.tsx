import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MenuContainer, MenuItem, NavButtons } from './styles'

const dishes = [
  { id: 1, name: 'Spaghetti Carbonara', image: '/images/carbonara.jpg' },
  { id: 2, name: 'Margherita Pizza', image: '/images/pizza.jpg' },
  { id: 3, name: 'Tiramisu', image: '/images/tiramisu.jpg' }
]

const MenuSection: React.FC = () => {
  const [index, setIndex] = useState(0)
  const direction = 1

  const nextDish = () => setIndex((prev) => (prev + 1) % dishes.length)
  const prevDish = () =>
    setIndex((prev) => (prev - 1 + dishes.length) % dishes.length)

  return (
    <MenuContainer>
      <NavButtons as="button" onClick={prevDish}>
        ◀
      </NavButtons>
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={dishes[index].id}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <MenuItem>
            <img src={dishes[index].image} alt={dishes[index].name} />
            <h3>{dishes[index].name}</h3>
          </MenuItem>
        </motion.div>
      </AnimatePresence>
      <NavButtons as="button" onClick={nextDish}>
        ▶
      </NavButtons>
    </MenuContainer>
  )
}

export default MenuSection
