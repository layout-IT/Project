import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../redux/store";
import {Navigate} from "react-router-dom";
import s from './Profile.module.scss'
import {LogOutTC, RequestStatusType} from "../../../redux/login-reducer/login-reducer";
import Preloader from "../../features/Preloader/Preloader";

function Profile() {
    const dispatch = useDispatch()
    const avatar = useSelector<RootState, string | undefined>(state => state.profile.avatar)
    const name = useSelector<RootState, string | undefined>(state => state.profile.name)
    let status = useSelector<RootState, RequestStatusType>(state => state.login.status)
    let IsLogin = useSelector<RootState, boolean>(state => state.login.isLogin)
    if (!IsLogin) {
        return <Navigate to={'/login'}/>
    }
    const LogOut = () => {
        dispatch(LogOutTC())
    }
    return <>
        {status === "loading" ? <Preloader/>
        :   <div>
                <img className={s.imgAvatar} src={avatar} alt="photo"/>
                <div className={s.userName}>{name}</div>
                <div className={s.avatar}>{avatar}</div>
                <button className={s.buttonLogOut} onClick={() => LogOut()}>LogOut</button>
            </div>
        }


    </>
}

export default Profile;