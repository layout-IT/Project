import {applyMiddleware, combineReducers, createStore} from "redux";
import {forgotYourPasswordReducer} from "./forgot-your-password-reducer/forgot-your-password-reducer";
import {loginReducer} from "./login-reducer/login-reducer";
import {newPasswordReducer} from "./new-password-reducer/new-password-reducer";
import {profileReducer} from "./profile-reducer/profile-reducer";
import {registrationReducer} from "./registration-reducer/registration-reducer";
import thunkMiddleware from 'redux-thunk'
import {packsReducer} from "./packs-reducer/packsReduser";

const rootReducer = combineReducers({
    forgotMyPassword: forgotYourPasswordReducer,
    login: loginReducer,
    newPassword: newPasswordReducer,
    profile: profileReducer,
    registration: registrationReducer,
    packs:packsReducer,
})

export type RootState = ReturnType<typeof store.getState>

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))