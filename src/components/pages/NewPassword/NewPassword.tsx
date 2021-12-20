import React, {ChangeEvent, useState} from "react";
import s from './NewPassword.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {
    setNewPasswordTC,
    SuccessfulPasswordReplacementAC
} from "../../../redux/new-password-reducer/new-password-reducer";
import {RootState} from "../../../redux/store";
import {IsLoginAC} from "../../../redux/login-reducer/login-reducer";
import OpenCloseEye from "../../features/openEye/OpenCloseEye";
import Preloader from "../../features/preloader/Preloader";
import {
    RegistrationLengthPasswordErrorAC
} from "../../../redux/registration-reducer/registration-reducer";
import PasswordChangeSsuccessful from "../../features/passwordChangeSuccessfil/PasswordChangeSsuccessful";

export const NewPassword = () => {
    let registrationLengthPasswordError = useSelector<RootState, boolean>(state => state.registration.registrationLengthPasswordError)
    let openCloseEye = useSelector<RootState, boolean>(state => state.login.openCloseEye)
    let successfulPasswordReplacement = useSelector<RootState, boolean>(state => state.newPassword.successfulPasswordReplacement)
    const {token} = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    let [newPassword, setNewPassword] = useState('')
    let status = useSelector<RootState, string>(state => state.login.status)
    const enteringANewPassword = (e: ChangeEvent<HTMLInputElement>) => {
        setNewPassword(e.currentTarget.value)
    }
    const getANewPassword = () => {
        if (newPassword.length <= 7) {
            dispatch(RegistrationLengthPasswordErrorAC(true))
        } else {
            dispatch(setNewPasswordTC(newPassword, token as string))
        }
    }
    if (successfulPasswordReplacement) {
        navigate('/success-change-password')
    }
    const ChangeErrorToFalse = () => {
        dispatch(RegistrationLengthPasswordErrorAC(false))
    }
    return <>
        {status === "loading" ? <Preloader/>
            : <div className={s.wrapper}>
                <div className={s.container}>
                    <div className={s.title}>
                        <h1> It-Incubator</h1>
                        <h3>Create new password</h3>
                    </div>
                    <form action="#" className={s.stylesForTheform}>
                        <div className={s.emailFieldItems}>
                            <input onChange={enteringANewPassword} id={"emailField"}
                                   onClick={() => ChangeErrorToFalse()}
                                   type={openCloseEye ? 'password' : 'text'}
                                   className={s.emailField}
                                   placeholder={'Password'}/>
                            <OpenCloseEye/>
                        </div>
                    </form>
                    <p className={registrationLengthPasswordError ? s.redError : s.instructions}>
                        {registrationLengthPasswordError ? 'The password must have more than 7 characters!' : 'Create new password and we will send you futher instructions to email'}</p>
                    <div className={s.footer}>
                        <button onClick={() => getANewPassword()} className={s.sendButton}>Create new password
                        </button>
                    </div>
                </div>
            </div>
        }
    </>
}

export default NewPassword