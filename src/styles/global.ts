import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  :root{
    --primary: white;
    --background:#181818;
    --text: #ebebeb;
  } 

  button, input {
    background: 0;
    border: 0;
    cursor: pointer;
    font-family: 'Exo 2', sans-serif;
  }

  html{
    font-size: 62.5%;
    font-family: 'Exo 2', sans-serif; /* 10px */
  }

  body{
    background: var(--background);
    
  }

  /* Position and sizing of burger button */
.bm-burger-button {
  position: fixed;
  width: 36px;
  height: 30px;
  right: 100px;
  top: 36px;

  @media (max-width: 700px) {
    right: 50px;
    }
}

/* Color/shape of burger icon bars */
.bm-burger-bars {
  background: rgba(189, 189, 189, 1);
}

/* Color/shape of burger icon bars on hover*/
.bm-burger-bars-hover {
  background: rgba(189, 189, 189, 0.6);
}

/* Position and sizing of clickable cross button */
.bm-cross-button {
  height: 134px;
  width: 134px;
}

/* Color/shape of close button cross */
.bm-cross {
  background: #bdc3c7;
}

/*
Sidebar wrapper styles
Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
*/
.bm-menu-wrap {
  position: fixed;
  height: 100%;
}

/* General sidebar styles */
.bm-menu {
  background: #373a47;
  padding: 2.5em 1.5em 0;
  font-size: 1.15em;
}

/* Morph shape necessary with bubble or elastic */
.bm-morph-shape {
  fill: #373a47;
}

/* Wrapper for item list */
.bm-item-list {
  color: #b8b7ad;
  padding: 0.8em;
}

/* Individual item */
.bm-item {
  display: inline-block;
}

/* Styling of overlay */
.bm-overlay {
  background: rgba(0, 0, 0, 0.3);
}

`
