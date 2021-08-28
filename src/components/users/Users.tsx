import React from 'react';
import styles from "./users.module.css";
import userPhoto from "../../assets/images/user1.png";
import {UserType} from "../../Redux/users-reducer";
import {NavLink} from 'react-router-dom';
import axios from "axios";

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
                                         axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                             withCredentials: true,
                                             headers: {
                                                 "API-KEY": "49ab6c75-ab9e-4861-b120-5af838a1df3c"
                                             }
                                         })
                                             .then(response => {
                                                 if (response.data.resultCode == 0) {
                                                     props.unfollow(u.id)
                                                 }
                                             });
                                     }}>Unfollow</button>
                                     : <button onClick={() => {
                                         axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                             withCredentials: true,
                                             headers: {
                                                 "API-KEY": "49ab6c75-ab9e-4861-b120-5af838a1df3c"
                                             }
                                         })
                                             .then(response => {
                                                 if (response.data.resultCode == 0) {
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