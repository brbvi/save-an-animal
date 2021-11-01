import styled from 'styled-components'

export const Container = styled.div`
  padding: 0 18rem;
  color: #f9c16a;

  @media (max-width: 700px) {
    padding: 0 8rem;
  }

  header {
    width: 100%;
    margin: 4rem 0;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    h1 {
      font-weight: 300;
      font-size: 3rem;
    }

    button {
      width: 20rem;
      height: 5rem;
      background: #fff;
      border-radius: 1rem;

      color: var(--background);

      font-size: 1.6rem;
      font-weight: 600;

      transition: border-radius 0.3s, opacity 0.3s;

      &:hover {
        border-radius: 0.3rem;
        opacity: 0.8;
      }
    }
  }
`

export const Feed = styled.div`
  margin: 4rem 0;

  display: grid;
  grid-template-columns: repeat(2, 50%);

  span {
    font-size: 1.5rem;
  }

  @media (max-width: 700px) {
    grid-template-columns: 100%;
  }
`
