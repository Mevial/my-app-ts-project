import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../Redux/state";

type ProfileType = {
    profilePage: ProfilePageType
}

const Profile = (props: ProfileType) => {
    return (
        <div>
            <ProfileInfo profileInfoValue={'Ava + description'}/>
            <MyPosts posts={props.profilePage.posts}/>
        </div>
    )
}

export default Profile;