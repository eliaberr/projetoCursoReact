import styles from './Home.module.css'
import savings from '../../img/savings.svg'
import Linkbutton from '../layout/Linkbutton'

function Home(){
    return(
        <section className={styles.home_container}>
            <h1>Bem Vindo ao <span>Costs</span></h1>
            <p>Comece a Gerenciar os Sus Projetos Agora mesmo!</p>
            <Linkbutton to='/newproject' text="Criar Projeto"/>
            <img src={savings} alt="Costs" />
        </section>
    )
}

export default Home