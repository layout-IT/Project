import React, {ChangeEvent, Dispatch, SetStateAction, useState} from "react";
import s from './AddNewPackPopUp.module.scss'
import {postcardPackTC} from "../../../redux/packs-reducer/packsReduser";
import {useDispatch} from "react-redux";

type propsType = {
    setAddpackPP: Dispatch<SetStateAction<boolean>>
}

function AddNewPackPopUp (props: propsType) {
    let [activeButtonC, setActiveButtonC] = useState(false)
    let [activeButtonS, setActiveButtonS] = useState(false)
    let [inputValue, setInputValue] = useState('')
    const dispatch = useDispatch()
    const inputChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value)
    }
    const clickOnSvg = () => {
        props.setAddpackPP(false)
    }
    const changeButtonCancel = () => {
        setActiveButtonC(true)
        props.setAddpackPP(false)
        if (activeButtonS) {
            setActiveButtonS(false)
        }
    }
    const changeButtonSave = () => {
        setActiveButtonS(true)
        dispatch(postcardPackTC(inputValue))
        props.setAddpackPP(false)
        if (activeButtonC) {
            setActiveButtonC(false)
        }
    }

    return <div className={s.wrapper}>
        <div className={s.some} onClick={() => props.setAddpackPP(false)}></div>
        <div className={s.container}>
            <div className={s.header}>
                <div className={s.title}>Add new pack</div>
                <svg onClick={() => clickOnSvg()} aria-hidden="true" focusable="false" data-prefix="fas"
                     data-icon="times" role="img"
                     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"
                     className="svg-inline--fa fa-times fa-w-11 fa-2x">
                    <path fill="currentColor"
                          d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
                          className=""></path>
                </svg>
            </div>
            <div className={s.main}>
                <input type="text" placeholder={'Name pack'} onChange={inputChangeValue}/>
            </div>
            <div className={s.footer}>
                <button onClick={() => changeButtonCancel()}
                        className={activeButtonC ? s.clickButton : s.button}>Cancel
                </button>
                <button onClick={() => changeButtonSave()} className={activeButtonS ? s.clickButton : s.button}>Save
                </button>
            </div>
        </div>
    </div>
}

export default AddNewPackPopUp