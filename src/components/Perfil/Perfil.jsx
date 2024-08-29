/* eslint-disable react/prop-types */
import styles from './Perfil.module.css';

const Perfil = ({ nomeUsuario }) => {
    /*const usuario = {
        nome: 'Anderson',
        avatar: 'https://github.com/Andersonpoanorte.png'
    }*/

    return (
        <header className={styles.header}>
            <img className={styles.avatar} src={`https://github.com/${nomeUsuario}.png`} />
            <h1 className={styles.name}>{nomeUsuario}</h1>
        </header>
    )
}

export default Perfil;