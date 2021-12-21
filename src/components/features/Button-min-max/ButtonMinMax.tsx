import s from "./ButtonMinMax.module.scss";
import React from "react";
import {SortPacksAC} from "../../../redux/packs-reducer/packsReduser";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../redux/store";

export type PropsType = {
    name: string
}

export const ButtonMinMax = React.memo(function (props: PropsType) {
    const dispatch = useDispatch()
    const SortUpPlusName = (name:string) => {
        dispatch(SortPacksAC('0' + name))
        console.log(0)
    }
    const sortDownPlusName = (name:string) => {
        dispatch(SortPacksAC('1' + name))
        console.log(1)
    }
    const sortPacks = useSelector<RootState, string>(state => state.packs.sortPacks)
    console.log(sortPacks)
    return <div className={s.wrapper}>
        <div className={s.sd}>
            <span className={s.thSpan}>{props.name}</span>
            <div className={s.container}>
                <svg onClick={() => SortUpPlusName(props.name)} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-up"
                     role="img"
                     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                    <path fill="currentColor"
                          d="M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z"
                          className=""></path>
                </svg>
                <svg onClick={() => sortDownPlusName(props.name)} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-down" role="img"
                     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                    <path fill="currentColor"
                          d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"
                          className=""></path>
                </svg>
            </div>
        </div>
    </div>
})