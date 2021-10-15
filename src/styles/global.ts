import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  button, input {
    background: 0;
    border: 0;
    cursor: pointer;
  }

  html{
    font-size: 62.5%;
    font-family: 'Exo 2', sans-serif; /* 10px */
  }
`
