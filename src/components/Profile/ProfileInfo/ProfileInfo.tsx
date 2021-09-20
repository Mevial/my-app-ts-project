import React from 'react';
import styles from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

type ProfileInfoPropsType = {
    profile: any
}

const ProfileInfo: React.FC<ProfileInfoPropsType> = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img
                    src='https://purewows3.imgix.net/images/articles/2020_03/calming-pictures-cat.jpg?auto=format,compress&cs=strip'
                    alt={'#'}/>
            </div>
            <div className={styles.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                <ProfileStatus status={'Hello my friends'}/>
            </div>
        </div>
    )
}

export default ProfileInfo;