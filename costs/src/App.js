import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './Components/Pages/Home';
import Empresa from './Components/Pages/Empresa';
import Contato from './Components/Pages/Contato';
import NemProject from './Components/Pages/NemProject';

function App() {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/contato">Contato</Link>
        <Link to="/empresa">Empresa</Link>
        <Link to="/newProject">Novo Projeto</Link>
      </div>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/contato' element={<Contato/>} />
        <Route path='/empresa' element={<Empresa/>}/>
        <Route path='/newProject' element={<NemProject/>}/>
      </Routes>
    </Router>
  );
}

export default App;
/*Parou no minuto 6*/