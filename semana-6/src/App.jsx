import './App.css'
import Card from './components/Card'
import 'boxicons'
function App() { 
  const img = "https://avatars.githubusercontent.com/u/91354299?v=4"
  const no = "Adriano Jose Volter"
  const id= "38"
  //const iconGit = "https://github.com/AdrianoVolter"


  return(
    <div className='geral'>
       <Card  
        imagem={img}
        nome= {no}
        idade= {id}
        
        />

        
    </div>
  
  )
}

export default App