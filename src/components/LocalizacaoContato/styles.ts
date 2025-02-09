import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 20px;
  background-color: #f8f8f8;
`

export const Mapa = styled.div`
  width: 100%;
  max-width: 800px;
  height: 300px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`

export const Informacoes = styled.div`
  margin-top: 30px;
  text-align: left;
`

export const ContatoItem = styled.p`
  font-size: 18px;
  color: #333;
  margin: 8px 0;
  display: left;
  align-items: center;
  gap: 10px;

  svg {
    color: #d62828;
    font-size: 20px;
  }
`

export const WhatsAppButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #25d366;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  padding: 12px 20px;
  border-radius: 8px;
  text-decoration: none;
  margin-top: 20px;
  transition: 0.3s;
  gap: 10px;

  svg {
    font-size: 22px;
  }

  &:hover {
    background-color: #1ebd5e;
  }
`
