import styled from 'styled-components';
import { Wrapper } from './Components/WrapperItens';
import { GlobalStyle } from "./Styles/Global";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`

function App() {

  return (
    <Container>
      <Wrapper numberPokemons={0}/>
      <GlobalStyle />
      <div id="sentinel"> fim </div>
    </Container>
  )
}

export default App
