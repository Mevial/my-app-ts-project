import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import store, {ActionsTypes, ProfilePageType} from "../../Redux/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {StoreType} from "../../Redux/redux-store";

export type ProfileType = {
    store: StoreType
}

const Profile = (props: ProfileType) => {
    return (
        <div>
            <ProfileInfo profileInfoValue={'Ava + description'}/>
            <MyPostsContainer store={props.store}/>
        </div>
    )
}

export default Profile;