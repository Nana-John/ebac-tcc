import styled from 'styled-components'

export const SobreContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
  gap: 50px; /* Distância entre texto e imagem */
  max-width: 1200px;
  height: 350px;
  margin: 0 auto;
  background-color: #f4f4f4; /* Cor de fundo para dar um contraste */
`

export const Titulo = styled.h1`
  color: #333;
  font-size: 36px;
  text-align: center;
  margin-bottom: 30px;
`

export const Historia = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
`

export const Galeria = styled.div`
  flex-shrink: 0;
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    max-width: 500px; /* Limita o tamanho máximo da imagem */
    height: auto;
    border-radius: 8px; /* Arredonda as bordas da imagem */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra para dar destaque */
  }
`
