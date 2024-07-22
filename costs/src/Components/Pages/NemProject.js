import styles from './NewProjects.module.css'
import Projectform from '../project/Projectform'

function NemProject(){
    return(
        <div className={styles.newPoject_Container}>
            <h1>Criar Projeto</h1>
            <p>Crie Seu Projeto Para Depois Adicionar os Serviços</p>
            <Projectform/>
        </div>
    )
}

export default NemProject