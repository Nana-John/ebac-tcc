import styled from 'styled-components'

interface NavItemProps {
  href: string
  children: React.ReactNode
}

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
    padding: 15px;
  }
`

export const Logo = styled.div`
  img {
    height: 50px;
    width: auto;
  }

  @media (max-width: 768px) {
    order: 1; /* Logo no topo em telas menores */
  }
`

export const NavMenu = styled.nav`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    order: 3; /* Menu na parte inferior em telas menores */
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
  }
`

export const NavItem = styled.a<NavItemProps>`
  text-decoration: none;
  color: #333;
  font-size: 1rem;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: #007b5f;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    order: 2; /* Ações no meio em telas menores */
  }
`

export const OrderButton = styled.button`
  background-color: #007b5f;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #004d39;
  }

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 0.9rem;
  }
`

export const CartIcon = styled.div`
  position: relative;
  cursor: pointer;

  svg {
    color: #333;
    transition: color 0.3s ease;
  }

  &:hover svg {
    color: #007b5f;
  }

  span {
    position: absolute;
    top: -8px;
    right: -8px;
    background-color: #e74c3c;
    color: white;
    font-size: 0.75rem;
    padding: 4px 8px;
    border-radius: 50%;
  }
`
