import styled from 'styled-components'

export const Container = styled.div`
  padding: 0 18rem;
  color: var(--primary);

  @media (max-width: 700px) {
    padding: 0 8rem;
  }
`

export const Apresentation = styled.div`
  padding: 10rem 0;

  width: 100%;
  display: grid;
  grid-template-columns: 60% 40%;

  @media (max-width: 700px) {
    grid-template-columns: 100%;
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div.wrapper {
    width: 100%;
    margin-bottom: 2rem;
    h1 {
      font-weight: 400;
      font-size: 7rem;
    }
  }

  p {
    font-size: 1.7rem;
    line-height: 2.5rem;
    font-weight: 200;
  }

  img {
    width: 40rem;
  }
`

export const LineTitle = styled.div`
  width: 60px;
  height: 2px;
  background: var(--primary);
  border-radius: 2px;
`
