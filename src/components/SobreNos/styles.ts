import styled from 'styled-components'

export const SobreContainer = styled.section`
  padding: 60px 20px;
  background-color: #f8f8f8;
  text-align: center;
`

export const Titulo = styled.h2`
  font-size: 36px;
  margin-bottom: 20px;
  color: #d62828;
`

export const Historia = styled.div`
  max-width: 800px;
  margin: 0 auto 40px;
  font-size: 18px;
  line-height: 1.6;
  color: #333;
`

export const Galeria = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`
export const Foto = styled.img`
  width: 250px;
  height: 250px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`
export const Text = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: #555;
  margin: 20px 0;
  text-align: justify;

  &:last-child {
    margin-bottom: 0;
  }
`

export const Diferenciais = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: left;

  h3 {
    font-size: 24px;
    color: #d62828;
    margin-bottom: 10px;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      font-size: 18px;
      margin-bottom: 8px;
      display: flex;
      align-items: center;
      color: #555;
    }
  }
`
