import './App.css'
import Card from './components/Card'
import 'boxicons'

function App() { 
  const usuario = {
    imagem : "https://avatars.githubusercontent.com/u/91354299?v=4",
    alt: "Perfil github",
    nome : "Adriano Jose Volter",
    idade :"38",
    github : 'https://github.com/AdrianoVolter',
    linkedin : "https://www.linkedin.com/in/adrianovolter/",
  }
  
  return(
    <div className='geral'>
       <Card  usuario = {usuario} />
    </div>
  )
}

export default App














{/* <Card  
        imagem = {usuario.imagem}
        nome = {usuario.nome}
        idade = {usuario.idade}
        github ={usuario.linkGithub}
        linkedin = {usuario.linkLinkedin}
        /> */}