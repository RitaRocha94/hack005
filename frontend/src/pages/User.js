import React from "react"
import styles from '../styles/User.module.css'
import { Link } from "react-router-dom"
function User() {
    return (
        <div className={styles.Utilizador}>
            <h2 className={styles.Title}>Área do Utilizador</h2>
           <Link to="/Gestão">Inserir Doações</Link>
           <Link to="/">Gerir Doações</Link>
           <Link to="/">Perfil</Link>
        </div>
    )
}
export default User;