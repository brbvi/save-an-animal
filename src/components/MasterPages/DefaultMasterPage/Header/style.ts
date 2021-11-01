import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  background-color: var(--background);
  width: 100%;
  height: 100px;

  display: flex;

  .teste {
    position: absolute;
    left: 100px;
    top: 10px;

    .testinh {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      img {
        width: 8rem;
      }

      p {
        font-size: 2rem;
        color: var(--text);
      }
    }

    @media (max-width: 700px) {
      left: 50px;
    }
  }

  .linkhover {
    text-decoration: none;
    color: rgba(255, 255, 255, 1);
    margin: 3rem 0;
    font-size: 2.2rem;
    font-weight: 300;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: 0.5s !important;

    &:hover {
      color: rgba(255, 255, 255, 0.5);
      border-left: 3px solid white;
      padding-left: 1px;
    }

    .iconMenu {
      margin: 0 1.4rem;
    }
  }
`
export const Line = styled.div`
  width: 2px;
  height: 30px;
  margin: 0 2rem;
  background-color: var(--text);
`
