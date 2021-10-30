import React from 'react';
import styles from './User.module.css'
import userPhoto from '../../../assets/images/user1.png'
import {NavLink} from 'react-router-dom';
import {UserType} from "../../../Redux/users-reducer";


type UserPropTypes = {
    user: UserType
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    followingInProgress: Array<boolean | number>
}

export const User: React.FC<UserPropTypes> = ({
                                                  user, followingInProgress,
                                                  follow,
                                                  unfollow

                                              }) => {
    return (
        <div>


                        <span>
                            <div>
                                <NavLink to={'/profile/' + user.id}>
                                <img src={user.photos.small != null ? user.photos.small : userPhoto}
                                     className={styles.userPhoto} alt={'ava'}/>
                                    </NavLink>
                            </div>
                             <div>
                                 {user.followed
                                     ? <button disabled={followingInProgress.some(id => id === user.id)}
                                               onClick={() => {
                                                   unfollow(user.id)
                                               }}>
                                         Unfollow</button>
                                     : <button disabled={followingInProgress.some(id => id === user.id)}
                                               onClick={() => {
                                                   follow(user.id)
                                               }}>
                                         Follow</button>}
                            </div>
                        </span>
            <span>
                            <span><div>{user.name}</div>
                                <div>{user.status}</div>
                            </span>
                            <span>
                                <div>{}</div>
                                <div>{}</div>
                               </span>
                    </span>
        </div>
    );
};
