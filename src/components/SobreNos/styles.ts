import styled from 'styled-components'

export const SobreContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
  gap: 50px;
  max-width: 1200px;
  height: 350px;
  margin: 0 auto;
  background-color: #f4f4f4;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 30px;
    height: auto; /* Ajusta a altura para telas menores */
    gap: 30px;
  }
`

export const Titulo = styled.h1`
  color: #333;
  font-size: 36px;
  text-align: center;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 28px; /* Reduz o tamanho do título em telas menores */
    margin-bottom: 20px;
  }
`

export const Historia = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    text-align: center;
  }
`

export const Text = styled.p`
  font-size: 18px;
  color: #555;
  line-height: 1.6;
  text-align: justify;
  margin-bottom: 20px;
  position: relative;

  strong {
    font-weight: bold;
    color: #222;
  }

  @media (max-width: 768px) {
    font-size: 16px; /* Ajuste de fonte para telas menores */
    text-align: center; /* Centraliza o texto em telas menores */
  }
`

export const Galeria = styled.div`
  flex-shrink: 0;
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    max-width: 500px;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    width: 100%;
    img {
      max-width: 100%; /* Ajusta a imagem para ocupar toda a largura disponível */
    }
  }
`
