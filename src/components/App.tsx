import React, {useEffect} from 'react';
import './App.scss';
import {Routes, Route, Navigate} from 'react-router-dom';
import Registration from "./pages/Registration/Registration";
import NewPassword from "./pages/NewPassword/NewPassword";
import Login from "./pages/Login/Login";
import ForgotYourPassword from "./pages/ForgotYourPassword/ForgotYourPassword";
import NotFound from "./pages/404/404";
import CheckEmail from "./pages/CheckEmail/CheckEmail";
import Profile from "./pages/Profile/Profile";
import {useSelector} from "react-redux";
import {RootState} from "../redux/store";
import {useNavigate} from 'react-router-dom'

export const PATH = {
    PROFILE: '/profile',
    REGISTRATION: '/registration',
    TEST: '/test',
    NEW_PASSWORD: '/new-password/:token',
    LOGIN: '/login',
    FORGOT_MY_PASSWORD: '/forgot-my-password',
    NOT_FOUND: '/404',
    CHECK_EMAIL: '/check-email'
}


function App() {

    return (
        <div className="App">
            <Routes>
                <Route path={PATH.LOGIN} element={<Login/>}/>
                <Route path={PATH.PROFILE} element={<Profile/>}/>
                <Route path={PATH.REGISTRATION} element={<Registration/>}/>
                <Route path={PATH.NEW_PASSWORD} element={<NewPassword/>}/>
                <Route path={PATH.FORGOT_MY_PASSWORD} element={<ForgotYourPassword/>}/>
                <Route path={PATH.CHECK_EMAIL} element={<CheckEmail/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
        </div>
    );
}

export default App;
