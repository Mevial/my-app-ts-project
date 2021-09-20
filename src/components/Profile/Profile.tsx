import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

export type ProfileType = {
    profile: any
    status: string
    updateUserStatus: (status: string) => void
}

const Profile = (props: ProfileType) => {
    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateUserStatus={props.updateUserStatus} />
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;