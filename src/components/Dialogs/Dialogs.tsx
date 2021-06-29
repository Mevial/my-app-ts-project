import React from "react";
import styles from './Dialogs.module.css'

type DialogsPropsType = {
dialogsValue: string
}

const Dialogs: React.FC<DialogsPropsType> = (props) => {
    return (
        <div className={styles.content}>
            {props.dialogsValue}
        </div>
    )
}

export default Dialogs