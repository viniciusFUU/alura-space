import styles from './Menu.module.scss'

import home from '../../assests/icones/home-ativo.png'
import maisCurtidas from '../../assests/icones/mais-curtidas.png'
import maisVisitadas from '../../assests/icones/mais-vistas.png'
import novas from '../../assests/icones/novas.png'
import surpreendaMe from '../../assests/icones/surpreenda-me.png'

const Menu = () => {
    return(
        <nav className={styles.menu}>
            <ul className={styles.menu__lista}>
                <li className={styles.menu__item}>
                    <img src={home}/>
                    <a href='/'>Início</a>
                </li>
                <li className={styles.menu__item}>
                    <img src={maisCurtidas}/>
                    <a href='/'>As mais curtidas</a>
                </li>
                <li className={styles.menu__item}>
                    <img src={maisVisitadas}/>
                    <a href='/'>Mais vistas</a>
                </li>
                <li className={styles.menu__item}>
                    <img src={novas}/>
                    <a href='/'>Novas</a>
                </li>
                <li className={styles.menu__item}>
                    <img src={surpreendaMe}/>
                    <a href='/'>Surpreenda-me</a>
                </li>
            </ul>
        </nav>
    )
}

export default Menu