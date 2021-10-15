import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  padding: 1.5rem 1rem;

  background: gray;

  display: flex;
  justify-content: space-between;

  .wraperLogo {
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 1.2rem;
    width: 20%;
    box-shadow: 0 0 0 0;
    position: relative;
    top: 0px;
    left: 0px;

    transition: border 0.3s, box-shadow 0.3s, top 0.3s, left 0.3s;

    &:hover {
      cursor: pointer;
      box-shadow: 0px 0px 0px 3px #545454;
    }

    img {
      width: 6rem;
      margin-right: 1rem;
    }

    h1 {
      font-weight: 500;
    }
  }
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 80%;
`

export const AnimationLink = styled.div`
  padding: 0;

  border-bottom: 1px solid rgba(0, 0, 0, 0);

  transition: padding 0.4s, border-bottom 0.4s;
  &:hover {
    padding: 1rem 0rem;
    border-bottom: 1px solid rgba(0, 0, 0, 1);
  }

  a {
    text-decoration: none;
    font-size: 1.6rem;
    color: black;
  }
`
