import React, {ChangeEvent, useState} from "react";
import s from './NewPassword.module.scss'
import {useDispatch} from "react-redux";
import {useParams} from "react-router-dom";
import {setNewPasswordTC} from "../../../redux/new-password-reducer/new-password-reducer";

export const NewPassword = () => {
    const {token} = useParams()

    const dispatch = useDispatch()
    let [newPassword, setNewPassword] = useState('')

    const enteringANewPassword = (e: ChangeEvent<HTMLInputElement>) => {
        setNewPassword(e.currentTarget.value)
    }
    const getANewPassword = () => {
dispatch(setNewPasswordTC(newPassword,token as string))
    }
    return <div className={s.wrapper}>
        <div className={s.container}>
            <div className={s.title}>
                <h1> It-Incubator</h1>
                <h3>Create new password</h3>
            </div>
            <form action="#" className={s.stylesForTheform}>
                <div className={s.emailFieldItems}>
                    <input onChange={enteringANewPassword} id={"emailField"} type="password" className={s.emailField}
                           placeholder={'Password'}/>
                </div>
            </form>
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="eye" role="img"
                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className={s.svg}>
                <path fill="currentColor"
                      d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"
                      className=""></path>
            </svg>
            <p className={s.instructions}>Create new password and we will send you futher instructions to email</p>
            <div className={s.footer}>
                <button onClick={() => getANewPassword()} className={s.sendButton}>Create new password</button>

            </div>


        </div>
    </div>
}

export default NewPassword