import styled from 'styled-components'

export const DestaquesSection = styled.section`
  padding: 80px 20px;
  background-color: #f9f9f9;
  text-align: center;
`

export const DestaquesTitle = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 40px;
  font-family: 'Playfair Display', serif;
`

export const DestaquesGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
`

export const DestaqueCard = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 30px;
  width: 250px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`

export const DestaqueIcon = styled.span`
  display: block;
  margin-bottom: 20px;

  img {
    width: 100%;
    max-width: 150px; /* Ajuste conforme necessário */
    height: auto; /* Mantém a proporção da imagem */
    object-fit: contain; /* Garante que a imagem se ajuste dentro do espaço */
    margin: 0 auto; /* Centraliza a imagem */
  }
`

export const DestaqueTitle = styled.h3`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 15px;
  font-family: 'Playfair Display', serif;
`

export const DestaqueText = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
`
