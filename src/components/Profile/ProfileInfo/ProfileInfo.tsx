import React from 'react';
import styles from './ProfileInfo.module.css';

type ProfileInfoPropsType = {
    profileInfoValue: string
}

const ProfileInfo: React.FC<ProfileInfoPropsType> = (props) => {
    return (
        <div>
            <div>
                <img
                    src='https://purewows3.imgix.net/images/articles/2020_03/calming-pictures-cat.jpg?auto=format,compress&cs=strip'
                    alt={'#'}/>
            </div>
            <div className={styles.descriptionBlock}>
                {props.profileInfoValue}
            </div>
        </div>
    )
}

export default ProfileInfo;