import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-family: 'Roboto', serif;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1000;
`

export const Logo = styled.a`
  display: block;
  align-items: center;

  img {
    height: 100px;
  }
`

export const NavMenu = styled.nav`
  display: flex;
  gap: 2rem;
`

export const NavItem = styled.a`
  text-decoration: none;
  color: #333;
  font-size: 1.1rem;
  font-weight: 600;
  transition: color 0.3s ease;

  &:hover {
    color: #d62828;
  }
`

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`

export const OrderButton = styled.button`
  background-color: #d62828;
  color: #fff;
  border: none;
  padding: 0.7rem 1.5rem;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background-color: #a11f1f;
  }
`

export const CartIcon = styled.div`
  position: relative;
  cursor: pointer;

  svg {
    color: #333;
  }

  span {
    position: absolute;
    top: -8px;
    right: -10px;
    background: #d62828;
    color: white;
    font-size: 0.8rem;
    font-weight: bold;
    padding: 2px 6px;
    border-radius: 50%;
  }
`
