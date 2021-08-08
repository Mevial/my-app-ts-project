import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

export type ProfileType = {
    // store: StoreType
}

const Profile = (props: ProfileType) => {
    return (
        <div>
            <ProfileInfo profileInfoValue={'Ava + description'}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;