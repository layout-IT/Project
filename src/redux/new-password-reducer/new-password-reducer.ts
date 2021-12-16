import {Dispatch} from "redux";
import {Api} from "../../api/Api";
import {PreloaderStatus} from "../login-reducer/login-reducer";

type StateType = {}

const initialState: StateType = {}

export const newPasswordReducer = (state = initialState, action: ActionTypes): StateType => {
    switch (action.type) {
        default:
            return state
    }
}
export const setNewPassword = (password: string) => (dispatch: Dispatch) => {
    dispatch(PreloaderStatus('loading'))
    return Api.SetNewPassword(password)
        .then((res) => {
            console.log(res)            //Запрос не верный
        })
        .catch((err) => {
            console.log(err)
        })
        .finally(() => {
            dispatch(PreloaderStatus('succeeded'))
        })
}

type ActionTypes = any