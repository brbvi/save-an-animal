import { Container, Wrapper, AnimationLink } from './style'

import Link from 'next/link'

export const Header = () => {
  return (
    <Container>
      <Link href="/home">
        <div className="wraperLogo">
          <img src="./assets/logo.png" alt="Save An Animal" />
          <h1>Save Animal</h1>
        </div>
      </Link>

      <Wrapper>
        <AnimationLink>
          <Link href="/wanted">Procura-se</Link>
        </AnimationLink>
        <AnimationLink>
          <Link href="/find">Quero Encontrar</Link>
        </AnimationLink>
        <AnimationLink>
          <Link href="/homesweet">Encontre um lar</Link>
        </AnimationLink>
        <AnimationLink>
          <Link href="/donations">Doações</Link>
        </AnimationLink>
      </Wrapper>
    </Container>
  )
}
