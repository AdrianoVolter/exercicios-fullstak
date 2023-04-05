import {  SCButton2 } from "./components/Button.style"
import { Wrapper } from "./components/Wrapper"
import Botao from "./components/Botao"

function App() {
  

  return (
    <Wrapper >
      <SCButton2 
        backgroundColor="blue"
      >Excluir
      </SCButton2><br />

      <SCButton2 
        backgroundColor="red"
      >Excluir
      </SCButton2><br />

      <SCButton2 >Excluir</SCButton2><br />
      <SCButton2 >Excluir</SCButton2><br />
      <Botao backgroundColor="#888">Excluir</Botao>
    </Wrapper>
  )
}

export default App
