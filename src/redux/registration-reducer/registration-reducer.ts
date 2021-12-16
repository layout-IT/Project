import {Dispatch} from "redux";
import {Api} from "../../api/Api";
import {ErrorLogin, ErrorTextFromResponse, IsLoginAC, PreloaderStatus, ProfileAC} from "../login-reducer/login-reducer";

type StateType = {
    isRegistered: boolean
    registrationConfirmPasswordError: boolean
    registrationLengthPasswordError: boolean
    errorEmailAlreadyExist: boolean
}

const initialState: StateType = {
    isRegistered: false,
    registrationLengthPasswordError: false,
    registrationConfirmPasswordError: false,
    errorEmailAlreadyExist: false,
}

export const registrationReducer = (state = initialState, action: ActionTypes): StateType => {
    switch (action.type) {
        case "IS-RAGISTERED":
            return {...state, isRegistered: action.isRegistered}
        case "REGISTRATION-CONFIRM-PASSWORD-ERROR":
            return {...state, registrationConfirmPasswordError: action.registrationConfirmPasswordError}
        case "REGISTRATION-LENGTH-PASSWORD-ERROR":
            return {...state, registrationLengthPasswordError: action.registrationLengthPasswordError}
        case "ERROR-EMAIL-ALREADY-EXIST":
            return {...state, errorEmailAlreadyExist: action.errorEmailAlreadyExist}
        default:
            return state
    }
}

export const LogRegistrationTC = (email: string, password: string) => (dispatch: Dispatch) => {
    dispatch(PreloaderStatus('loading'))
    return Api.loginRegistration(email, password)
        .then((res) => {
            dispatch(LoginRegistrationAC(true))

        })
        .catch((err) => {
            const error = err.response ? err.response.data.error : (err.message + ', more details in the console');
            dispatch(ErrorTextFromResponse(error))
            dispatch(ErrorEmailAlreadyExistAC(true))
        })
        .finally(() => {
            dispatch(PreloaderStatus('succeeded'))
        })
}


export const ErrorEmailAlreadyExistAC = (errorEmailAlreadyExist: boolean) => {
    return {
        type: 'ERROR-EMAIL-ALREADY-EXIST',
        errorEmailAlreadyExist
    } as const
}

export const LoginRegistrationAC = (isRegistered: boolean) => {
    return {
        type: 'IS-RAGISTERED',
        isRegistered
    } as const
}
export const RegistrationConfirmPassworsError = (registrationConfirmPasswordError: boolean) => {
    return {
        type: 'REGISTRATION-CONFIRM-PASSWORD-ERROR',
        registrationConfirmPasswordError
    } as const
}

export const RegistrationLengthPasswordErrorAC = (registrationLengthPasswordError: boolean) => {
    return {
        type: "REGISTRATION-LENGTH-PASSWORD-ERROR",
        registrationLengthPasswordError
    } as const
}

type ActionTypes =
    | ReturnType<typeof LoginRegistrationAC>
    | ReturnType<typeof RegistrationConfirmPassworsError>
    | ReturnType<typeof RegistrationLengthPasswordErrorAC>
    | ReturnType<typeof ErrorEmailAlreadyExistAC>