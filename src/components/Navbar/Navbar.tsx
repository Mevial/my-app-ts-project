import React from "react";
import { NavLink } from "react-router-dom";
import styles from './Navbar.module.css'

// type PropsNavbarType = {
//     navValue: string
// }
const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.item}>
                <NavLink to="/profile" activeClassName={styles.activeLink}>Profile</NavLink>
            </div>
            <div className={`${styles.item} ${styles.active}`}>
                <NavLink to="/dialogs" activeClassName={styles.activeLink}>Messages</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="/News" activeClassName={styles.activeLink}>News</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="/Music" activeClassName={styles.activeLink}>Music</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="/Settings" activeClassName={styles.activeLink}>Settings</NavLink>
            </div>
        </nav>
    )
}
export default Navbar