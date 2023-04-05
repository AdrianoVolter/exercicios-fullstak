import { SCButton } from "./components/Button.style"

function App() {
  

  return (
    <div >
      <SCButton
        onClick={() => {
          console.log("clicked")
        }}
      >Click</SCButton>
      
  
    </div>
  )
}

export default App
