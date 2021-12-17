import {Dispatch} from "redux";
import {Api} from "../../api/Api";
import {PreloaderStatus} from "../login-reducer/login-reducer";

export type StateType = typeof initialState

const initialState = {
    successfulPasswordReplacement: false
}

export const newPasswordReducer = (state = initialState, action: ActionTypes): StateType => {
    switch (action.type) {
        case "INFO-SUCCESSFUL-PASSWORD-REPLACEMENT":
            return {...state, successfulPasswordReplacement: action.successfulPasswordReplacement}
        default:
            return state
    }
}
export const setNewPasswordTC = (password: string, resetPasswordToken: string) => (dispatch: Dispatch) => {
    dispatch(PreloaderStatus('loading'))
    return Api.SetNewPassword(password, resetPasswordToken)
        .then((res) => {
            dispatch(SuccessfulPasswordReplacementAC(true))
        })
        .catch((err) => {
        })
        .finally(() => {
            dispatch(PreloaderStatus('succeeded'))
        })
}
export const SuccessfulPasswordReplacementAC = (successfulPasswordReplacement: boolean) => {
    return {
        type: 'INFO-SUCCESSFUL-PASSWORD-REPLACEMENT',
        successfulPasswordReplacement
    } as const
}

type ActionTypes =
    | ReturnType<typeof SuccessfulPasswordReplacementAC>