import { Container, Wrapper, AnimationLink } from './style'

export const Header = () => {
  return (
    <Container>
      <div className="wraperLogo">
        <img src="./assets/logo.png" alt="Save An Animal" />
        <h1>Save An'imal</h1>
      </div>

      <Wrapper>
        <AnimationLink>
          <a href="#">Procura-se</a>
        </AnimationLink>
        <AnimationLink>
          <a href="#">Quero Encontrar</a>
        </AnimationLink>
        <AnimationLink>
          <a href="#">Encontre um lar</a>
        </AnimationLink>
        <AnimationLink>
          <a href="#">Doações</a>
        </AnimationLink>
      </Wrapper>
    </Container>
  )
}
