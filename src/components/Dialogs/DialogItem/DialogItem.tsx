import React from "react";
import {NavLink} from "react-router-dom";
import styles from '../Dialogs.module.css'
import {DialogType} from "../../../Redux/store";



type DialogItemPropsType = {
    dialogs: DialogType
}


const DialogItem = (props: DialogItemPropsType) => {
    let path = "/dialogs/" + props.dialogs.id
    return <div className={styles.dialog + ' ' + styles.active}>
        <NavLink to={path}>{props.dialogs.name}</NavLink>
    </div>
}



export default DialogItem