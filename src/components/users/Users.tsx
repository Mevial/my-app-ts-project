import React from 'react';
import styles from "./users.module.css";
import userPhoto from "../../assets/images/user1.png";
import {UserType} from "../../Redux/users-reducer";
import {NavLink} from 'react-router-dom';
import axios from "axios";
import {followUnfollowAPI} from "../../api/api";

type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: [] | Array<UserType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    onPageChanged: (pageNumber: number) => void
}

const Users = (props: UsersPropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p ? styles.selectedPage : ''} onClick={(e) => {
                        props.onPageChanged(p)
                    }}>{p}</span>
                })}
            </div>

            {
                props.users.map(u => <div key={u.id}>
                        <span>
                            <div>
                                <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto}
                                     className={styles.userPhoto} alt={'ava'}/>
                                    </NavLink>
                            </div>
                             <div>
                                 {u.followed
                                     ? <button onClick={() => {
                                         followUnfollowAPI.deleteSubscribe(u.id
                                         )
                                             .then(data => {
                                                 if (data.resultCode === 0) {
                                                     props.unfollow(u.id)
                                                 }
                                             });
                                     }}>Unfollow</button>
                                     : <button onClick={() => {
                                         followUnfollowAPI.postSubscribe(u.id)
                                             .then(data => {
                                                 if (data.resultCode === 0) {
                                                     props.follow(u.id)
                                                 }
                                             });
                                     }}>Follow</button>}
                            </div>
                        </span>
                    <span>
                            <span><div>{u.name}</div>
                                <div>{u.status}</div>
                            </span>
                            <span>
                                <div>{"u.location.country"}</div>
                                <div>{"u.location.city"}</div>
                               </span>
                        </span>
                </div>)
            }
        </div>
    );
};

export default Users;