import React, {ChangeEvent, useEffect, useState} from "react";
import s from './ForgotYourPassword.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../redux/store";
import {RequestStatusType} from "../../../redux/login-reducer/login-reducer";
import {FordotPasswordTC} from "../../../redux/forgot-your-password-reducer/forgot-your-password-reducer";
import {NavLink, useNavigate} from "react-router-dom";

export const ForgotYourPassword = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    let status = useSelector<RootState, RequestStatusType>(state => state.login.status)
    let [Email, setEmail] = useState('')
    let [from, setFrom] = useState('test-front-admin <cbu3ucm@mail.ru>')
    let [message, setMessage] = useState(`<div style="background-color: lime; padding: 15px"> password recovery link:<a href='https://layout-it.github.io/Project/#/new-password/$token$'>link</a></div>`)
    const EmailForgotPassword = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
    }
    const SendInstructions = () => {
        dispatch(FordotPasswordTC(Email, from, message))
        navigate('/check-email')
    }
    return <div className={s.wrapper}>
        <div className={s.container}>
            <div className={s.title}>
                <h1> It-Incubator</h1>
                <h3>Forgot your password?</h3>
            </div>
            <form action="#" className={s.stylesForTheform}>
                <div className={s.emailFieldItems}>
                    <input onChange={EmailForgotPassword} id={"emailField"} type="email" className={s.emailField}
                           placeholder={'Email'}/>
                </div>
            </form>
            <p className={s.instructions}>Enter your email address and we will send you further instructions</p>
            <div className={s.footer}>
                <button onClick={() => SendInstructions()} className={s.sendButton}>Send Instructions</button>
                <div className={s.passwordQuestion}>Did you remember your password?</div>
                <NavLink to={'/login'} className={s.tryLogging}>Try logging in</NavLink>
            </div>
        </div>
    </div>
}

export default ForgotYourPassword