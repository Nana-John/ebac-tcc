import styled from 'styled-components'

export const HeroContainer = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f4f4f4;
  padding: 0 20px;
  font-family: 'Playfair Display', serif;
`

export const HeroContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  height: 80%;
  gap: 40px;
`

export const TextSection = styled.div`
  flex: 1;
  max-width: 500px;
  text-align: left;
`

export const ImageSection = styled.div`
  flex: 1;
  display: grid;
  justify-content: center;
  align-items: center;
  max-width: 800px; /* Garante que a imagem não ultrapasse um limite definido */
`

export const HeroImage = styled.img`
  width: 100%;
  max-width: 100%;
  height: auto;
  max-height: 200px; /* Ajuste de altura máxima */
  border-radius: 12px;
  object-fit: contain; /* Mantém a proporção sem cortar */
`

export const Headline = styled.h1`
  font-size: 3rem;
  line-height: 1.3;
  font-weight: 700;
  margin-bottom: 20px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #333;
`

export const CTAButton = styled.button`
  padding: 12px 30px;
  font-size: 1.2rem;
  background-color: #007b5f;
  color: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  font-weight: bold;

  &:hover {
    background-color: #004d39;
    transform: translateY(-3px);
  }
`
