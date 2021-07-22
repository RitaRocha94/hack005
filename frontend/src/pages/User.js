import React from "react"
import styles from '../styles/User.module.css'
import { Link } from "react-router-dom"
function User() {
    return (
        <div className={styles.Utilizador}>
           <Link to="/Gestão">Inserir Doações</Link>
           <Link to="/Gestão">Gerir Doações</Link>
        </div>
    )
}
export default User;