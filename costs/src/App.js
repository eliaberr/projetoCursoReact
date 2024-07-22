import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Components/Pages/Home';
import Empresa from './Components/Pages/Empresa';
import Contato from './Components/Pages/Contato';
import NemProject from './Components/Pages/NemProject';
import Container from './Components/layout/Container';
import Navbar from './Components/layout/Navbar'
import Footer from './Components/layout/Footer';
import Projects from './Components/Pages/Projects';


function App() {
  return (
    <Router>
        <Navbar/>

        <Container customClass="min-heigth">
        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route path='/contato' element={<Contato/>} />
            <Route path='/empresa' element={<Empresa/>}/>
            <Route path='/projetos' element={<Projects/>}/>
            <Route path='/newProject' element={<NemProject/>}/>
        </Routes>
      </Container>
      <Footer/>
    </Router>
  );
}

export default App;
/*Parou no minuto 6*/