import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../redux/store";
import {useNavigate, Navigate} from "react-router-dom";
import s from './Profile.module.scss'
import {getAuthMeTC, LogOutTC, RequestStatusType} from "../../../redux/login-reducer/login-reducer";
import Preloader from "../../features/preloader/Preloader";;

function Profile() {
    const dispatch = useDispatch()
    const avatar = useSelector<RootState, string | undefined>(state => state.profile.avatar)
    const name = useSelector<RootState, string | undefined>(state => state.profile.name)
    let status = useSelector<RootState, string>(state => state.login.status)
    let IsLogin = useSelector<RootState, boolean>(state => state.login.isLogin)
    const navigate = useNavigate()
    const LogOut = () => {
        dispatch(LogOutTC())
    }
    const navlinkGotoPacks =  () =>{
        navigate('/packs')
    }
    return <>
        {status === "loading" ? <Preloader/>
            : <div className={s.wrapper}>
                <div className={s.buttonGoToPacks}>
                    <div className={s.gotoPacksText}>Go to packs</div>
                    <svg onClick={() => navlinkGotoPacks()} width={'20px'} aria-hidden="true" focusable="false"
                         data-prefix="fas"
                         data-icon="arrow-circle-right" role="img" xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 512 512"
                         className="svg-inline--fa fa-arrow-circle-right fa-w-16 fa-2x">
                        <path fill="currentColor"
                              d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm-28.9 143.6l75.5 72.4H120c-13.3 0-24 10.7-24 24v16c0 13.3 10.7 24 24 24h182.6l-75.5 72.4c-9.7 9.3-9.9 24.8-.4 34.3l11 10.9c9.4 9.4 24.6 9.4 33.9 0L404.3 273c9.4-9.4 9.4-24.6 0-33.9L271.6 106.3c-9.4-9.4-24.6-9.4-33.9 0l-11 10.9c-9.5 9.6-9.3 25.1.4 34.4z"
                              className=""></path>
                    </svg>
                </div>
                <img className={s.imgAvatar} src={avatar} alt="photo"/>
                <div className={s.userName}>{name}</div>
                <div className={s.avatar}>{avatar}</div>
                <button className={s.buttonLogOut} onClick={() => LogOut()}>LogOut</button>
            </div>
        }
    </>
}
export default Profile