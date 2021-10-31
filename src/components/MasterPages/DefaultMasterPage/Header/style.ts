import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  background-color: white;
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
        font-size: 1.8rem;
      }
    }

    @media (max-width: 700px) {
      left: 50px;
    }
  }

  .linkhover {
    text-decoration: none;
    color: rgba(255, 255, 255, 1);
    margin-bottom: 2rem;
    font-size: 2rem;
    font-weight: 300;

    transition: color 0.4s, border 0.4s, padding-left 0.4s !important;

    &:hover {
      color: rgba(255, 255, 255, 0.5);
      border-left: 3px solid white;
      padding-left: 5px;
    }
  }
`
