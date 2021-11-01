import { Container, Wrapper, Info } from './style'

interface FindBoxProps {
  id?: number
  cidade: string
  estado: string
  bairro: string
  tutor_name: string
  dog_name: string
}

export const FindBox: React.FC<FindBoxProps> = (props) => {
  return (
    <Container>
      <img src="./assets/dogexample.jpg" alt="Dog Example" />
      <Wrapper>
        <Info>
          <span>Cidade: {props.cidade}</span>
          <span>Estado: {props.estado}</span>
          <span>Bairro: {props.bairro}</span>
        </Info>
        <Info>
          <span>Atende por: {props.dog_name}</span>
          <span>Tutor: {props.tutor_name}</span>
          <button>Eu vi!</button>
        </Info>
      </Wrapper>
    </Container>
  )
}
