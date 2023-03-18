import Header from "./components/Header";
import GrupoInput from "./components/GrupoInput";
//  import "./App.css";


export const App = () => {
  return (
    <div>
      <Header titulo="Negociações" />
      <div className="container">
      
      <GrupoInput />
        {/* OS COMPONENTES SERÃO ENCAIXADOS AQUI! */}
      </div>
    </div>
  );
};

