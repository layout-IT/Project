import React from "react";
import s from './LoginError.module.scss'

function LoginError(){
    return <div className={s.wrapper}>
        ошибка ввода логина или пароля
    </div>
}

export default LoginError