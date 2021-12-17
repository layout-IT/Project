import {Dispatch} from "redux";
import {Api} from "../../api/Api";
import {PreloaderStatus} from "../login-reducer/login-reducer";

export type StateType = typeof initialState

const initialState= {
    infoAboutSuccessfulPasswordReplacement : ''
}

export const newPasswordReducer = (state = initialState, action: ActionTypes): StateType => {
    switch (action.type) {
        case "SUCCESSFUL-PASSWORD-REPLACEMENT":
            return {...state, infoAboutSuccessfulPasswordReplacement : action.infoAboutSuccessfulPasswordReplacement }
        default:
            return state
    }
}
export const setNewPasswordTC = (password: string, resetPasswordToken: string) => (dispatch: Dispatch) => {
    dispatch(PreloaderStatus('loading'))
    return Api.SetNewPassword(password, resetPasswordToken)
        .then((res) => {
            dispatch(SuccessfulPasswordReplacementAC(res.data.info))
        })
        .catch((err) => {
        })
        .finally(() => {
            dispatch(PreloaderStatus('succeeded'))
        })
}
const SuccessfulPasswordReplacementAC = (infoAboutSuccessfulPasswordReplacement: string) => {
    return {
        type: 'SUCCESSFUL-PASSWORD-REPLACEMENT',
        infoAboutSuccessfulPasswordReplacement
    }as const
}
type ActionTypes =
    | ReturnType<typeof SuccessfulPasswordReplacementAC>