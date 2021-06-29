import React from 'react';
import styles from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
type ProfilePropsType = {
    profileValue: string | number
}

const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div>
        <div>
            <img src='https://purewows3.imgix.net/images/articles/2020_03/calming-pictures-cat.jpg?auto=format,compress&cs=strip' alt={'#'} />
        </div>
        <div>
            ava + description
        </div>
        <MyPosts profileValue={props.profileValue} />
    </div>
    )
}

export default Profile;