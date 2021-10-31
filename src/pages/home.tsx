import { DefaultMasterPages } from '../components/MasterPages/DefaultMasterPage'

import { Container } from '../styles/home'

const Home = () => {
  return (
    <DefaultMasterPages title="Home">
      <Container>
        <h1>Ola home</h1>
      </Container>
    </DefaultMasterPages>
  )
}

export default Home
