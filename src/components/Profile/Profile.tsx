import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import store, {ProfilePageType} from "../../Redux/state";

export type ProfileType = {
    profilePage: ProfilePageType
    addPostCallback: (postMessage: string) => void
    message: string
    changeNewTextCallback: (newText: string) => void

}

const Profile = (props: ProfileType) => {
    return (

        <div>
            <ProfileInfo profileInfoValue={'Ava + description'}/>
            <MyPosts posts={props.profilePage.posts} message={props.message} changeNewTextCallback={props.changeNewTextCallback} addPostCallback={props.addPostCallback}/>
        </div>
    )
}

export default Profile;