import styled from 'styled-components'

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100%;
  height: 300px;
`

export const MenuItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  img {
    width: 200px;
    height: auto;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  h3 {
    margin-top: 10px;
    font-size: 1.2rem;
    color: #333;
  }
`

export const NavButtons = styled.button`
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: #333;
  transition: color 0.3s;

  &:hover {
    color: #007bff;
  }
`
