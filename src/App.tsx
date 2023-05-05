import styled from 'styled-components';
import { Wrapper } from './Components/WrapperItens';
import { GlobalStyle } from "./Styles/Global";

const Container = styled.div`
  display: flex;
  justify-content: center;
`

function App() {

  return (
    <Container>
      <Wrapper numberPokemons={0}/>
      <GlobalStyle />
    </Container>
  )
}

export default App
