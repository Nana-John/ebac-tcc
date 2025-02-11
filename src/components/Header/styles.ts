import styled, { css } from 'styled-components'

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
    padding: 15px;
    flex-direction: column;
    align-items: flex-start;
  }
`

export const Logo = styled.div`
  img {
    height: 50px;
    width: auto;
  }

  @media (max-width: 768px) {
    order: 1; /* Logo no topo em telas menores */
    margin-bottom: 15px;
  }
`

export const NavMenu = styled.nav<{ open: boolean }>`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    justify-content: center;
    background-color: #fff;
    position: absolute;
    top: 70px;
    left: 0;
    right: 0;
    padding: 20px;
    display: ${({ open }) => (open ? 'flex' : 'none')};
    transition: all 0.3s ease-in-out;
    z-index: 999;
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
    font-size: 1.2rem;
    padding: 10px 0;
    text-align: center;
  }
`

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    order: 2;
    width: 100%;
    justify-content: space-between;
    margin-top: 10px;
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

// Botão de menu hambúrguer
export const HamburgerMenu = styled.div<{ open: boolean }>`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 25px;
  width: 30px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
  }

  div {
    width: 100%;
    height: 4px;
    background-color: #333;
    transition: 0.3s;

    ${({ open }) =>
      open &&
      css`
        &:nth-child(1) {
          transform: rotate(45deg);
          position: relative;
          top: 6px;
        }
        &:nth-child(2) {
          opacity: 0;
        }
        &:nth-child(3) {
          transform: rotate(-45deg);
          position: relative;
          top: -6px;
        }
      `}
  }
`
