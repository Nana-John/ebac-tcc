import styled from 'styled-components'

export const Container = styled.footer`
  background-color: #1e1e1e;
  color: #fff;
  padding: 40px 20px;
  text-align: center;
`

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
`

export const NavLinks = styled.div`
  display: flex;
  gap: 20px;

  a {
    color: #fff;
    text-decoration: none;
    font-size: 16px;
    transition: 0.3s;

    &:hover {
      color: #d62828;
    }
  }
`

export const SocialIcons = styled.div`
  display: flex;
  gap: 15px;

  a {
    color: #fff;
    font-size: 20px;
    transition: 0.3s;

    &:hover {
      color: #d62828;
    }
  }
`

export const Legal = styled.div`
  margin-top: 20px;
  font-size: 14px;
  opacity: 0.8;

  a {
    color: #fff;
    text-decoration: none;
    margin-left: 10px;
    transition: 0.3s;

    &:hover {
      color: #d62828;
    }
  }
`
