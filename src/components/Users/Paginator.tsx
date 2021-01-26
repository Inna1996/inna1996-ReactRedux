import React, { useState } from 'react';
import cn from 'classnames'
import cl from './Paginator.module.css'

type PropsType = {
    totalUsersCount: number
    pageSise: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    portionsSise?: number
}

const Paginator: React.FC<PropsType> = ({ totalUsersCount, pageSise, currentPage, onPageChanged, portionsSise = 10, }) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSise);

    let pages: Array<number> = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionsCount = Math.ceil(pagesCount / portionsSise);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionNumber = (portionNumber - 1) * portionsSise + 1;
    let rightPortionNumber = portionNumber * portionsSise;

    return <div className={cl.paginator}>
        {portionNumber > 1 &&
            <button onClick={() => { setPortionNumber(portionNumber - 1) }}> PREV </button>}
        {
            pages.filter(p => p >= leftPortionNumber && p <= rightPortionNumber).map(p => {
                return <span className={
                    cn({
                        [cl.selectedPage]: currentPage === p
                    }, cl.pageNumber)
                }
                    key={p}
                    onClick={(e) => { onPageChanged(p) }
                    }> {p} </span>
            })
        }
        {
            portionsCount > portionNumber &&
            <button onClick={() => { setPortionNumber(portionNumber + 1) }}> NEXT </button>
        }
    </div>
}



export default Paginator;