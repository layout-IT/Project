import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../redux/store";
import {useNavigate, Navigate} from "react-router-dom";
import s from './Profile.module.scss'
import {getAuthMeTC, LogOutTC, RequestStatusType} from "../../../redux/login-reducer/login-reducer";
import Preloader from "../../features/preloader/Preloader";

export const Profile = React.memo(() => {
        const dispatch = useDispatch()
        const avatar = useSelector<RootState, string | undefined>(state => state.profile.avatar)
        const name = useSelector<RootState, string | undefined>(state => state.profile.name)
        let status = useSelector<RootState, string>(state => state.login.status)
        let IsLogin = useSelector<RootState, boolean>(state => state.login.isLogin)
        const navigate = useNavigate()
        const LogOut = () => {
            dispatch(LogOutTC())
        }
        return <>
            {status === "loading" ? <Preloader/>
                : <div className={s.wrapper}>

                    <img className={s.imgAvatar} src={avatar} alt="photo"/>
                    <div className={s.userName}>{name}</div>
                    <div className={s.avatar}>{avatar}</div>
                    <button className={s.buttonLogOut} onClick={() => LogOut()}>LogOut</button>
                </div>
            }
        </>
    }
)