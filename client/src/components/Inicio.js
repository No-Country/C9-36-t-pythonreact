import React from 'react';
import Logo from "../assets/Logo";
import { NavLink } from "react-router-dom";
import styles from './Inicio.module.css';

function Inicio() {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <NavLink to={"/"}>
                    <Logo />
                </NavLink>
            </div>

            <h1 className={styles.titulo}>Te damos la bienvenida a la comunidad de developers más grande de LATAM</h1>

            <div className={styles.boton}>
            <button>Continuar</button>
            </div>
        </div>
    )
}

export default Inicio
