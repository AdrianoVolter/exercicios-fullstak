import './App.css'
import Card from './components/Card'

function App() { 
  const img = "https://avatars.githubusercontent.com/u/91354299?v=4"
  const no = "Adriano Jose Volter"
  const id= "38"

  return(
    
   <Card  
   imagem={img}
   nome= {no}
   idade= {id}
   />
  )
}

export default App