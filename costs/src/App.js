import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './Components/Pages/Home';
import Empresa from './Components/Pages/Empresa';
import Contato from './Components/Pages/Contato';
import NemProject from './Components/Pages/NemProject';
import Container from './Components/layont/Container';

function App() {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/contato">Contato</Link>
        <Link to="/empresa">Empresa</Link>
        <Link to="/newProject">Novo Projeto</Link>
      </div>
      <Container customClass="min-heigth">
        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route path='/contato' element={<Contato/>} />
            <Route path='/empresa' element={<Empresa/>}/>
            <Route path='/newProject' element={<NemProject/>}/>
        </Routes>
      </Container>
      <p>footer</p>
    </Router>
  );
}

export default App;
/*Parou no minuto 6*/