import React, {ChangeEvent, useState} from "react";
import s from './NewPassword.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {setNewPasswordTC} from "../../../redux/new-password-reducer/new-password-reducer";
import {RootState} from "../../../redux/store";
import {IsLoginAC} from "../../../redux/login-reducer/login-reducer";
import OpenCloseEye from "../../features/isOpenEye/OpenCloseEye";

export const NewPassword = () => {
    const {token} = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    let [newPassword, setNewPassword] = useState('')

    const enteringANewPassword = (e: ChangeEvent<HTMLInputElement>) => {
        setNewPassword(e.currentTarget.value)
    }
    const getANewPassword = () => {
        dispatch(setNewPasswordTC(newPassword, token as string))
        dispatch(IsLoginAC(false))
        navigate('/login')
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
                    <OpenCloseEye/>
                </div>
            </form>
            <p className={s.instructions}>Create new password and we will send you futher instructions to email</p>
            <div className={s.footer}>
                <button onClick={() => getANewPassword()} className={s.sendButton}>Create new password</button>

            </div>


        </div>
    </div>
}

export default NewPassword