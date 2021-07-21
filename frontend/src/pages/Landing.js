import { Link } from "react-router-dom"
import React from "react"
import styles from '../styles/Landing.module.css'


function Landing() {
    return (
        <div className={styles.Landing}>
            <div className={styles.container}>
                <img src={'./img/logo.png'} alt={'Logo - The FoodFund by Sintra'} />
            </div>
            <div className={styles.buttons}>
                <Link className={styles.ButtonDonate} to="/donate">Eu quero doar</Link>
                <Link className={styles.ButtonCollect} to="/collect">Eu quero levantar</Link>
            </div>
        </div>
    )
}
export default Landing;