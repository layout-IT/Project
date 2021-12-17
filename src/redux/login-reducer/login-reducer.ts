import {Dispatch} from "redux"
import {Api, ResponsType} from "../../api/Api";

type ActionTypes =
    | ReturnType<typeof IsLoginAC>
    | ReturnType<typeof OpenCloseEyeAC>
    | ReturnType<typeof PreloaderStatus>
    | ReturnType<typeof ErrorLogin>
    | ReturnType<typeof ErrorTextFromResponse>

export type RequestStatusType = 'loading' | 'succeeded'

export type initialStateType = typeof initialState

const initialState = {
    isLogin: false,
    openCloseEye: false,
    status: 'succeeded',
    errorLogin: false,
    errorTextFromResponse: '',
}

export const loginReducer = (state: initialStateType = initialState, action: ActionTypes): initialStateType => {
    switch (action.type) {
        case "IS-LOGIN":
            return {...state, isLogin: action.isLogin}
        case "OPEN-CLOSE-EYE":
            return {...state, openCloseEye: action.openCloseEye}
        case "PRELOADER-STATUS":
            return {...state, status: action.status}
        case "ERROR-LOGIN":
            return {...state, errorLogin: action.errorLogin}
        case 'ERROR-Text-FROM-RESPONSE':
            return {...state, errorTextFromResponse: action.errorTextFromResponse}
        default:
            return state
    }
}
export const ProfileAC = (data: ResponsType) => {
    return {
        type: 'PROFILE-USER-DATA',
        payload: {
            ...data
        }
    } as const

}

export const IsLoginAC = (isLogin: boolean) => {
    return {
        type: 'IS-LOGIN',
        isLogin
    } as const
}
export const OpenCloseEyeAC = (openCloseEye: boolean) => {
    return {
        type: 'OPEN-CLOSE-EYE',
        openCloseEye
    } as const
}

export const PreloaderStatus = (status: RequestStatusType) => {
    return {
        type: 'PRELOADER-STATUS',
        status
    } as const
}
export const ErrorLogin = (errorLogin: boolean) => {
    return {
        type: 'ERROR-LOGIN',
        errorLogin
    } as const
}

export const ErrorTextFromResponse = (errorTextFromResponse: string) => {
    return {
        type: 'ERROR-Text-FROM-RESPONSE',
        errorTextFromResponse
    } as const
}

export const LoginTC = (email: string, password: string, rememberMe: boolean) => (dispatch: Dispatch) => {
    dispatch(PreloaderStatus('loading'))

    return Api.login(email, password, rememberMe)
        .then((res) => {
            dispatch(ProfileAC(res.data))
            dispatch(IsLoginAC(true))
        })
        .catch((err) => {
            dispatch(ErrorLogin(true))
            const error = err.response ? err.response.data.error : (err.message + ', more details in the console');
            dispatch(ErrorTextFromResponse(error))
        })
        .finally(() => {
            dispatch(PreloaderStatus('succeeded'))
        })
}

export const LogOutTC = () => (dispatch: Dispatch) => {
    dispatch(PreloaderStatus('loading'))
    return Api.logOut()
        .then((res) => {
            dispatch(IsLoginAC(false))
        })
        .finally(() => {
            dispatch(PreloaderStatus('succeeded'))
        })
}


