import { SCButton, SCButton2 } from "./components/Button.style"
import { Wrapper } from "./components/Wrapper"

function App() {
  

  return (
    <Wrapper >
      <SCButton
        onClick={() => {
          console.log("clicked button 1")
        }}
      >Incluir</SCButton>
      <SCButton2
        onClick={() => {
          console.log("clicked button 2")
        }}
      >
        Excluir
        </SCButton2>
  
    </Wrapper>
  )
}

export default App
