import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font: 400 16px Roboto, sans-serif;
  }

.container {
  padding: 45px 25px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

button {
  color: white;
  font-size: larger;
  border: 0;
  padding: 12px 16px;
  margin-top: 10px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  display: block;
  width: 100%;
  background: #8257e9;
}

  button:hover {
    background: #cb6ff2;
    color: black;
    border: 3px;
    transition: 0.4s;
  }

button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Products */
.products {
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 3rem;
}

.product img {
  max-width: 100%;
}



@media only screen and (max-width: 980px) {

  .products {
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(3, 1fr);
    margin-top: 3rem;
  }
  }

@media only screen and (max-width: 600px) {
  .products {
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(2, 1fr);
    margin-top: 3rem;
  }
}

@media only screen and (max-width: 460px) {
  .products {
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(1, 1fr);
    margin-top: 3rem;
  }
}

`
