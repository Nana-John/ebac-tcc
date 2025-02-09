import styled from 'styled-components'

export const Container = styled.footer`
  background-color: #f8f8f8;
  padding: 40px 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  gap: 40px; /* Espaço entre as colunas */
`

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 60%; /* Ajuste a largura para ficar à esquerda */
`

export const NavLinks = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;

  a {
    text-decoration: none;
    color: #333;
    font-size: 1rem;
    &:hover {
      color: #007b5f;
    }
  }
`

export const SocialIcons = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;

  a {
    color: #333;
    font-size: 1.5rem;
    &:hover {
      color: #007b5f;
    }
  }
`

export const Legal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;

  p {
    font-size: 0.875rem;
    color: #666;
  }

  a {
    text-decoration: none;
    color: #007b5f;
    font-size: 0.875rem;
    &:hover {
      text-decoration: underline;
    }
  }
`

// Estilos para o formulário de reserva

export const FormContainer = styled.div`
  width: 100%;
  max-width: 400px;
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`

export const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
  text-align: center;
  color: #333;
`

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  &:focus {
    border-color: #007b5f;
    outline: none;
  }
`

export const Select = styled.select`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  &:focus {
    border-color: #007b5f;
    outline: none;
  }
`

export const SubmitButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #007b5f;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #004d39;
  }
`
