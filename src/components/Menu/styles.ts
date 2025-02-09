import styled from 'styled-components'
import { motion } from 'framer-motion'
import bgHeader from '../../assets/images/bg-header.png'

export const MenuContainer = styled.section`
  position: relative;
  padding: 100%;
  display: inline;
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
    background: rgb(7, 28, 97);
    top: 0;
    left: 0;
    z-index: -2;
  }
`

export const SectionTitle = styled.h2`
  color: white;
  font-size: 32px;
  margin-bottom: 20px;
`

export const Description = styled.p`
  color: white;
  font-size: 18px;
  margin-bottom: 30px;
`

export const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`

export const MenuItem = styled(motion.div)`
  font-size: 18px;
  font-weight: bold;
  color: white;
  padding: 15px;
  margin: 0 10px;
  animation: moveToRight 2s ease-in-out;
  animation-delay: 1000ms  cursor: pointer;
  text-align: center;
  position: absolute;

  img {
    width: 150px;
    height: 150px;
    object-fit: cover;
  }

  &.active {
    transform: scale(1.2);
    z-index: 2;
  }

  &.prev {
    transform: scale(0.7) rotate(60deg);
    left: 380px;
    z-index: 1;
  }

  &.next {
    transform: scale(0.7) rotate(60deg);
    right: 380px;
    z-index: 1;
  }
`

export const NavButtons = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  margin: 100px;
  z-index: 3;
`

export const AddButton = styled.button`
  background-color: #ff5733;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  margin-top: 10px;
  cursor: pointer;
  border-radius: 5px;
  transition: background 0.3s;

  &:hover {
    background-color: #e04e2a;
  }
`
