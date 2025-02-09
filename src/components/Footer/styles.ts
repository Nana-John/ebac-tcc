import styled from 'styled-components'

export const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
`

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`

export const NavLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;

  a {
    text-decoration: none;
    color: #fff;
    font-weight: bold;
    transition: color 0.3s;

    &:hover {
      color: #ff6347;
    }
  }
`

export const SocialIcons = styled.div`
  margin: 20px 0;
  display: flex;
  gap: 15px;

  a {
    color: #fff;
    font-size: 24px;
    transition: color 0.3s;

    &:hover {
      color: #ff6347;
    }
  }
`

export const ReservationForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  max-width: 400px;
`

export const FormTitle = styled.h3`
  font-size: 24px;
  color: #fff;
  margin-bottom: 15px;
  font-weight: bold;
`

export const FormInput = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
`

export const FormSelect = styled.select`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
`

export const LegalInfo = styled.div`
  margin-top: 20px;

  p {
    font-size: 14px;
    margin-bottom: 10px;
  }

  a {
    color: #fff;
    font-size: 14px;
    margin: 0 10px;
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: #ff6347;
    }
  }
`
