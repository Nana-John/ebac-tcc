import {
  HeroContainer,
  HeroContent,
  TextSection,
  ImageSection,
  Headline,
  CTAButton,
  HeroImage,
  SmokeEffect
} from './styles'
import heroImage from '../../assets/images/pratos/pizzaHero.png'

const Hero = () => {
  return (
    <section id="home">
      <HeroContainer>
        <HeroContent>
          <TextSection>
            <Headline>
              A autêntica culinária italiana, direto à sua mesa!
            </Headline>
            <CTAButton>Ver Menu</CTAButton>
          </TextSection>
          <ImageSection>
            <HeroImage src={heroImage} alt="Culinária Italiana" />
            <SmokeEffect />
          </ImageSection>
        </HeroContent>
      </HeroContainer>
    </section>
  )
}

export default Hero
