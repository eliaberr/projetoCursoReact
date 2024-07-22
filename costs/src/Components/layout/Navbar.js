import {Link} from 'react-router-dom'
import logo from '../../img/costs_logo.png'
import styles from './Navbar.module.css'


function Navbar(){
    return (
        <nav className={styles.navbar}>
         
                <Link to="/">
                    <img src={logo} alt="Costs"/>
                </Link>
                <ul className={styles.list}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/projetos">Projetos</Link></li>
                    <li><Link to="/empresa">Empresa</Link></li>
                    <li><Link to="/contato">Contato</Link></li>
                </ul>
                
            
        </nav>
    )
}

export default Navbar