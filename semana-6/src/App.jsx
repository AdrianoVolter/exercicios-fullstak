import './App.css'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="" target="_blank">
          <img src="https://avatars.githubusercontent.com/u/91354299?v=4" className="logo" alt="github" />
        </a>
        {/* <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}
      </div>
      <h3>Adriano Jose Volter</h3>
      <div className="card">
        <p >
          38 anos
        </p>
        {/* <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p> */}
      </div>
      <p className="read-the-docs">
        Aprendendo React
      </p>
    </div>
  )
}

export default App