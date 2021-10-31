import { Container } from './style'

import Link from 'next/link'

import { bubble as Menu } from 'react-burger-menu'

export const Header = () => {
  return (
    <Container>
      <div className="teste">
        <Link href="/home">
          <div className="testinh">
            <img src="./assets/logo.png" alt="Save an Animal" />
            <p>Save an Animal</p>
          </div>
        </Link>
      </div>

      <Menu>
        <a className="linkhover" href="/home">
          Home
        </a>
        <a className="linkhover" href="/find">
          Encontre seu Pet
        </a>
        <a className="linkhover" href="/wanted">
          Ajude a encontrar
        </a>
        <a className="linkhover" href="/homesweet">
          Lar doce lar
        </a>
        <a className="linkhover" href="/donations">
          Doações
        </a>
      </Menu>
    </Container>
  )
}
