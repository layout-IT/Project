import React from "react";
import s from './ForgotYourPassword.module.scss'

export const ForgotYourPassword = () => {
    return <div className={s.wrapper}>
        <div className={s.container}>
            <div className={s.title}>
                <h1> It-Incubator</h1>
                <h3>Forgot your password?</h3>
            </div>
            <form action="#" className={s.stylesForTheform}>
                <div className={s.emailFieldItems}>
                    <input id={"emailField"} type="email" className={s.emailField} placeholder={'Email'}/>
                </div>
            </form>
            <p className={s.instructions}>Enter your email address and we will send you further instructions</p>
            <div className={s.footer}>
                <button className={s.sendButton}>Send Instructions</button>
                <a href="#" className={s.passwordQuestion}>Did you remember your password?</a>
                <a href="#" className={s.tryLogging}>Try logging in</a>
            </div>
        </div>
    </div>
}

export default ForgotYourPassword