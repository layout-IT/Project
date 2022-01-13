import React, {ChangeEvent, useState} from "react";
import s from './Registration.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {
    ErrorEmailAlreadyExistAC,
    LogRegistrationTC,
    RegistrationConfirmPassworsError,
    RegistrationLengthPasswordErrorAC
} from "../../../redux/registration-reducer/registration-reducer";
import {RootState} from "../../../redux/store";
import {Navigate, useNavigate} from "react-router-dom";
import OpenCloseEye from "../../features/OpenEye/OpenCloseEye";
import Preloader from "../../features/preloader/Preloader";

export const Registration = () => {
    let isRegistered = useSelector<RootState, boolean>(state => state.registration.isRegistered)
    let registrationConfirmPasswordError = useSelector<RootState, boolean>(state => state.registration.registrationConfirmPasswordError)
    let registrationLengthPasswordError = useSelector<RootState, boolean>(state => state.registration.registrationLengthPasswordError)
    let errorEmailAlreadyExist = useSelector<RootState, boolean>(state => state.registration.errorEmailAlreadyExist)
    let errorTextFromResponse = useSelector<RootState, string>(state => state.login.errorTextFromResponse)
    let openCloseEye = useSelector<RootState, boolean>(state => state.login.openCloseEye)
    let status = useSelector<RootState, string>(state => state.login.status)
    const dispatch = useDispatch()
    let [titleEmail, setTitleEmail] = useState('')
    let [titlePassword, setTitlePassword] = useState('')
    let [confirmPassword, setconfirmPassword] = useState('')

    const createEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setTitleEmail(e.currentTarget.value)
    }
    const createPassword = (e: ChangeEvent<HTMLInputElement>) => {
        setTitlePassword(e.currentTarget.value)
    }
    const createConfirmPassword = (e: ChangeEvent<HTMLInputElement>) => {
        setconfirmPassword(e.currentTarget.value)
    }
    const navigate = useNavigate()
    const clickOnRegister = () => {
        if (titlePassword === confirmPassword && titlePassword.length > 7) {
            dispatch(LogRegistrationTC(titleEmail, titlePassword))
        } else if (titlePassword.length <= 7) {
            dispatch(RegistrationLengthPasswordErrorAC(true))
        } else if (titlePassword !== confirmPassword && titlePassword.length > 7) {
            dispatch(RegistrationConfirmPassworsError(true))
        }
    }
    const cancelClick = () => {
        navigate('/login')
    }
    const ChangeErrorToFalse = () => {
        dispatch(RegistrationConfirmPassworsError(false))
        dispatch(RegistrationLengthPasswordErrorAC(false))
        dispatch(ErrorEmailAlreadyExistAC(false))
    }
    if (isRegistered) {
        return <Navigate to={'/login'}/>
    }
    return <>
        {status === "loading" ? <Preloader/>
            : <div className={s.wrapper}>
                <div className={s.container}>
                    <div className={s.title}>
                        <h1> It-Incubator</h1>
                        <h3>Sign Up</h3>
                    </div>
                    <form action="#" className={s.stylesForTheform}>
                        <div className={s.emailFieldItems}>
                            <label className={errorEmailAlreadyExist ? s.errorTextFromResponse : ''}
                                   htmlFor="emailField">{errorEmailAlreadyExist ? errorTextFromResponse : 'Email'}</label>
                            <input onClick={() => ChangeErrorToFalse()} onChange={createEmail} id={"emailField"}
                                   type="email" className={s.emailField}/>
                        </div>
                        <div className={s.passFieldItems}>
                            <label
                                className={registrationLengthPasswordError ? s.registrationConfirmPasswordError : ''}
                                htmlFor="passField">{registrationConfirmPasswordError ? "Password" : (registrationLengthPasswordError ? 'The password must be more than 7 characters' : "Password")}</label>
                            <input onClick={() => ChangeErrorToFalse()} onChange={createPassword} id={"passField"}
                                   type={openCloseEye ? 'password' : 'text'} className={s.passField}/>
                            <OpenCloseEye/>
                        </div>
                        <div className={s.passFieldItems}>
                            <label
                                className={registrationConfirmPasswordError ? s.registrationConfirmPasswordError : ''}
                                htmlFor="passField">{registrationConfirmPasswordError ? 'You entered different passwords. ' : "Confirm Password"}</label>
                            <input onClick={() => ChangeErrorToFalse()} onChange={createConfirmPassword}
                                   id={"passField"}
                                   type={openCloseEye ? 'password' : 'text'} className={s.passField}/>
                            <OpenCloseEye/>
                        </div>
                    </form>
                    <div className={s.footer}>
                        <button onClick={() => cancelClick()} className={s.registerCancelButton}>Cancel</button>
                        <button onClick={() => clickOnRegister()} className={s.registerCancelButton}>Register</button>
                    </div>
                </div>
            </div>
        }
    </>
}

export default Registration