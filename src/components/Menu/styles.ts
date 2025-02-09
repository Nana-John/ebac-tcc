import styled from 'styled-components'

export const MenuContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
`

export const SectionTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 10px;
  color: #333;
`

export const MenuGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
`

export const MenuItem = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;

  img {
    width: 100%;
    border-radius: 8px;
    margin-bottom: 10px;
  }

  h3 {
    font-size: 1.2rem;
    margin-bottom: 5px;
  }

  p {
    font-size: 1rem;
    margin-bottom: 10px;
    color: #888;
  }
`

// Corrigindo o tipo do AddButton para aceitar um botão HTML com propriedades padrão
export const AddButton = styled.button.attrs({
  type: 'button'
})`
  background-color: #28a745;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #218838;
  }
`
