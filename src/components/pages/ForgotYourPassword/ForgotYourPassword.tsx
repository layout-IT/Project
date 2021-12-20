import React, {ChangeEvent, useEffect, useState} from "react";
import s from './ForgotYourPassword.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../redux/store";
import {IsLoginAC, RequestStatusType} from "../../../redux/login-reducer/login-reducer";
import {FordotPasswordTC} from "../../../redux/forgot-your-password-reducer/forgot-your-password-reducer";
import {NavLink, useNavigate} from "react-router-dom";
import Preloader from "../../features/preloader/Preloader";

export const ForgotYourPassword = () => {
    let status = useSelector<RootState, string>(state => state.login.status)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    let [Email, setEmail] = useState('')
    let [from, setFrom] = useState('test-front-admin <cbu3ucm@mail.ru>')
    const EmailForgotPassword = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
    }
    const letterToEmail = () => {
        return '`<div style="background-color: lime; padding: 15px"> password recovery link:<a href=\'https://layout-it.github.io/Project#/new-password/$token$\'>link</a></div>`'
    }
    let [message, setMessage] = useState(letterToEmail)
    let [validEmail, setValidEmail] = useState('')
    const removeValidationFieldError = () => {
        setValidEmail('')
    }
    const SendInstructions = () => {
        if (Email.length <= 1) {
            setValidEmail('Invalid email address')
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(Email)) {
            setValidEmail('Invalid email address')
        } else {
            dispatch(FordotPasswordTC(Email, from, message))
            dispatch(IsLoginAC(true))
            navigate('/check-email')
        }

    }
    return <>
        {status === "loading" ? <Preloader/>
            : <div className={s.wrapper}>
                <div className={s.container}>
                    <div className={s.title}>
                        <h1> It-Incubator</h1>
                        <h3>Forgot your password?</h3>
                    </div>
                    <form action="#" className={s.stylesForTheform}>
                        <div className={s.emailFieldItems}>
                            <input onChange={EmailForgotPassword} id={"emailField"} type="email"
                                   className={s.emailField}
                                   placeholder={'Email'}
                                   onClick={() => removeValidationFieldError()}/>
                        </div>
                    </form>
                    <p className={validEmail.length > 1 ? s.red : s.instructions}>{validEmail.length > 1 ? validEmail : 'Enter your email address and we will send you further instructions'}</p>
                    <div className={s.footer}>
                        <button onClick={() => SendInstructions()} className={s.sendButton}>Send Instructions</button>
                        <div className={s.passwordQuestion}>Have you already registered?</div>
                        <NavLink to={'/login'} className={s.tryLogging}>Try logging in</NavLink>
                    </div>
                </div>
            </div>
        }
    </>
}

export default ForgotYourPassword