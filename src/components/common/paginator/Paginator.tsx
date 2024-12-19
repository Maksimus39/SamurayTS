import React from "react";
import styles from '../paginator/Paginator.module.css';
import classNames from 'classnames';

type UsersProps = {
    totalItemsCount: number;
    pageSize: number;
    currentPage: number;
    onPageChanged: (pageNumber: number) => void;
    portionSize?: number;
};

export const Paginator = ({
                              totalItemsCount,
                              pageSize,
                              currentPage,
                              onPageChanged,
                              portionSize = 15
                          }: UsersProps) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    const [portionNumber, setPortionNumber] = React.useState(1);
    const leftPortionNumber = (portionNumber - 1) * portionSize + 1;
    const rightPortionNumber = portionNumber * portionSize;

    function prevPortionNumberHandler() {
        setPortionNumber(portionNumber - 1)
    }

    function nextPortionNumberHandler() {
        setPortionNumber(portionNumber + 1)
    }

    return (
        <div className={styles.paginator}>
            {portionNumber > 1 &&
                <button onClick={prevPortionNumberHandler}>PREV</button>}

            {pages
                .filter(p => p >= leftPortionNumber && p <= rightPortionNumber)
                .map((p) => {

                    function onPageChangeHandler() {
                        onPageChanged(p)
                    }

                    return (
                        <span
                            className={classNames(styles.pageNumber, {[styles.selectedPage]: currentPage === p})}
                            key={p}
                            onClick={onPageChangeHandler}>{p}</span>
                    );
                })}
            {portionCount > portionNumber && <button onClick={nextPortionNumberHandler}>NEXT</button>}
        </div>
    );
};
