import React from 'react';
import LogoHome from "../assets/LogoHome";
import LogoMisEquipos from "../assets/LogoMisEquipos";
import LogoMiPerfil from '../assets/LogoMiPerfil';
import { NavLink } from "react-router-dom";
import styles from './Navbar.module.css';



function Navbar() {
    return (
        <>
        <nav>
        <div className={styles.logo}>
                <NavLink to={"/"}>
                    <LogoHome />
                </NavLink>
            </div>
            <div className={styles.logo}>
                <NavLink to={""}>
                    <LogoMisEquipos />
                </NavLink>
            </div>
            <div className={styles.logo}>
                <NavLink to={""}>
                    <LogoMiPerfil />
                </NavLink>
            </div>
        </nav>
        </>
    )
}

export default Navbar