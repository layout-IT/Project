import React, {ChangeEvent, useState} from "react";
import s from './Login.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {ErrorLogin, getAuthMeTC, LoginTC, OpenCloseEyeAC} from "../../../redux/login-reducer/login-reducer";
import {Navigate, NavLink, useNavigate} from "react-router-dom";
import {RootState} from "../../../redux/store";
import Preloader from "../../features/preloader/Preloader";
import OpenCloseEye from "../../features/OpenEye/OpenCloseEye";

export const Login = React.memo(() => {
        const dispatch = useDispatch()
        const status = useSelector<RootState, string>(state => state.login.status)
        const IsLogin = useSelector<RootState, boolean>(state => state.login.isLogin)
        const openCloseEye = useSelector<RootState, boolean>(state => state.login.openCloseEye)
        const errorLogin = useSelector<RootState, boolean>(state => state.login.errorLogin)
        const errorLoginText = useSelector<RootState, string>(state => state.login.errorTextFromResponse)
        const navigate = useNavigate()
        let [titleEmail, setTitleEmail] = useState('')
        let [titlePassword, setTitlePassword] = useState('')
        let [titleRememberMe, setTitleRememberMe] = useState(false)
        const changeTitleEmail = (e: ChangeEvent<HTMLInputElement>) => {
            setTitleEmail(e.currentTarget.value)
        }
        const changeTitlePassword = (e: ChangeEvent<HTMLInputElement>) => {
            setTitlePassword(e.currentTarget.value)
        }
        const changeCheckboxRememberMe = (e: ChangeEvent<HTMLInputElement>) => {
            setTitleRememberMe(e.currentTarget.checked)
        }
        const click = () => {
            dispatch(LoginTC(titleEmail, titlePassword, titleRememberMe))
        }
        const funOpenCloseEye = () => {
            !openCloseEye ? dispatch(OpenCloseEyeAC(true)) : dispatch(OpenCloseEyeAC(false))
        }
        const removeTheErrorFromTheLogin = () => {
            dispatch(ErrorLogin(false))
        }
        if (IsLogin) {
            dispatch(getAuthMeTC())
            return <Navigate to={'/packs'}/>
        }

        return <>
            <p className={s.headerText}> Если нет желания проходить регистрацию, то <br/><br/> email:
                farsi-avanti@yandex.ru <br/><br/> Password: 12345678</p>
            {status === "loading" ? <Preloader/>
                : <div className={s.wrapper}>

                    <div className={s.container}>

                        <div className={s.title}>
                            <h1> It-Incubator</h1>
                            <h3>Sign In</h3>
                        </div>
                        <form action="#" className={s.stylesForTheform}>
                            <div className={s.emailFieldItems}>
                                <label className={errorLogin ? s.erorrLogin : ''}
                                       htmlFor="emailField">{errorLogin ? 'Error' : 'Email'}</label>
                                <input onClick={() => errorLogin && removeTheErrorFromTheLogin()} value={titleEmail}
                                       onChange={changeTitleEmail} id={"emailField"}
                                       type="email"
                                       className={s.emailField}/>
                            </div>
                            <div className={s.passFieldItems}>
                                <label className={errorLogin ? s.erorrLogin : ''}
                                       htmlFor="passField">{errorLogin ? errorLoginText : 'Password'}</label>
                                <input onClick={() => errorLogin && removeTheErrorFromTheLogin()} value={titlePassword}
                                       onChange={changeTitlePassword} id={"passField"}
                                       type={openCloseEye ? 'password' : 'text'}
                                       className={s.passField}/>
                                <OpenCloseEye/>
                            </div>
                            <div className={s.checkbox}><input
                                onChange={changeCheckboxRememberMe}
                                type="checkbox"/> Remember Me
                            </div>
                        </form>
                        <NavLink to={'/forgot-my-password'} className={s.forgotPass}>Forgot Password</NavLink>
                        <div className={s.footer}>
                            <button onClick={() => click()} className={s.LoginButton}>Login</button>
                            <div className={s.switchingToAcc}>Don't have an account?</div>
                            <NavLink to={'/registration'} className={s.toSignUp}>Sign Up</NavLink>
                        </div>
                    </div>
                </div>
            }

        </>
    }
)