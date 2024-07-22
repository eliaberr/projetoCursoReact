import styles from './Footer.module.css'
import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'

function Footer(){
    return (
        <footer className={styles.footer}>
            <ul>
                <li className={styles.item_size}><FaFacebook/></li>
                <li className={styles.item_size}><FaInstagram/></li>
                <li className={styles.item_size}><FaLinkedin/></li>
            </ul>
            <p><span className={styles.costs}>Costs</span> &copy; 2021</p>
        </footer>
    )
}

export default Footer