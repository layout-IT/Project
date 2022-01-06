import React, {useEffect} from 'react';
import './App.scss';
import {Route, Routes, useNavigate} from 'react-router-dom';
import Registration from "./pages/Registration/Registration";
import NewPassword from "./pages/NewPassword/NewPassword";
import ForgotYourPassword from "./pages/ForgotYourPassword/ForgotYourPassword";
import NotFound from "./pages/404/404";
import CheckEmail from "./pages/CheckEmail/CheckEmail";
import {useDispatch, useSelector} from "react-redux";
import PasswordChangeSsuccessful from "./features/PasswordChangeSuccessfil/PasswordChangeSsuccessful";
import Cards from './pages/Cards/Cards';
import {getAuthMeTC} from "../redux/login-reducer/login-reducer";
import {RootState} from "../redux/store";
import {Profile} from "./pages/Profile/Profile";
import { Login } from './pages/Login/Login';
import {Packs} from "./pages/Packs/Packs";

export const PATH = {
    PROFILE: '/',
    REGISTRATION: '/registration',
    TEST: '/test',
    NEW_PASSWORD: '/new-password/:token',
    LOGIN: '/login',
    FORGOT_MY_PASSWORD: '/forgot-my-password',
    NOT_FOUND: '/404',
    SUCCESS_CHANGE_PASSWORD: '/success-change-password',
    CHECK_EMAIL: '/check-email',
    PACKS: '/packs',
    CARDS: '/cards',
}

function App () {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const IsLogin = useSelector<RootState, boolean>(state => state.login.isLogin)
    useEffect(() => {
        if (!IsLogin) {
            navigate("/login")
        }
            dispatch(getAuthMeTC())


    }, [])

    return (
        <div className="App">
            <Routes>
                <Route path={PATH.PROFILE} element={<Profile/>}/>
                <Route path={PATH.LOGIN} element={<Login/>}/>
                <Route path={PATH.REGISTRATION} element={<Registration/>}/>
                <Route path={PATH.NEW_PASSWORD} element={<NewPassword/>}/>
                <Route path={PATH.FORGOT_MY_PASSWORD} element={<ForgotYourPassword/>}/>
                <Route path={PATH.SUCCESS_CHANGE_PASSWORD} element={<PasswordChangeSsuccessful/>}/>
                <Route path={PATH.CHECK_EMAIL} element={<CheckEmail/>}/>
                <Route path={PATH.PACKS} element={<Packs/>}/>
                <Route path={PATH.CARDS} element={<Cards/>}/>
                <Route path={'*'} element={<NotFound/>}/>
            </Routes>
        </div>
    );
}

export default App;
