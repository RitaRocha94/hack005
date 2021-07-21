import { Link } from "react-router-dom"
import React from "react"
import styles from '../styles/NavBar.module.css'

function NavBar(){
    return(
        <div className={styles.NavBar}>
            <div  className={styles.Brand}><Link to="/">The FoodFund</Link></div>
            <Link to="/Quem-Somos">Quem Somos</Link>
            <Link to="/FAQ">Perguntas Frequentes</Link>
            <Link to="/Voluntario">Quero Ser Voluntário</Link>
            <Link to="/Donate">Doar</Link>
            <Link to="/Collect">Pontos de Levantamento</Link>
            <Link to="/Utilizador">Area de Voluntário</Link>
        </div>
    )
}
export default NavBar;