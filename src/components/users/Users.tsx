import React from 'react';

import {UsersPropsType} from "./UsersContainer";
import {Pagination} from "../common/Pagination/Pagination";
import {User} from "./User/User";


// type UsersPropsType = {
//     totalUsersCount: number
//     pageSize: number
//     currentPage: number
//     users: [] | Array<UserType>
//     follow: (userId: number) => void
//     unfollow: (userId: number) => void
//     onPageChanged: (pageNumber: number) => void
//     followingInProgress: Array<boolean | number>
// }

type UsersAPIComponentPropType = {
    onPageChanged: (pageNumber: number) => void
}

export const Users: React.FC<UsersPropsType & UsersAPIComponentPropType> = ({
                                                                                totalUsersCount,
                                                                                pageSize,
                                                                                currentPage,
                                                                                onPageChanged,
                                                                                users,
                                                                                follow,
                                                                                unfollow,
                                                                                followingInProgress,
                                                                                ...props
                                                                            }) => {

    return (
        <div>
            <Pagination totalItemsCount={totalUsersCount}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageChanged={onPageChanged}
                        portionSize={10}/>
            <div>
                {users.map((u) =>
                    <User key={u.id}
                          user={u}
                          follow={follow}
                          unfollow={unfollow}
                          followingInProgress={followingInProgress}/>
                )
                }
            </div>
        </div>
    );

}

export default Users;