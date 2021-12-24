import React, {useState} from 'react'
import s from './Paginator.module.css'

type  UsersPropsType = {
    onPageChenged: (pageNumber: number) => void,
    currentPage: number
    totalUsersCount: number
    pageSize: number
    splittingAccountsInto: number

}

export let Paginator = (props: UsersPropsType) => {
    let pageesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pageesCount + 1; i++) {
        pages.push(i)
    }
    let numberOfBlocks = Math.ceil(pageesCount / props.splittingAccountsInto);
    let [porionNumber, setPortionNumber] = useState(1);
    let leftBorder = (porionNumber - 1) * props.splittingAccountsInto + 1;
    let rightBorder = porionNumber * props.splittingAccountsInto;

    return <div className={s.wrapper}>
        {
            porionNumber > 1 ? <button onClick={() => setPortionNumber(porionNumber - 1)}>prev</button> : ''
        }
        {pages.filter(p => p >= leftBorder && p <= rightBorder).map((p, i) => {
            return <li key={i} className={s.numbers}>
                <span className={props.currentPage === p ? s.active : ''}
                      onClick={() => props.onPageChenged(p)}>{p}</span>
            </li>

        })}
        {
            numberOfBlocks > porionNumber ?
                <button onClick={() => setPortionNumber(porionNumber + 1)}> next </button> : ''
        }
    </div>

}