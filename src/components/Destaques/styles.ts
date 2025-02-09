import styled from 'styled-components'

interface PratoCardProps {
  children: React.ReactNode
  key?: number
}

export const PratosGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`

export const PratoCard = styled.div<PratoCardProps>`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
`

export const Depoimentos = styled.div`
  margin-top: 40px;
`

export const DepoimentoItem = styled.div`
  background-color: #f8f8f8;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
`
