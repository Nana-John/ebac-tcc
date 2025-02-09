import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'

const foodItems = [
  { id: 1, name: '🍕 Pizza' },
  { id: 2, name: '🍔 Hambúrguer' },
  { id: 3, name: '🍣 Sushi' },
  { id: 4, name: '🥗 Salada' },
  { id: 5, name: '🍩 Donut' },
  { id: 6, name: '🍉 Melancia' }
]

const OvalMenuContainer = styled.div`
  width: 400px;
  height: 200px;
  position: relative;
  overflow: hidden;
`

const OvalPath = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`

const FoodItem = styled(motion.div)`
  position: absolute;
  width: 80px;
  height: 80px;
  background: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`

const OvalMenu = () => {
  const radiusX = 150
  const radiusY = 60
  const duration = 6

  return (
    <OvalMenuContainer>
      <OvalPath
        animate={{
          rotate: [0, 60]
        }}
        transition={{ repeat: Infinity, duration, ease: 'linear' }}
      >
        {foodItems.map((item, index) => {
          const angle = (index / foodItems.length) * Math.PI * 2
          const x = Math.cos(angle) * radiusX
          const y = Math.sin(angle) * radiusY

          return (
            <FoodItem
              key={item.id}
              style={{
                transform: `translate(${x}px, ${y}px)`
              }}
            >
              {item.name}
            </FoodItem>
          )
        })}
      </OvalPath>
    </OvalMenuContainer>
  )
}

export default OvalMenu
