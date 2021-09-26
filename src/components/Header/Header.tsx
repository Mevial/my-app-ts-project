import React from "react";
import {NavLink} from "react-router-dom";
import styles from "./Header.module.css";

type PropsHeaderType = {
    isAuth: boolean
    login: string | null
    logout: () => void
}
const Header = (props: PropsHeaderType) => {
    return <header className={styles.header}>
        <img src="https://i.pinimg.com/236x/89/5a/22/895a2289f22741838dfb3900789f7735.jpg" alt={'#'}/>
        <div className={styles.loginBlock}>
            {props.isAuth ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
                : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
}
export default Header;