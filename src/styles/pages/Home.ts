import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: baseline;
  flex-direction: column;
  padding: 20px;

  h1 {
    font-size: 50px;
    color: ${props => props.theme.colors.primary};
    max-width: 60%;
  }

  p {
    margin-top: 24px;
    font-size: 24px;
    line-height: 32px;
  }

  button {
    margin-top: 40px;
    max-width: 400px;
    padding: 12px 16px;
    height: 50px;
  }
`
