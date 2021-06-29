import React from "react";
import styles from './Settings.module.css'

type SettingsPropsType = {
settingsValue: string
}

const Settings: React.FC<SettingsPropsType> = (props) => {
    return (
        <div className={styles.content}>
            {props.settingsValue}
        </div>
    )
}
export default Settings