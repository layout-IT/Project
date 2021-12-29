import React, {ChangeEvent, Dispatch, SetStateAction, useState} from "react";
import s from './DeletePopUp.module.scss'
import {useDispatch} from "react-redux";
import {deletePackTC} from "../../redux/packs-reducer/packsReduser";

type propsType={
    setDelete:Dispatch<SetStateAction<boolean>>
    deletingById: string
}
function DeletePopUp (props:propsType) {
    let [activeButtonC, setActiveButtonC] = useState(false)
    let [activeButtonS, setActiveButtonS] = useState(false)
    let [inputValue, setInputValue] = useState('')
    const dispatch = useDispatch()
    const inputChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value)
    }
    const changeButtonCancel = () => {
        setActiveButtonC(true)
        props.setDelete(false)
        if(activeButtonS){
            setActiveButtonS(false)
        }
    }
    const clickOnSvg = () => {
        props.setDelete(false)
    }
    const changeButtonDel = () => {
        setActiveButtonS(true)
        dispatch(deletePackTC(props.deletingById))
        props.setDelete(false)
        if(activeButtonC){
            setActiveButtonC(false)
        }
    }

    return <div className={s.wrapper}>
    <div className={s.some} onClick={()=>   props.setDelete(false)}></div>
        <div className={s.container}>
            <div className={s.header}>
                <div className={s.title}>Delete Pack</div>
                <svg onClick={()=>clickOnSvg()} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" role="img"
                     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"
                     className="svg-inline--fa fa-times fa-w-11 fa-2x">
                    <path fill="currentColor"
                          d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
                          className=""></path>
                </svg>
            </div>
            <div className={s.main}>
                <p>Do you want to remove pack? All cards will be excluded from this course.</p>
            </div>
            <div className={s.footer}>
                <button onClick={()=> changeButtonCancel()} className={activeButtonC ? s.clickButton : s.button}>Cancel</button>
                <button onClick={()=> changeButtonDel()} className={activeButtonS ? s.clickButton : s.button}>Delete</button>
            </div>
        </div>
    </div>
}

export default DeletePopUp