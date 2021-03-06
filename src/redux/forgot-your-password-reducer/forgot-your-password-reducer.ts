import {Dispatch} from "redux";
import {ApiLogin} from "../../api/apiLogin";
import {PreloaderStatus} from "../login-reducer/login-reducer";

type StateType = {}

const initialState: StateType = {}

export const forgotYourPasswordReducer = (state = initialState, action: ActionTypes): StateType => {
    switch (action.type) {
        default:
            return state
    }
}

export const FordotPasswordTC = (email: string, from: string, message: string) => (dispatch: Dispatch) => {
    dispatch(PreloaderStatus('loading'))
    return ApiLogin.ForgotPassword(email, from, message)
        .then((res) => {

        })
        .catch((err) => {

        })
        .finally(() => {
            dispatch(PreloaderStatus('succeeded'))
        })
}

type ActionTypes = any