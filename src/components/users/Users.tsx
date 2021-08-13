import React from 'react';
import styles from './users.module.css'
import {UsersPropsType} from "./UsersContainer";

const Users = (props: UsersPropsType) => {
    if (props.users.length === 0) {
        props.setUsers([
                {
                    id: 1,
                    photoUrl: "https://motor.ru/imgs/2020/11/19/10/4352507/1b4de4336e196eb2f0b03caf177f7318c3058b17.jpg",
                    followed: false,
                    fullName: 'Dmitry',
                    status: 'I am a boss',
                    location: {city: 'Minsk', country: 'Belarus'}
                },
                {
                    id: 2,
                    photoUrl: "https://motor.ru/imgs/2020/11/19/10/4352507/1b4de4336e196eb2f0b03caf177f7318c3058b17.jpg",
                    followed: true,
                    fullName: 'Sasha',
                    status: 'I am a boss too',
                    location: {city: 'Moscow', country: 'Russia'}
                },
                {
                    id: 3,
                    photoUrl: "https://motor.ru/imgs/2020/11/19/10/4352507/1b4de4336e196eb2f0b03caf177f7318c3058b17.jpg",
                    followed: false,
                    fullName: 'Andrew',
                    status: 'I am a boss too',
                    location: {city: 'Kiev', country: 'Ukraine'}
                },
            ]
        )
    }
    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                        <span>
                            <div>
                                <img src={u.photoUrl} className={styles.userPhoto} alt={'ava'}/>
                            </div>
                             <div>
                                 {u.followed
                                     ? <button onClick={() => {
                                         props.unfollow(u.id)
                                     }}>Unfollow</button>
                                     : <button onClick={() => {
                                         props.follow(u.id)
                                     }}>Follow</button>}
                            </div>
                        </span>
                        <span>
                            <span><div>{u.fullName}</div>
                                <div>{u.status}</div>
                            </span>
                            <span>
                                <div>{u.location.country}</div>
                                <div>{u.location.city}</div>
                               </span>
                        </span>
                    </div>)
            }
        </div>
    );
};

export default Users;