import styles from './Cabecalho.module.scss'
import Logo from './logo.png'
import Search from './search.png'

const Cabecalho = () => {
    return(
        <header className={styles.cabecalho}>
            <img src={Logo} alt="Logo do ALura Space"/>
            <div className={styles.cabecalho__container}
            >
                <input 
                type="text"
                placeholder="O que você procura?"
                className={styles.cabecalho__input}
                />
                <img 
                src={Search} 
                alt="ícone da lupa"
                className={styles.cabecalho__icone}
                />
            </div>
        </header>
    )
}

export default Cabecalho