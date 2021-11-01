import { FindBox } from '../components/layout/_Find/FindBox'
import { DefaultMasterPages } from '../components/MasterPages/DefaultMasterPage'

import { Container, Feed } from '../styles/find'

import dog from '../dog.json'

const Find = () => {
  return (
    <DefaultMasterPages title="Find">
      <Container>
        <header>
          <h1>Estou procurando meu pet</h1>
          <button>Alguem viu?</button>
        </header>
        <hr />
        <Feed>
          {dog.map((dog) => {
            return (
              <FindBox
                key={dog.id}
                bairro={dog.bairro}
                cidade={dog.cidade}
                estado={dog.estado}
                tutor_name={dog.tutor_name}
                dog_name={dog.dog_name}
              />
            )
          })}
        </Feed>
      </Container>
    </DefaultMasterPages>
  )
}

export default Find
