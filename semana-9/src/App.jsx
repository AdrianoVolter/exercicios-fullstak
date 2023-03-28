import './App.css'
import { Outlet } from 'react-router-dom' // 4 - [x] importar o outlet do react-router-dom para renderizar as rotas
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function App() {

  return (
    <div className="App">
      <Navbar />
        <Outlet />
      <Footer />
    </div>
  )
}

export default App
