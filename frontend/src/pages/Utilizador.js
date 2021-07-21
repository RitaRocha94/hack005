import React from "react"
import styles from '../styles/Utilizador.module.css'
import { Link } from "react-router-dom"
function Utilizador() {
    return (
        <div className={styles.Utilizador}>
           <Link to="/Gestão">Gerir Doações</Link>
        </div>
    )
}
export default Utilizador;