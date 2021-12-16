import React, {ChangeEvent, useState} from "react";
import s from './Registration.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {
    LoginRegistrationAC,
    LogRegistrationTC,
    RegistrationConfirmPassworsError, RegistrationLengthPasswordErrorAC
} from "../../../redux/registration-reducer/registration-reducer";
import {RootState} from "../../../redux/store";
import {OpenCloseEyeAC, RequestStatusType} from "../../../redux/login-reducer/login-reducer";
import {Navigate, NavLink, useNavigate} from "react-router-dom";
import OpenCloseEye from "../../features/isOpenEye/OpenCloseEye";

export const Registration = () => {
    let isRegistered = useSelector<RootState, boolean>(state => state.registration.isRegistered)
    let registrationConfirmPasswordError = useSelector<RootState, boolean>(state => state.registration.registrationConfirmPasswordError)
    let registrationLengthPasswordError = useSelector<RootState, boolean>(state => state.registration.registrationLengthPasswordError)
    let errorEmailAlreadyExist = useSelector<RootState, boolean>(state => state.registration.errorEmailAlreadyExist)
    let error = useSelector<RootState, string>(state => state.login.errorLoginText)
    let openCloseEye = useSelector<RootState, boolean>(state => state.login.openCloseEye)

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
    const click = () => {
        console.log(error)
        if (titlePassword === confirmPassword && titlePassword.length > 7) {
            dispatch(LogRegistrationTC(titleEmail, titlePassword))
        } else if (titlePassword.length <= 7) {
            dispatch(RegistrationLengthPasswordErrorAC(true))
        } else if (titlePassword !== confirmPassword && titlePassword.length > 7) {
            dispatch(RegistrationConfirmPassworsError(true))
        }
    }

    const ChangeErrorToFalse = () => {
        dispatch(RegistrationConfirmPassworsError(false))
        dispatch(RegistrationLengthPasswordErrorAC(false))
    }
    if (isRegistered) {
        return <Navigate to={'/login'}/>
    }
    return <div className={s.wrapper}>
        <div className={s.container}>
            <div className={s.title}>
                <h1> It-Incubator</h1>
                <h3>Sign Up</h3>
            </div>
            <form action="#" className={s.stylesForTheform}>
                <div className={s.emailFieldItems}>
                    <label htmlFor="emailField">{errorEmailAlreadyExist ?error : 'Email'}</label>
                    <input onChange={createEmail} id={"emailField"} type="email" className={s.emailField}/>
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
                    <input onClick={() => ChangeErrorToFalse()} onChange={createConfirmPassword} id={"passField"}
                           type={openCloseEye ? 'password' : 'text'} className={s.passField}/>
                    <OpenCloseEye/>
                </div>
            </form>
            <div className={s.footer}>
                <button className={s.registerCancelButton}>Cancel</button>
                <button onClick={() => click()} className={s.registerCancelButton}>Register</button>
            </div>


        </div>
    </div>
}

export default Registration