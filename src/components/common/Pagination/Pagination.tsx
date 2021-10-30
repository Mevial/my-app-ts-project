import React from "react";
import s from "./Pagination.module.css";

export type PaginatorPropTypes = {
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
    onPageChanged: (pageNumber: number) => void,
}

export const Pagination: React.FC<PaginatorPropTypes> = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    // }
    // pages.push('...')
    // pages.push(pagesCount)


    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span key={p.toString()}
                                 className={(currentPage === p) ? s.selectedPage : ""}
                                 onClick={() => {
                                     onPageChanged(p)
                                 }}>{p}</span>
                })}
            </div>
        </div>
    );
}