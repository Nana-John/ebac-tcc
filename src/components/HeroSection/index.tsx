import {
  HeroContainer,
  HeroContent,
  TextSection,
  ImageSection,
  Headline,
  CTAButton
} from './styles'
import heroImage from '../../assets/images/pratos/pizzaHero.png'
const Hero = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <TextSection>
          <Headline>
            A autêntica culinária italiana, direto à sua mesa!
          </Headline>
          <CTAButton>Ver Menu</CTAButton>
        </TextSection>
        <ImageSection>
          <img src={heroImage} alt="Culinária Italiana" />
        </ImageSection>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero
