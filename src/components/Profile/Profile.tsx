import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

/*type ProfilePropsType = {
    profileValue: string
}*/

// const Profile: React.FC<ProfilePropsType> = (props) => {
const Profile = () => {
    return (
        <div>
            <ProfileInfo profileInfoValue={'Ava + description'}/>
            <MyPosts postsValue={'Active'}/>
        </div>
    )
}

export default Profile;