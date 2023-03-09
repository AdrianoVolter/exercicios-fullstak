import './App.css'
import Card from './components/Card'
import 'boxicons'

function App() { 

const imagem = "https://avatars.githubusercontent.com/u/91354299?v=4"
const nome = "Adriano Jose Volter"
const idade ="38"
const linkGithub = 'https://github.com/AdrianoVolter'
const linkLinkedin = "https://www.linkedin.com/in/adrianovolter/"
  
  return(
    <div className='geral'>

       <Card  
        imagem = {imagem}
        nome = {nome}
        idade = {idade}
        github ={linkGithub}
        linkedin = {linkLinkedin}
        />

    </div>
  )
}

export default App











// const usuario = {
//   imagem : "https://avatars.githubusercontent.com/u/91354299?v=4",
//   nome : "Adriano Jose Volter",
//   idade :"38",
//   linkGithub : 'https://github.com/AdrianoVolter',
//   linkLinkedin : "https://www.linkedin.com/in/adrianovolter/",
// }



{/* <Card  
        imagem = {usuario.imagem}
        nome = {usuario.nome}
        idade = {usuario.idade}
        github ={usuario.linkGithub}
        linkedin = {usuario.linkLinkedin}
        /> */}