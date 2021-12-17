import React, {useEffect} from "react";
import s from './PasswordChangeSsuccessful.module.scss'
import {useNavigate} from "react-router-dom";
import {SuccessfulPasswordReplacementAC} from "../../../redux/new-password-reducer/new-password-reducer";
import {useDispatch} from "react-redux";

function PasswordChangeSsuccessful() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    setTimeout(() => {
        navigate('/login')
    }, 4000)
    useEffect(() => {
        dispatch(SuccessfulPasswordReplacementAC(false))
    }, [])

    return <div className={s.wrapper}>
        <p className={s.text}>Password change was successful</p>
    </div>
}

export default PasswordChangeSsuccessful