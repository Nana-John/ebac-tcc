import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  gap: 40px;
  padding: 60px 20px;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const Mapa = styled.div`
  width: 60%;
  height: 400px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 300px;
  }
`

export const Informacoes = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  color: #333;

  @media (max-width: 768px) {
    text-align: center;
  }
`

export const ContatoItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  color: #555;

  svg {
    margin-right: 12px;
    font-size: 20px;
    color: #007bff;
  }

  strong {
    font-weight: bold;
    color: #222;
  }
`

export const WhatsAppButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #25d366;
  color: white;
  font-size: 18px;
  padding: 12px 24px;
  border-radius: 30px;
  text-decoration: none;
  width: fit-content;
  max-width: 250px;
  margin-top: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s, transform 0.3s;

  svg {
    margin-right: 8px;
  }

  &:hover {
    background-color: #128c7e;
    transform: translateY(-4px);
  }
`
