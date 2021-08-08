import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import store, {ActionsTypes, ProfilePageType} from "../../Redux/store";

export type ProfileType = {
    profilePage: ProfilePageType
    message: string
    dispatch: (action: ActionsTypes) => void
}

const Profile = (props: ProfileType) => {
    return (

        <div>
            <ProfileInfo profileInfoValue={'Ava + description'}/>
            <MyPosts
                posts={props.profilePage.posts}
                message={props.message}
                dispatch={props.dispatch}/>
        </div>
    )
}

export default Profile;