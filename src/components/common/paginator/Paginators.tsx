import styles from "./Paginators.module.css";
import React from "react";

type UsersProps = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
}

export const Paginator = ({
                              totalUsersCount,
                              pageSize,
                              currentPage,
                              onPageChanged,
                          }: UsersProps) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        <div>
            {pages.map((p) => (
                <span key={p} className={currentPage === p ? styles.selectedPage : ''}
                      onClick={() => {
                          onPageChanged(p)
                      }}>
                    {p}
                </span>
            ))}
        </div>
    </div>
}