import { Container, Line } from './style'

import Link from 'next/link'

import { bubble as Menu } from 'react-burger-menu'

import { FiSearch } from 'react-icons/fi'
import { FaHandsHelping } from 'react-icons/fa'
import { AiOutlineHome } from 'react-icons/ai'
import { BiDonateHeart } from 'react-icons/bi'
import { SiHomebridge } from 'react-icons/si'

export const Header = () => {
  return (
    <Container>
      <div className="teste">
        <Link href="/home">
          <div className="testinh">
            <img src="./assets/logo.png" alt="Save an Animal" />
            <Line />
            <p>Save an Animal</p>
          </div>
        </Link>
      </div>

      <Menu>
        <a className="linkhover" href="/home">
          <SiHomebridge className="iconMenu" />
          Home
        </a>
        <a className="linkhover" href="/find">
          <FiSearch className="iconMenu" />
          Encontre seu Pet
        </a>
        <a className="linkhover" href="/wanted">
          <FaHandsHelping className="iconMenu" />
          Ajude a encontrar
        </a>
        <a className="linkhover" href="/homesweet">
          <AiOutlineHome className="iconMenu" />
          Lar doce lar
        </a>
        <a className="linkhover" href="/donations">
          <BiDonateHeart className="iconMenu" />
          Doações
        </a>
      </Menu>
    </Container>
  )
}
