import React from "react";
import styles from './Dialogs.module.css'

type DialogsPropsType = {
    dialogsValue: string
}

const Dialogs: React.FC<DialogsPropsType> = (props) => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
            <div className={styles.dialog + ' ' + styles.active}>
                {props.dialogsValue}
            </div>
            <div className={styles.dialog}>
                {props.dialogsValue}
            </div>
            <div className={styles.dialog}>
                {props.dialogsValue}
            </div>
            <div className={styles.dialog}>
                {props.dialogsValue}
            </div>
            <div className={styles.dialog}>
                {props.dialogsValue}
            </div>
        </div>
    <div className={styles.messages}>
        <div className={styles.dialog}>Hi</div>
        <div className={styles.dialog}>How are you</div>
        <div className={styles.dialog}>How Yo you</div>
    </div>
</div>
)
}

export default Dialogs