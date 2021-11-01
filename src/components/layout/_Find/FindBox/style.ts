import styled from 'styled-components'

export const Container = styled.div`
  margin: 2rem auto;

  width: 90%;
  border: 1px solid var(--primary);
  border-radius: 0.2rem;

  min-width: 300px;

  img {
    width: 100%;
  }
`
export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 50%);
  padding: 1rem;
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    margin: 1.5rem 0;
  }

  button {
    width: 70%;
    margin: 1rem 0;
    background: var(--primary);
    height: 38px;
    border-radius: 0.4rem;
    font-size: 1.8rem;
    font-weight: 600;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      opacity: 0.7;
    }
  }
`
