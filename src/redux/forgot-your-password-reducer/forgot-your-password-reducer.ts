import {Dispatch} from "redux";
import {Api} from "../../api/Api";
import {PreloaderStatus} from "../login-reducer/login-reducer";

type StateType = {}

const initialState: StateType = {}

export const forgotYourPasswordReducer = (state = initialState, action: ActionTypes): StateType => {
    switch (action.type) {
        default:
            return state
    }
}

export const FordotPasswordTC =(email: string, from: string,message:string) => (dispatch: Dispatch) => {
    dispatch(PreloaderStatus('loading'))
    return  Api.ForgotPassword(email,from,message)
        .then( (res) => {
            console.log(res.data)
            console.log(res.headers)
            console.log(res.status)
            console.log(res.statusText)
            console.log(res.config)
            console.log(res.request)
        })
        .catch((err) => {

        })
        .finally(() => {
            dispatch(PreloaderStatus('succeeded'))
        })
}

type ActionTypes = any